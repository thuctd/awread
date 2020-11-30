import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';
import { insertCustomCode } from '../../utility/insert-custom-code';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { getModuleData } from '../../utility/import-to-shell-module';
import { insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { exportToLibIndex } from '../../utility/export-to-index';
import { createPageLazy } from '../../utility/create-page-lazy';
import { getProjectPath } from '../../utility/get-project-path';
import { FileModule } from '../../utility/file-module.type';
import { insertRoutes } from '../../utility/insert-routes';


function addPartsContent(schema: any, target) {
  return (tree: Tree, context: SchematicContext) => {
    const prefix = 'part';
    const path = `${schema.path}/shared/src/lib/${prefix}s/${target}/${target}.${prefix}.html`;
    let sharedLayout = tree.read(path);
    if (sharedLayout != null) {
      let newData = `${sharedLayout.toString()}\n<awread-navbar></awread-navbar>`;
      tree.overwrite(path, newData);
    }
    return tree;
  }
}

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const directoryLibsPath = normalize(`libs/${schema.directory}`)
    const currentModuleName = directoryNoSlash + '-' + schema.name.trim();
    const currentModule = {
      name: currentModuleName,
      filePath: normalize(`${directoryLibsPath}/${schema.name}/src/lib/${currentModuleName}.module`),
      folderPath: normalize(`${directoryLibsPath}/${schema.name}/src/lib`)
    }
    // adding template;
    const parsedPath = parseName(directoryLibsPath, schema.name);
    schema.path = parsedPath.path;
    schema.directoryNoSlash = directoryNoSlash;
    schema.targetLibName = currentModule.name;
    const shellModule = await getModuleData(tree, directoryNoSlash);
    const customCode = `\n<awread-header></awread-header>\n<router-outlet></router-outlet>\n<awread-footer></awread-footer>`;
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
        style: 'scss'
      }),
      insertCustomCode(currentModule.filePath, `\ndeclare const window: Window & {haveMobile: boolean};\nwindow.haveMobile = ${schema.haveMobile};`),
      addImportDeclarationToModule(schema, 'RouterModule', currentModule.filePath, '@angular/router'),
      addExportDeclarationToModule(schema, 'RouterModule', currentModule.filePath, '@angular/router'),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-desktop`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(true, currentModule.folderPath, 'shell-desktop', customCode),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-mobile`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(true, currentModule.folderPath, 'shell-mobile', customCode),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/navbar`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/header`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/footer`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addPartsContent(schema, 'header'),
      exportToLibIndex(currentModule.folderPath, `export * from './lib/layouts/shell-desktop/shell-desktop.layout';`),
      exportToLibIndex(currentModule.folderPath, `export * from './lib/layouts/shell-mobile/shell-mobile.layout';`),
      ...createNotFoundPage(schema, currentModule),
      ...insertNotFound(schema, shellModule, currentModule.name)
    ])
  }
}



export function createNotFoundPage(schema, currentModule: {name: string, filePath: string, folderPath: string}) {
  return createPageLazy(schema, 'not-found', currentModule);
}

export function insertNotFound(schema, shellModule: FileModule, currentModuleName) {
  const notFoundAbsolutePath = getProjectPath(schema.directory, 'shared');
  const NotFoundModuleName = 'NotFound';
  // this line can enable in below
  // \ndeclare const window: any;\nwindow.haveMobile = ${schema.haveMobile};
  const routes = `
const routes: Routes = [
{
  path: '',
  component: window.innerWidth <= 768 && window?.haveMobile ? ShellMobileLayout : ShellDesktopLayout,
  children: [
    {
      path: 'not-found', component: ${NotFoundModuleName}Page
    },
    { path: '**', pathMatch: 'full', redirectTo: 'not-found'}
  ]
}
];`;
  const addDesktopImport = addImportPathToModule(schema, classify('shell-desktop-layout'), shellModule.filePath, null, 'shared', true);
  const addMobileImport = addImportPathToModule(schema, classify('shell-mobile-layout'), shellModule.filePath, null, 'shared');
  const addNotFoundImport = addImportPathToModule(schema, classify(`${NotFoundModuleName}-page`), shellModule.filePath, null, 'shared');
  return [
    addImportDeclarationToModule(schema, `${currentModuleName}-module`, shellModule.filePath, notFoundAbsolutePath),
    addDesktopImport,
    addMobileImport,
    addNotFoundImport,
    ...insertRoutes(schema, shellModule, routes),
  ]
}
