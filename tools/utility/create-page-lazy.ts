import { componentSetting } from './edit-angular-json';
import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates, SchematicsException
} from '@angular-devkit/schematics';
import { MODULE_EXT, ROUTING_MODULE_EXT, buildRelativePath, findModuleFromOptions } from '@schematics/angular/utility/find-module';

import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';
import { getSourceNodes, InsertChange, insertImport, ReplaceChange } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { createEmptySection } from './create-empty-section';
import { exportToLibIndex } from './export-to-index';
import { insertCustomCode } from './insert-custom-code';
import { addImportDeclarationToModule, addImportPathToModule } from './add-import-module';
import { removeImport } from './ast-utils';
import { Change } from '@nrwl/workspace/src/core/file-utils';

export function createPageLazy(schema, pageName, currentModule: { name: string, filePath: string, folderPath: string }, type = 'page') {
  const nameWithPath = `pages/${pageName}`;
  const page = {
    name: `${pageName}`,
    filePath: normalize(`${currentModule.folderPath}/${nameWithPath}/${pageName}.module`),
    folderPath: normalize(`${currentModule.folderPath}/${nameWithPath}`),
  }
  return [
    schematic('module', {
      project: currentModule.name,
      name: nameWithPath,
      type: type,
    }),
    externalSchematic('@schematics/angular', 'component', {
      ...componentSetting,
      name: nameWithPath,
      type,
      module: `${nameWithPath}/${pageName}.module`,
      project: currentModule.name,
      export: true
    }),
    ...addRoutesOfLazy(schema, pageName, type, page),
    createEmptySection(page.folderPath),
    exportToLibIndex(currentModule.folderPath, `export * from './lib/pages/${pageName}/${pageName}.${type}';`),
    exportToLibIndex(currentModule.folderPath, `export * from './lib/pages/${pageName}/${pageName}.module';`),
  ]
}


export function addRoutesOfLazy(schema, pageName, type, page: {name: string, filePath: string, folderPath: string}) {
  const routes = `
const routes: Routes = [
  {
    path: '', component: ${classify(pageName) + classify(type)}
  }
];`;
  const symbolName = `RouterModule.forChild(routes)`;
  return [
    insertCustomCode(page.filePath, routes),
    addImportDeclarationToModule(schema, 'RouterModule', page.filePath, '@angular/router', symbolName),
    addImportPathToModule(schema, 'Routes', page.filePath, '@angular/router', null, false)
  ];
}
