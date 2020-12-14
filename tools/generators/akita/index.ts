import {
    Rule, SchematicsException, Tree, apply, applyTemplates, chain, filter, mergeWith, move, noop, schematic, externalSchematic, MergeStrategy, url,
} from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as pluralize from 'pluralize';

export default function (schema: any): Rule {
    const templateSource = apply(url(schema.entity ? './entity-files' : './files'),
        [
            applyTemplates({
                ...strings,
                singular: pluralize.singular,
                ...schema,
            }),
            move(normalize(process.cwd() + '/' + strings.dasherize(schema.name))),
        ]);

    return async (tree: Tree, context) => {
        console.log('what context look like?', context);
        return chain([
            mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
        ])
    }
}
