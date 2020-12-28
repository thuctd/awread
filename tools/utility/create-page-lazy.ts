import { componentSetting } from './edit-angular-json';
import { schematic, externalSchematic } from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createEmptySection } from './create-empty-section';
import { exportToLibIndex } from './export-to-index';
import { insertCustomCode } from './insert-custom-code';
import { addImportDeclarationToModule, addImportPathToModule } from './add-import-module';

export function createPageLazy(schema, pageName, currentModule: { name: string, path: string }, type = 'page') {
  const nameWithPath = `pages/${pageName}`;
  const page = {
    name: `${pageName}`,
    filePath: normalize(`${schema.projectRoot}/lib/${nameWithPath}/${pageName}.module`),
    folderPath: normalize(`${schema.projectRoot}/lib/${nameWithPath}`),
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
    exportToLibIndex(schema.projectRoot, `export * from './lib/pages/${pageName}/${pageName}.${type}';`),
    exportToLibIndex(schema.projectRoot, `export * from './lib/pages/${pageName}/${pageName}.module';`),
  ]
}


export function addRoutesOfLazy(schema, pageName, type, page: { name: string, filePath: string, folderPath: string }) {
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
