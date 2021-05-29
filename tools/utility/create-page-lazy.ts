import { componentSetting } from './edit-angular-json';
import { schematic, externalSchematic } from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createEmptyFolder } from './create-empty-section';
import { exportToLibIndex } from './export-to-index';
import { insertCustomCode } from './insert-custom-code';
import { addImportDeclarationToModule, addImportPathToModule } from './add-import-module';

export function createPageLazy(schema, pageName, type = 'page') {
  const page = {
    name: `${pageName}`,
    filePath: normalize(`${schema.projectRoot}/lib/pages/${pageName}/${pageName}.module`),
    folderPath: normalize(`${schema.projectRoot}/lib/pages/${pageName}`),
  }
  return [
    schematic('module', {
      project: schema.project,
      name: `pages/${pageName}`,
      type: type,
    }),
    externalSchematic('@schematics/angular', 'component', {
      ...componentSetting,
      name: `pages/${pageName}`,
      type,
      module: `pages/${pageName}/${pageName}.module`,
      project: schema.project,
      export: true,
      inlineStyle: true,
      skipTests: true,
    }),
    ...addRoutesOfLazy(schema, pageName, type, page),
    // createEmptyFolder(page.folderPath),
    exportToLibIndex(schema.projectType, schema.projectRoot, `export * from './lib/pages/${pageName}/${pageName}.${type}';`),
    exportToLibIndex(schema.projectType, schema.projectRoot, `export * from './lib/pages/${pageName}/${pageName}.module';`),
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
