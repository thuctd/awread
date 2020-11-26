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
import { getShellModuleData } from '../../utility/import-to-shell-module';
import { insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { exportToLibIndex } from '../../utility/export-to-index';
import { createPageLazy } from '../../utility/create-page-lazy';


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
    const currentModulePath = normalize(`${directoryLibsPath}/${schema.name}/src/lib`);
    // adding template;
    const parsedPath = parseName(directoryLibsPath, schema.name);
    schema.path = parsedPath.path;
    schema.projectRoot = `${schema.path}/${schema.name}`;
    schema.directoryNoSlash = directoryNoSlash;
    schema.targetLibName = currentModuleName;
    const shellModule = await getShellModuleData(tree, directoryNoSlash);
    const customCode = `\n<awread-header></awread-header>\n<router-outlet></router-outlet>\n<awread-footer></awread-footer>`;
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
        style: 'scss'
      }),
      insertCustomCode(currentModulePath, currentModuleName, `\ndeclare const window: any;\nwindow.haveMobile = ${schema.haveMobile};`),
      addImportDeclarationToModule(schema, 'RouterModule', currentModulePath, currentModuleName, '@angular/router'),
      addExportDeclarationToModule(schema, 'RouterModule', currentModulePath, currentModuleName, '@angular/router'),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-desktop`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(true, currentModulePath, 'shell-desktop', customCode),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-mobile`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(true, currentModulePath, 'shell-mobile', customCode),
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
      exportToLibIndex(schema.projectRoot, `export * from './lib/layouts/shell-desktop/shell-desktop.layout';`),
      exportToLibIndex(schema.projectRoot, `export * from './lib/layouts/shell-desktop/shell-desktop.layout';`),
      ...createNotFoundPage(schema, currentModuleName),
      ...insertNotFound(schema, shellModule, currentModulePath, currentModuleName)
    ])
  }
}



export function createNotFoundPage(currentModulePath, currentModuleName) {
  return createPageLazy('not-found', currentModuleName, currentModulePath, 'not-found', 'not-found');
}

export function insertNotFound(schema, shellModule, currentModulePath, currentModuleName) {
  const notFoundAbsolutePath = '';
  const NotFoundModuleName = 'NotFound';
  const routes = `const routes: Routes = [
  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? ShellMobileLayout : ShellDesktopLayout,
    children: [
      {
        path: 'not-found', loadChildren: () => import('${notFoundAbsolutePath}').then(m => m.${NotFoundModuleName}Module)
      }
    ]
  }
];`;
  const rule2 = addImportPathToModule(schema, classify('shell-desktop-layout'), shellModule.path, shellModule.name, null, 'shared', true);
  const rule3 = addImportPathToModule(schema, classify('shell-mobile-layout'), shellModule.path, shellModule.name, null, 'shared');
  return [
    addImportDeclarationToModule(schema, `${currentModuleName}-module`, shellModule.path, shellModule.name),
    insertCustomCode(shellModule.path, shellModule.name, routes),
    rule2,
    rule3
  ]
}

export function exportLayout(schema) {
  return (tree: Tree) => {
    const indexFilePath = `${schema.projectRoot}/src/index.ts`;
    const buffer = tree.read(indexFilePath);
    const indexSource = buffer!.toString('utf-8');
    const indexSourceFile = ts.createSourceFile(
      indexFilePath,
      indexSource,
      ts.ScriptTarget.Latest,
      true
    );

    insert(tree, indexFilePath, [
      ...addGlobal(
        indexSourceFile,
        indexFilePath,
        `export * from './lib/layouts/shell-desktop/shell-desktop.layout';`
      ),
      ...addGlobal(
        indexSourceFile,
        indexFilePath,
        `export * from './lib/layouts/shell-mobile/shell-mobile.layout';`
      ),
    ]);
    return tree;
 }
}
