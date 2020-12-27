import {
  chain, externalSchematic, Rule, SchematicContext, Tree
} from '@angular-devkit/schematics';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { Path, normalize, strings } from '@angular-devkit/core';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { appAndLibSetting } from '../../utility/edit-angular-json';
import { getWorkspaceName, guessApplicationToSchema } from '../../utility/guess-workspace';
import { prepareCurrentModule } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    guessApplicationToSchema(schema, tree);
    const workspaceName = getWorkspaceName(tree);
    const currentModule = prepareCurrentModule(schema);

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
      importShellToAppModule(schema, currentModule.name, schema.applicationRoot),
      addRouterOutlet(false, schema.applicationRoot, `app.component`)
    ])
  }
}

export function importShellToAppModule(schema, currentModuleName, applicationRoot) {
  const appPathFile = normalize(applicationRoot + '/app.module');
  return addImportDeclarationToModule(schema, `${currentModuleName}-module`, appPathFile);
}
