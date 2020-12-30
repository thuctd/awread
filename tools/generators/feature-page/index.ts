import { chain, Rule, SchematicContext, Tree, schematic } from '@angular-devkit/schematics';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    schema = await guessProjectToSchema(tree, schema, context);
    return async (tree: Tree, context: SchematicContext) => {
      const actions = schema.list.split(',').map(name => singleAction(schema, context, name))
      return chain([
        ...actions
      ])
    }
  }
}

function singleAction(schema, context, name) {
  schema.name = name;
  return async (tree) => {
    schema = await guessProjectToSchema(tree, schema, context);
    return chain([
      schematic('service', {
        name: `${schema.kind}s/${schema.name}`,
        type: schema.kind,
        project: schema.project,
      }),
    ])
  }
}
