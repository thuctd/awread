import { chain, externalSchematic, SchematicsException, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createFile } from '../../utility/create-file';
import { guessProject, guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
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
