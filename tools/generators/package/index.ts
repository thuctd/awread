import { chain, Rule, SchematicContext, Tree, schematic, externalSchematic } from '@angular-devkit/schematics';
import { componentSetting } from '../../utility/edit-angular-json';
import { exportToLibIndex } from '../../utility/export-to-index';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        schema.project = 'global-packages';
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
            externalSchematic('@schematics/angular', 'module', {
                name,
                project: 'global-packages',
            }),
            externalSchematic('@schematics/angular', 'component', {
                ...componentSetting,
                name,
                module: name,
                project: 'global-packages',
                export: true,
                inlineStyle: schema.inline,
                inlineTemplate: schema.inline,
                skipTests: true,
                viewEncapsulation: 'None'
            }),
            exportToLibIndex(schema.projectType, schema.projectRoot, `export * from './lib/${name}/${name}.module'`),
        ])
    }
}
