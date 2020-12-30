import { Rule, SchematicContext, Tree, apply, applyTemplates, chain, schematic, mergeWith, move, MergeStrategy, url } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';
import * as pluralize from 'pluralize';
import { guessProjectToSchema } from '../../utility/guess-workspace';
import { exportToLibIndex } from '../../utility/export-to-index';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        schema = await guessProjectToSchema(tree, schema, context);
        const actions = schema.list.split(',').map(name => singleAction(schema, context, name))
        return chain([
            ...actions
        ])
    }
}

function singleAction(schema, context, name) {
    return async (tree) => {
        schema.name = name;
        const generatePath = `${schema.projectRoot}/lib/states`;
        const updatePath = generatePath + '/' + strings.dasherize(schema.name);
        // console.log('name', name, schema.name, updatePath);

        const templateSource = apply(url(schema.entity ? './entity-files' : './files'),
            [
                applyTemplates({
                    ...strings,
                    singular: pluralize.singular,
                    ...schema,
                }),
                move(normalize(updatePath)),
            ]);

        return chain([
            mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
            // exportToLibIndex(schema.projectRoot, `
            // export * from './lib/states/${strings.dasherize(schema.name)}/${strings.dasherize(schema.name)}.model';`)
            schematic('logic', {
                ...schema,
                list: pluralize.singular(strings.dasherize(name)),
                type: 'model',
            })
        ])
    }
}
