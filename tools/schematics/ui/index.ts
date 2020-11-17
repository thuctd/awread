import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'ui-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directory: string = schema.directory.replace(/\//g, '-').trim();
    const projectName = directory + '-' + schema.name.trim();
    console.log('project name', projectName, schema.pages.split(','));
    const pages: Rule[] = schema.pages && schema.pages.length ?
      schema.pages.split(',').map((page: string) => schematic('page', { project: projectName, name: page.trim() })) : [];

    return !pages.length ?
      chain([
        externalSchematic('@nrwl/angular', 'lib', {
          name: schema.name,
          directory: schema.directory ?? './',
          tags: `scope:ui-${name},scope:shared,type:ui`,
          style: 'scss'
        })
      ]) :
      chain([
        externalSchematic('@nrwl/angular', 'lib', {
          name: schema.name,
          directory: schema.directory ?? './',
          tags: `scope:ui-${name},scope:shared,type:ui`,
          style: 'scss'
        }),
        ...pages
      ])
  }
}

