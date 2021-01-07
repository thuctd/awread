import { chain, Rule, SchematicContext, Tree, schematic, externalSchematic } from '@angular-devkit/schematics';
import { componentSetting } from '../../utility/edit-angular-json';
import { exportToLibIndex } from '../../utility/export-to-index';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        schema.project = 'global-powers';
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
    return async (tree) => {
        schema.name = name;
        schema = await guessProjectToSchema(tree, schema, context);
        return chain([
            schematic('logic', {
                list: `${name}`,
                project: schema.project,
                directory: name,
                type: 'facade',
            }),
            schematic('logic', {
                list: `${name}`,
                project: schema.project,
                directory: name,
                type: 'gear',
            }),
            schematic('logic', {
                list: `${name}`,
                project: schema.project,
                directory: name,
                type: 'api',
            }),
            schematic('logic', {
                list: `${name}`,
                project: schema.project,
                directory: name,
                type: 'addon',
            }),
            schematic('logic', {
                list: `${name}`,
                project: schema.project,
                directory: name,
                type: 'model',
            }),
            exportToLibIndex(schema.projectType, schema.projectRoot, `export * from './lib/${name}/index'`, true),
        ])
    }
}
