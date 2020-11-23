import { Path, normalize, strings } from '@angular-devkit/core';
import {Rule,SchematicsException,Tree,apply,applyTemplates,chain,filter,mergeWith,move,noop,schematic,externalSchematic,MergeStrategy,url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addImportToModule, getRouterModuleDeclaration,findNodes } from '@schematics/angular/utility/ast-utils';
import { Change } from '@schematics/angular/utility/change';
import { MODULE_EXT, ROUTING_MODULE_EXT, buildRelativePath, findModuleFromOptions }  from '@schematics/angular/utility/find-module';
import { applyLintFix }  from '@schematics/angular/utility/lint-fix';
import { parseName }  from '@schematics/angular/utility/parse-name';
import { createDefaultPath }  from '@schematics/angular/utility/workspace';
import { InsertChange } from '@nrwl/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { classify } from '@nrwl/workspace/src/utils/strings';

export default function (schema: any): Rule {
  return async (host: Tree) => {
    if (schema.path === undefined) {
      schema.path = await createDefaultPath(host, schema.project as string);
    }

    if (schema.module) {
      schema.module = findModuleFromOptions(host, schema);
    }

    let routingModulePath: Path | undefined;
    const isLazyLoadedModuleGen = !!(schema.route && schema.module);
    if (isLazyLoadedModuleGen) {
      schema.routingScope = "Child" // or "Root"
      routingModulePath = getRoutingModulePath(host, schema.module as string);
    }

    schema.nameOnly = schema.name.split('/').pop();
    const parsedPath = parseName(schema.path, schema.mode ? `${schema.name}-${schema.mode}` : schema.name);
    schema.name = parsedPath.name;
    schema.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      schema.routing || (isLazyLoadedModuleGen && routingModulePath)
        ? schema.routingOnly ? filter(path => !path.endsWith('__.module.ts.template')) : noop()
        : filter(path => !path.endsWith('-routing.module.ts.template')),
      applyTemplates({
        ...strings,
        'if-flat': (s: string) => schema.flat ? '' : s,
        lazyRoute: isLazyLoadedModuleGen,
        lazyRouteWithoutRouteModule: isLazyLoadedModuleGen && !routingModulePath,
        lazyRouteWithRouteModule: isLazyLoadedModuleGen && !!routingModulePath,
        ...schema,
      }),
      move(parsedPath.path),
    ]);
    const moduleDasherized = strings.dasherize(schema.name);
    const modulePath =
      `${!schema.flat ? moduleDasherized + '/' : ''}${moduleDasherized}.module.ts`;
    const relativePath = buildRelativeModulePath(schema, schema.module);
    return chain([
      !isLazyLoadedModuleGen ? addDeclarationToNgModule(schema) : noop(),
      addRouteDeclarationToNgModule(schema, routingModulePath),
      mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
      isLazyLoadedModuleGen
        ? externalSchematic('@schematics/angular', 'component', {
          ...schema,
          module: modulePath,
        })
        : noop(),
      schema.routingOnly ? addImportDeclarationToModule(schema, `${schema.project}-routing-module`, schema.path, schema.project, relativePath) : noop(),
      schema.lintFix ? applyLintFix(schema.path) : noop(),
    ]);
  };
}


function buildRelativeModulePath(options: any, modulePath: string, deviceName?: string): string {
  const device = options.mode && deviceName ? '-' + deviceName : '';
  const importModulePath = normalize(
    `/${options.path}/`
    + (options.flat ? '' : strings.dasherize(options.nameOnly) + device + '/')
    + strings.dasherize(options.nameOnly) + device
    + (options.routingOnly ? '-routing.module' : '.module'),
  );

  return buildRelativePath(modulePath, importModulePath);
}

function addDeclarationToNgModule(options: any): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const writeToModulePath = options.module;
    console.log('is that module is exist', writeToModulePath, host.exists(writeToModulePath));
    const text = host.read(writeToModulePath);
    if (text === null) {
      throw new SchematicsException(`File ${writeToModulePath} does not exist.`);
    }
    const sourceText = text.toString();
    const source = ts.createSourceFile(writeToModulePath, sourceText, ts.ScriptTarget.Latest, true);

    const relativePath = buildRelativeModulePath(options,writeToModulePath);
    const changes = addImportToModule(source,
      writeToModulePath,
      strings.classify(`${options.name}RoutingModule`),
      relativePath);

    const recorder = host.beginUpdate(writeToModulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}

