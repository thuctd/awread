import {
    Rule, SchematicsException, Tree, apply, applyTemplates, chain, filter, mergeWith, move, noop, schematic, externalSchematic, MergeStrategy, url,
} from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as pluralize from 'pluralize';
import { getProjectName, getGeneratePath } from '../../utility/guess-workspace';
import { readStoryTitle } from '../atomic';

export default function (schema: any): Rule {
    return async (tree: Tree, context) => {
        const projectName = await getProjectName(schema, tree);
        schema.project = projectName;
        const generatePath = await getGeneratePath(schema, tree);

        const templateSource = apply(url(schema.entity ? './entity-files' : './files'),
            [
                applyTemplates({
                    ...strings,
                    singular: pluralize.singular,
                    ...schema,
                }),
                move(normalize(generatePath + '/' + strings.dasherize(schema.name))),
            ]);

        console.log('what context look like?', context);
        return chain([
            mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
        ])
    }
}
