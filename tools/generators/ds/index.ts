import { chain, Rule, SchematicContext, Tree, schematic } from '@angular-devkit/schematics';


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
