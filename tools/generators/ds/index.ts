import {
    chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
    branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';

const resolve = require('path').resolve;


export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        return chain([
            schematic('atomic', {
                ...schema,
                project: 'global-design-system'
            })
        ])
    }
}
