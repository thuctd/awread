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
    const PREFIX = 'ui-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const pageName = directoryNoSlash + '-' + schema.name.trim();

    const addImportProjectName = schema.declareProject ?? directoryNoSlash + '-feature-shell';

    let addImportProjectPath;
    try {
      addImportProjectPath = await createDefaultPath(tree, addImportProjectName);
    } catch (error) {
      throw new Error(`Couldn't find the project ${addImportProjectName} to create defaultPath`);
    }

    const currentProjectPath = `/libs/${schema.directory}/${schema.name}/src/lib`;

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:ui-${name},scope:shared,type:ui`,
        style: 'scss'
      }),
      ...addPage(schema, pageName),
      addImportDeclarationToModule(schema, `${pageName}-module`, addImportProjectPath, addImportProjectName),
      addRouterOutlet(true, currentProjectPath, schema.name),
    ])
  }
}

export function addPage(schema, pageName): Rule[] {
  console.log('page name', pageName, schema.pages);
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) => schematic('page', {
      project: pageName,
      name: page.trim(),
      directory: schema.directory,
      featureName: schema.name
    })) : [];
  return !pages.length ? [] : pages;
}
