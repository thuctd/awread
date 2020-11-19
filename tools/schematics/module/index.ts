import { Path, normalize, strings } from '@angular-devkit/core';
import {
  Rule,
  SchematicsException,
  Tree,
  apply,
  applyTemplates,
  chain,
  filter,
  mergeWith,
  move,
  noop,
  schematic,
  externalSchematic,
  MergeStrategy,
  url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addImportToModule, addRouteDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { MODULE_EXT, ROUTING_MODULE_EXT, buildRelativePath, findModuleFromOptions }  from '@schematics/angular/utility/find-module';
import { applyLintFix }  from '@schematics/angular/utility/lint-fix';
import { parseName }  from '@schematics/angular/utility/parse-name';
import { createDefaultPath }  from '@schematics/angular/utility/workspace';
import { InsertChange } from '@nrwl/workspace';
import { addDeclarationToAppModule } from '../../utility/add-import-module';

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
    ) as InsertChange;

    const recorder = host.beginUpdate(path);
    recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
    host.commitUpdate(recorder);

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

export default function (options: any): Rule {
  return async (host: Tree) => {
    if (options.path === undefined) {
      options.path = await createDefaultPath(host, options.project as string);
    }

    if (options.module) {
      options.module = findModuleFromOptions(host, options);
    }

    let routingModulePath: Path | undefined;
    const isLazyLoadedModuleGen = !!(options.route && options.module);
    if (isLazyLoadedModuleGen) {
      options.routingScope = "Child" // or "Root"
      routingModulePath = getRoutingModulePath(host, options.module as string);
    }

    options.nameOnly = options.name.split('/').pop();
    const parsedPath = parseName(options.path, options.mode ? `${options.name}-${options.mode}` : options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      options.routing || (isLazyLoadedModuleGen && routingModulePath)
        ? options.routingOnly ? filter(path => !path.endsWith('__.module.ts.template')) : noop()
        : filter(path => !path.endsWith('-routing.module.ts.template')),
      applyTemplates({
        ...strings,
        'if-flat': (s: string) => options.flat ? '' : s,
        lazyRoute: isLazyLoadedModuleGen,
        lazyRouteWithoutRouteModule: isLazyLoadedModuleGen && !routingModulePath,
        lazyRouteWithRouteModule: isLazyLoadedModuleGen && !!routingModulePath,
        ...options,
      }),
      move(parsedPath.path),
    ]);
    const moduleDasherized = strings.dasherize(options.name);
    const modulePath =
      `${!options.flat ? moduleDasherized + '/' : ''}${moduleDasherized}.module.ts`;
    const relativePath = buildRelativeModulePath(options, options.module);
    return chain([
      !isLazyLoadedModuleGen ? addDeclarationToNgModule(options) : noop(),
      addRouteDeclarationToNgModule(options, routingModulePath),
      mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
      isLazyLoadedModuleGen
        ? externalSchematic('@schematics/angular', 'component', {
          ...options,
          module: modulePath,
        })
        : noop(),
      options.routingOnly ? addDeclarationToAppModule(options, `${options.project}-routing`, options.path, options.project, relativePath) : noop(),
      options.lintFix ? applyLintFix(options.path) : noop(),
    ]);
  };
}
