import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { normalize } from 'path';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';
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
      editedSchema
    } = await prepareData(schema, tree, context, kind);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:${kind}-${originName},scope:shared,type:${kind}`,
        style: 'scss'
      }),
      ...addPage(schema, originName),
      addFeatureToUi(schema, libName),
    ])
  }
}

function addFeatureToUi(schema, libName) {
  return schema.writeToFilePath ? addImportDeclarationToModule(schema, `${libName}-module`, schema.writeToFilePath) : noop()
}

export function addPage(schema, originName): Rule[] {
  // console.log('page name', originName, schema.pages);
  schema.pages = schema.pages ?? [];
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('feature-page', {
        name: page.trim(),
        directory: schema.directory,
        feature: originName,
      })) : [];
  return !pages.length ? [] : pages;
}
