import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { normalize } from 'path';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'feature-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const originName = schema.name.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const libName = `${directoryNoSlash}-${schema.name}`
    const addImportProjectName = schema.declareProject ?? `${directoryNoSlash}-ui-${originName}`;
    const uiLibPath = `/libs/${schema.directory}/ui-${originName}/src/index.ts`;
    const uiLibExist = tree.exists(uiLibPath);
    let addImportProjectPath;
    if (uiLibExist) {
      try {
        addImportProjectPath = await createDefaultPath(tree, addImportProjectName);
        schema.writeToFilePath = `${addImportProjectPath}/${addImportProjectName}.module`;
      } catch (error) {
        throw new Error(`Couldn't find the project ${addImportProjectName} to create defaultPath`);
      }
    }

    const currentProjectPath = `/libs/${schema.directory}/${schema.name}/src/lib`;

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:${PREFIX}-${originName},scope:shared,type:${PREFIX}`,
        style: 'scss'
      }),
      ...addPage(schema, originName),
      schema.writeToFilePath ? addImportDeclarationToModule(schema, `${libName}-module`, schema.writeToFilePath) : noop(),
    ])
  }
}

export function addImportDeclare() {

}

export function addPage(schema, originName): Rule[] {
  console.log('page name', originName, schema.pages);
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
