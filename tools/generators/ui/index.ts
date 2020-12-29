import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic
} from '@angular-devkit/schematics';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    schema = await guessProjectToSchema(tree, schema, context);
    schema.directory = schema.directory != '.' && schema.directory !== './' ? schema.directory : '';
    const shellModuleFile = `libs/${schema.directory}/feature-shell/src/lib/${schema.directory.replace(/\//g, '-')}-feature-shell.module.ts`;

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:${schema.kind}${schema.name},scope:shared,type:${schema.kind}`,
        style: 'scss'
      }),
      ...addPage(schema, schema.name),
      addImportDeclarationToModule(schema, `${schema.project}-module`, shellModuleFile),
      addRouterOutlet(true, schema.projectRoot, schema.name),
      schematic('feature', {
        name: schema.name,
        directory: schema.directory,
        pages: schema.pages
      }),
    ])
  }
}

export function addPage(schema, featureName): Rule[] {
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('ui-page', {
        name: page.trim(),
        ui: featureName
      })) : [];
  return !pages.length ? [] : pages;
}
