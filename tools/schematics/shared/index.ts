import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';
import { insertDeclare } from '../../utility/insert-declare';
function addRouterOutlet(schema: any, target) {
  return (tree: Tree, context: SchematicContext) => {
    const path = `${schema.path}/shared/src/lib/layouts/${target}/${target}.layout.html`;
    let sharedLayout = tree.read(path);
    if (sharedLayout != null) {
      let newData = `${sharedLayout.toString()}\n<awread-header></awread-header>\n<router-outlet></router-outlet>\n<awread-footer></awread-footer>`;
      tree.overwrite(path, newData);
    }
    return tree;
  }
}

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
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
        style: 'scss'
      }),
      insertDeclare(currentModulePath, currentModuleName, schema, null),
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
      addRouterOutlet(schema, 'shell-desktop'),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-mobile`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(schema, 'shell-mobile'),
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
      exportLayout(tree, schema)
    ])
  }
}

export function exportLayout(tree, schema) {
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
