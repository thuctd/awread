import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { normalize } from 'path';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { getModuleData } from '../../utility/import-to-shell-module';
import { prepareData } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const kind = 'ui';
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
      shellModule
    } = await prepareData(schema, tree, context, kind);


    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:${kind}${originName},scope:shared,type:${kind}`,
        style: 'scss'
      }),
      ...addPage(schema, originName),
      addImportDeclarationToModule(schema, `${libName}-module`, shellModule.filePath),
      addRouterOutlet(true, currentProjectPath, originName),
      schematic('feature', {
        name: originName,
        directory: schema.directory,
        pages: schema.pages
      }),
    ])
  }
}

export function addPage(schema, originName): Rule[] {
  console.log('page name', originName, schema.pages);
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('page', {
        name: page.trim(),
        directory: schema.directory,
        ui: originName
      })) : [];
  return !pages.length ? [] : pages;
}
