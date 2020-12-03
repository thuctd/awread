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

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'feature-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const currentModuleName = directoryNoSlash + '-' + schema.name.trim();
    const currentModule = {
      name: currentModuleName,
      path: normalize(`libs/${schema.directory}/${schema.name}/src/lib/${currentModuleName}.module`)
    }
    const appPath = await createDefaultPath(tree, schema.project);

    const workspaceName = getNpmScope(tree);

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
      importShellToAppModule(schema, currentModuleName, appPath),
      addRouterOutlet(false, appPath, `app.component`)
      // mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
      // addImportDeclarationToAppModule(schema, targetLibName, featureShellPath, targetLibName, `./${targetLibName}-routing.module`),
      // addExportDeclarationToAppModule(schema, targetLibName, featureShellPath, targetLibName, `./${targetLibName}-routing.module`),
    ])
  }
}

export function importShellToAppModule(schema, currentModuleName, appPath) {
  const appPathFile = normalize(appPath + '/app.module');
  return addImportDeclarationToModule(schema, `${currentModuleName}-module`, appPathFile);
}
