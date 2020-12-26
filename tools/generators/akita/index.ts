import {
    Rule, SchematicContext, SchematicsException, Tree, apply, applyTemplates, chain, filter, mergeWith, move, noop, schematic, externalSchematic, MergeStrategy, url,
} from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as pluralize from 'pluralize';
import { guessProject, getGeneratePath } from '../../utility/guess-workspace';
import { readStoryTitle } from '../atomic';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const { projectName, projectRoot } = await guessProject(tree);
        schema.project = projectName;
        const generatePath = `${projectRoot}/lib/states`

        const templateSource = apply(url(schema.entity ? './entity-files' : './files'),
            [
                applyTemplates({
                    ...strings,
                    singular: pluralize.singular,
                    ...schema,
                }),
                move(normalize(generatePath + '/' + strings.dasherize(schema.name))),
            ]);

        return chain([
            mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
        ])
    }
}
