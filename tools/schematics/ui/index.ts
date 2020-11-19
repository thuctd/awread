import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addDeclarationToAppModule } from '../../utility/add-import-module';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'ui-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directory: string = schema.directory.replace(/\//g, '-').trim();
    const projectName = directory + '-' + schema.name.trim();

    const featureShellName = schema.project ?? directory + '-feature-shell';
    const featureShellPath = await createDefaultPath(tree, featureShellName);
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:ui-${name},scope:shared,type:ui`,
        style: 'scss'
      }),
      ...addPage(schema, projectName),
      addDeclarationToAppModule(schema, projectName, featureShellPath, featureShellName),
    ])
  }
}

export function addPage(schema, projectName): Rule[] {
  console.log('project name', projectName, schema.pages);
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) => schematic('page', { project: projectName, name: page.trim() })) : [];
  return !pages.length ? [] : pages;
}
