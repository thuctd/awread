import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';
import { insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { createEmptySection } from './create-empty-section';
import { exportToLibIndex } from './export-to-index';
import { insertCustomCode } from './insert-custom-code';
import { addImportDeclarationToModule } from './add-import-module';

export function createPageLazy(schema, pageName, projectName, projectPath, moduleName, type = 'page') {
  const nameWithPath = `pages/${pageName}`;
  const module = {
    name: `${pageName}`,
    path: path.join(projectPath, `${nameWithPath}/${pageName}.module.ts`)
  }
  return [
    schematic('module', {
      project: projectName,
      name: nameWithPath,
      type: type,
    }),
    externalSchematic('@nrwl/angular', 'component', {
      name: nameWithPath,
      type,
      style: 'scss',
      module: `${pageName}-module`,
      project: projectName,
      export: true
    }),
    ...addRoutesOfLazy(schema, pageName, type, module),
    createEmptySection(projectPath, moduleName),
    exportToLibIndex(projectPath, `export * from './lib/pages/${name}/${name}.${type}';`),
  ]
}


export function addRoutesOfLazy(schema, pageName, type, module: {name: string, path: string}) {
  const routes = `const routes: Routes = [
  {
    path: '', component: ${classify(pageName) + classify(type)}
  }
];`;
  const symbolName = `RouterModule.forChild(routes)`;
  return [
    insertCustomCode(module.path, module.name, routes),
    addImportDeclarationToModule(schema, 'RouterModule', schema.path, module.name, '@angular/router', symbolName)
  ];
}
