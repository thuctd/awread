import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { normalize } from 'path';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { getShellModuleData } from '../../utility/import-to-shell-module';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'ui-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const libName = directoryNoSlash + '-' + schema.name.trim();
    const shellModule = await getShellModuleData(tree, directoryNoSlash, schema.declareProject);
    const currentProjectPath = `/libs/${schema.directory}/${schema.name}/src/lib`;

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:${PREFIX}-${name},scope:shared,type:${PREFIX}`,
        style: 'scss'
      }),
      ...addPage(schema, libName),
      addImportDeclarationToModule(schema, `${libName}-module`, shellModule.filePath),
      addRouterOutlet(true, currentProjectPath, schema.name),
      schematic('feature', {
        name: name,
        directory: schema.directory,
        pages: schema.pages
      }),
    ])
  }
}

export function addPage(schema, libName): Rule[] {
  console.log('page name', libName, schema.pages);
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('page', {
      project: libName,
      name: page.trim(),
      directory: schema.directory,
      ui: schema.name
    })) : [];
  return !pages.length ? [] : pages;
}
