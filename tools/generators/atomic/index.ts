import { chain, externalSchematic, Rule, SchematicContext, Tree, url, template, move } from '@angular-devkit/schematics';
import { componentSetting } from '../../utility/edit-angular-json';
import { applyWithSkipExisting } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { strings } from '@angular-devkit/core';
import { getNpmScope } from '@nrwl/workspace';
import { spacerize } from '../../utility/text-utility';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const parts = schema.list.length ? schema.list.split(',') : [];
        schema = await guessProjectToSchema(tree, schema, context);
        const storyTitle = readStoryTitle(schema.project);
        const generatePath = `${schema.projectRoot}/lib/atomics`;
        const atomicModule = `${schema.project}-atomic`;
        const generateActions = parts.map(name =>
            externalSchematic('@schematics/angular', 'component', {
                ...componentSetting,
                type: schema.type,
                name: `${schema.type}s/${name}`,
                export: schema.export,
                path: generatePath,
                module: atomicModule,
                prefix: schema.type,
                inlineStyle: true,
                skipTests: true,
            }));
        const componentStories = parts.map(name =>
            applyWithSkipExisting(url('./files'), [
                template({
                    ...strings,
                    componentFileName: `${name}.${schema.type}`,
                    componentName: classify(`${name}-${schema.type}`),
                    title: `${spacerize(storyTitle)}/${spacerize(schema.type)}s/${spacerize(name)}`,
                    atomicModule: atomicModule,
                    tmpl: '',
                }),
                move(generatePath + '/' + `${schema.type}s/${name}`),
            ]))
        return chain([
            addParentModule(generatePath, schema.project),
            ...generateActions,
            ...componentStories
        ])
    }
}

export function readStoryTitle(projectName) {
    let title;
    switch (true) {
        case projectName.includes('global'):
            title = projectName.split('global-')[1];
            break;
        case projectName.includes('-ui-'):
            title = projectName.split('-ui-')[1];
            break;
        case projectName.includes('shared'):
            title = 'shared';
            break;
        default:
            title = projectName;
            break;
    }
    return title;
}

export function addParentModule(generatePath: string, projectName: string) {
    return (tree) => {
        const atomicModulePath = `${generatePath}/${projectName}-atomic.module.ts`;
        const atomicModuleExist = tree.exists(atomicModulePath);
        const workspaceName = getNpmScope(tree);
        if (!atomicModuleExist) {
            console.log('adding new atomic module');
            tree.create(atomicModulePath, `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@${workspaceName}/global/design-system';
@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule]
})
export class ${classify(projectName)}AtomicModule {}
`)
        }
    }
}