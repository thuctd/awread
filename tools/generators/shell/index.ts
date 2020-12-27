import { getNpmScope } from '@nrwl/workspace';
import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { appAndLibSetting } from '../../utility/edit-angular-json';
import { prepareData } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const kind = 'feature';
    const {
      originName,
      directoryNoSlash,
      libName,
      addImportProjectName,
      addImportProjectPath,
      uiLibExist,
      uiLibPath,
      currentProjectPath,
      editedSchema,
      shellModule,
      currentModule,
      workspaceName,
      appDefaultPath
    } = await prepareData(schema, tree, context, kind);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shell,scope:shared,type:feature`,
      }),
      addImportDeclarationToModule(schema, 'RouterModule', currentModule.path, '@angular/router', 'RouterModule.forRoot([])'),
      addExportDeclarationToModule(schema, 'RouterModule', currentModule.path, '@angular/router'),
      addImportDeclarationToModule(schema, 'GlobalCoreModule', currentModule.path, `@${workspaceName}/global/core`),
      addExportDeclarationToModule(schema, 'GlobalCoreModule', currentModule.path, `@${workspaceName}/global/core`),
      importShellToAppModule(schema, currentModule.name, appDefaultPath),
      addRouterOutlet(false, appDefaultPath, `app.component`)
    ])
  }
}

export function importShellToAppModule(schema, currentModuleName, appPath) {
  const appPathFile = normalize(appPath + '/app.module');
  return addImportDeclarationToModule(schema, `${currentModuleName}-module`, appPathFile);
}
