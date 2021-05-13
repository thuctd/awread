import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic } from '@angular-devkit/schematics';
import { prepareCurrentModule } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    await prepareCurrentModule(schema, context);
    const actions = schema.list.split(',').map(name => chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: `${name}`,
        directory: `${schema.directory}` ?? './',
        tags: `scope:${schema.kind}-${name},scope:shared,type:${schema.kind}`,
        style: 'scss'
      })
    ]))


    return chain([
      ...actions
    ])
  }
}