function addRouteDeclarationToModule(source, fileToAdd, routeLiteral, schema) {
  const routerModuleExpr = getRouterModuleDeclaration(source);
  if (!routerModuleExpr) {
    throw new Error(`Couldn't find a route declaration in ${fileToAdd}.`);
  }
  const scopeConfigMethodArgs = (routerModuleExpr as any).arguments;
  if (!scopeConfigMethodArgs.length) {
    const { line } = source.getLineAndCharacterOfPosition(routerModuleExpr.getStart());
    throw new Error(`The router module method doesn't have arguments ` +
      `at line ${line} in ${fileToAdd}`);
  }
  let routesArr;
  const isPageMode = schema.prefix === 'page';
  const routesArg = scopeConfigMethodArgs[0];
  // Check if the route declarations array is
  // an inlined argument of RouterModule or a standalone variable
  if (ts.isArrayLiteralExpression(routesArg)) {
    routesArr = routesArg;
  }
  else {
    const routesVarName = routesArg.getText();
    let routesVar;
    if (routesArg.kind === ts.SyntaxKind.Identifier) {
      routesVar = source.statements
        .filter(ts.isVariableStatement)
        .find((v) => {
          return v.declarationList.declarations[0].name.getText() === routesVarName;
        });
    }
    if (!routesVar) {
      const { line } = source.getLineAndCharacterOfPosition(routesArg.getStart());
      throw new Error(`No route declaration array was found that corresponds ` +
        `to router module at line ${line} in ${fileToAdd}`);
    }
    const routesArrFindingResults = findNodes(routesVar, ts.SyntaxKind.ArrayLiteralExpression, 3, true);
    routesArr = routesArrFindingResults[isPageMode ? routesArrFindingResults.length - 1: 0];
  }
  const occurrencesCount = routesArr.elements.length;
  const text = routesArr.getFullText(source);
  if (text.includes(classify(schema.name))) {
    return new InsertChange(fileToAdd, 0, '');
  }
  let route = routeLiteral;
  let insertPos = routesArr.elements.pos;
  if (occurrencesCount > 0) {
    const lastRouteLiteral = [...routesArr.elements].pop();
    const lastRouteIsWildcard = ts.isObjectLiteralExpression(lastRouteLiteral)
      && lastRouteLiteral
        .properties
        .some(n => (ts.isPropertyAssignment(n)
          && ts.isIdentifier(n.name)
          && n.name.text === 'path'
          && ts.isStringLiteral(n.initializer)
          && n.initializer.text === '**'));
    const indentation = text.match(/\r?\n(\r?)\s*/) || [];
    const routeText = `${indentation[0] || ' '}${routeLiteral}`;
    // Add the new route before the wildcard route
    // otherwise we'll always redirect to the wildcard route
    if (lastRouteIsWildcard) {
      insertPos = lastRouteLiteral.pos;
      route = `${routeText},`;
    } else {
      insertPos = lastRouteLiteral.end;
      route = `,${routeText}`;
    }
  }
  return new InsertChange(fileToAdd, insertPos, route);
}

function addRouteDeclarationToNgModule(
  options: any,
  routingModulePath: Path | undefined,
): Rule {
  return (host: Tree) => {
    if (!options.route) {
      return host;
    }
    if (!options.module) {
      throw new Error('Module option required when creating a lazy loaded routing module.');
    }

    let path: string;
    if (routingModulePath) {
      path = routingModulePath;
    } else {
      path = options.module;
    }

    const text = host.read(path);
    if (!text) {
      throw new Error(`Couldn't find the module nor its routing module.`);
    }

    const sourceText = text.toString();
    const addDeclaration = addRouteDeclarationToModule(
      ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
      path,
      buildRoute(options, options.module),
      options
    ) as InsertChange;

    const recorder = host.beginUpdate(path);
    recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
    host.commitUpdate(recorder);


    // PART III: console.log to see the changes
    const afterInsertContent = host.get(routingModulePath)?.content.toString();
    // console.log('change result:', afterInsertContent);

    return host;
  };
}

function getRoutingModulePath(host: Tree, modulePath: string): Path | undefined {
  const routingModulePath = modulePath.endsWith(ROUTING_MODULE_EXT)
    ? modulePath
    : modulePath.replace(MODULE_EXT, ROUTING_MODULE_EXT);

  return host.exists(routingModulePath) ? normalize(routingModulePath) : undefined;
}

function buildRoute(options: any, modulePath: string) {
  // const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const moduleName = `${strings.classify(options.name)}Module`;
  const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const relativeModulePathMobile = buildRelativeModulePath(options, modulePath, 'mobile');
  const relativeModulePathDesktop = buildRelativeModulePath(options, modulePath, 'desktop');
  const moduleMobileName = `${strings.classify(options.nameOnly)}MobileModule`;
  const moduleDesktopName = `${strings.classify(options.nameOnly)}DesktopModule`;
  const loadChildren = options.mode ? `
  () => window.innerWidth <= 768 && global?.haveMobile ?
  import('${relativeModulePathMobile}').then(m => m.${moduleMobileName}):
    import('${relativeModulePathDesktop}').then(m => m.${moduleDesktopName})`:
    `() => import('${relativeModulePath}').then(m => m.${moduleName})`

  return `{ path: '${options.route}', loadChildren: ${loadChildren} }`;
}

