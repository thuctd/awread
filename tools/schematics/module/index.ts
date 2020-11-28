import { Path, normalize, strings } from '@angular-devkit/core';
import {
  Rule, SchematicsException, Tree, apply, applyTemplates, chain, filter, mergeWith, move, noop, schematic, externalSchematic, MergeStrategy, url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addImportToModule, getRouterModuleDeclaration, findNodes } from '@schematics/angular/utility/ast-utils';
import { Change } from '@schematics/angular/utility/change';
import { MODULE_EXT, ROUTING_MODULE_EXT, buildRelativePath, findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { applyLintFix } from '@schematics/angular/utility/lint-fix';
import { parseName } from '@schematics/angular/utility/parse-name';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { InsertChange } from '@nrwl/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { camelize, classify } from '@nrwl/workspace/src/utils/strings';
import { getSourceNodes, insertImport, RemoveChange, ReplaceChange } from '@nrwl/workspace/src/utils/ast-utils';
import * as path from 'path';

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
    const parsedPath = parseName(schema.mode ? `${schema.path}/${schema.nameOnly}` : schema.path, schema.mode ? `${schema.name}-${schema.mode}` : schema.name);
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
          style: 'scss',
          module: modulePath,
        })
        : noop(),
      ...routingOnlyActions(schema, relativePath),
      ...(schema.mode ? [...addPageService(schema)] : [noop()]),
      schema.lintFix ? applyLintFix(schema.path) : noop(),
    ]);
  };
}

function routingOnlyActions(schema, relativePath) {
  const routingPath = path.join(schema.path, relativePath);
  const name = `${schema.project}-routing-module`;
  return schema.routingOnly && relativePath ? [
    addImportDeclarationToModule(schema, name, routingPath, schema.project, classify(name)),

  ] : [noop()]
}

function addPageService(schema) {

  const templateSource = apply(url('./service-page'), [
    applyTemplates({
      ...schema,
      ...strings
    }),
    move(schema.path),
  ]);

  return schema.type === 'page' ? [
    mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
    updateDesktopAndMobilePage(schema),
  ] : [noop()]
}

function updateDesktopAndMobilePage(schema) {
  return (host: Tree) => {
    if (!schema.module) {
      return host;
    }
    // /libs/writer/web/ui-auth/src/lib/register/pages/register-desktop/register-desktop.page.ts
    const writeToPath = `${schema.path}/${schema.name}/${schema.name}.${schema.type}.ts`;
    const implementFilePath = `${schema.path}/${schema.nameOnly}.${schema.type}.ts`;
    console.log('is that module is exist', writeToPath, host.exists(writeToPath));
    const text = host.read(writeToPath);
    if (text === null) {
      throw new SchematicsException(`File ${writeToPath} does not exist.`);
    }
    const sourceText = text.toString();
    const source = ts.createSourceFile(writeToPath, sourceText, ts.ScriptTarget.Latest, true);
    let nodes = getSourceNodes(source);
    const relativePath = buildRelativePath(writeToPath, implementFilePath);
    const insertImportSymbol = insertImport(source,
      writeToPath,
      strings.classify(`${schema.nameOnly}-${schema.type}`),
      relativePath);

    const renewClass = replaceConstructorForInjection(nodes, classify(`${schema.name}-${schema.type}`), writeToPath, classify(`${schema.nameOnly}-${schema.type}`));
    const changes = [insertImportSymbol, renewClass];

    const recorder = host.beginUpdate(writeToPath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      } else if (change instanceof RemoveChange) {
        recorder.remove(change.pos, change.toRemove.length);
      } else if (change instanceof ReplaceChange) {
        recorder.remove(change.pos, change.oldText.length);
        recorder.insertLeft(change.pos, change.newText);
      }
    }
    host.commitUpdate(recorder);

    // PART III: console.log to see the changes
    const afterInsertContent = host.get(writeToPath)?.content.toString();

    return host;
  };
}

function replaceConstructorForInjection(nodes: ts.Node[], writeToName: string, writeToPath: string, symbolName: string): Change {
  let classNode = nodes.find(n => n.kind === ts.SyntaxKind.ClassKeyword);

  if (!classNode) {
    throw new SchematicsException(`expected class in <span class="hljs-subst" > ${writeToPath} < /span>`);
  }

  if (!classNode.parent) {
    throw new SchematicsException(`expected constructor in <span class="hljs-subst" > ${writeToPath} < /span> to have a parent node`);
  }

  let siblings = classNode.parent.getChildren();
  let classIndex = siblings.indexOf(classNode);

  siblings = siblings.slice(classIndex);

  let classIdentifierNode = siblings.find(n => n.kind === ts.SyntaxKind.Identifier);

  if (!classIdentifierNode) {
    throw new SchematicsException(`expected class in <span class="hljs-subst" > ${writeToPath} < /span> to have an identifier`);
  }

  if (classIdentifierNode.getText() !== writeToName) {
    throw new SchematicsException(`expected first class in <span class="hljs-subst" > ${writeToPath} < /span> to have the name ${writeToName}`);
  }

  // Find opening cury braces (FirstPunctuation means '{' here).
  let curlyNodeIndex = siblings.findIndex(n => n.kind === ts.SyntaxKind.FirstPunctuation);
  let pageNameSymbol = siblings.find(n => n.kind === ts.SyntaxKind.Identifier);
  const oldText = classNode.parent.getText().split(pageNameSymbol.getText())[1];

  let listNode = siblings.find(n => n.kind === ts.SyntaxKind.SyntaxList);

  if (!listNode) {
    throw new SchematicsException(`expected first class in <span class="hljs-subst" > ${writeToPath} < /span> to have a body`);
  }

  let toAdd = `${pageNameSymbol.getText()} extends ${symbolName} {}`;
  // return new ReplaceChange(writeToPath, classNode.parent.pos, beforeText, toAdd);
  return new ReplaceChange(writeToPath, pageNameSymbol.end, oldText, toAdd);
}

function printAllChildren(node: ts.Node, depth = 0) {
  console.log(new Array(depth + 1).join('----'), ts.SyntaxKind[node.kind], node.pos, node.end);
  depth++;
  node.getChildren().forEach(c => printAllChildren(c, depth));
}

function buildRelativeModulePath(options: any, modulePath: string, deviceName?: string): string {
  if (!modulePath) return '';
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

    const relativePath = buildRelativeModulePath(options, writeToModulePath);
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
    routesArr = routesArrFindingResults[isPageMode ? routesArrFindingResults.length - 1 : 0];
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
  () => window.innerWidth <= 768 && window?.haveMobile ?
  import('${relativeModulePathMobile}').then(m => m.${moduleMobileName}):
    import('${relativeModulePathDesktop}').then(m => m.${moduleDesktopName})` :
    `() => import('${relativeModulePath}').then(m => m.${moduleName})`

  return `{ path: '${options.route}', loadChildren: ${loadChildren} }`;
}

