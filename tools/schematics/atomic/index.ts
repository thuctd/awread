import {
    chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
    branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';

import { getWorkspace, buildDefaultPath } from '@schematics/angular/utility/workspace';
import { createSharedLibrary, createFiles, updateFiles, appAndLibSetting, componentSetting } from '../../utility/edit-angular-json';
import * as path from 'path';
import { applyWithSkipExisting } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { Path, normalize, strings } from '@angular-devkit/core';
const resolve = require('path').resolve;

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const parts = schema.list.length ? schema.list.split(',') : [];
        const projectName = await getProjectName(schema, tree);
        schema.project = projectName;
        const storyTitle = schema.project.includes('-ui-') ? schema.project.split('-ui-')[1] : schema.project;
        const generatePath = await getGeneratePath(schema, tree, projectName);
        const generateActions = parts.map(name =>
            externalSchematic('@schematics/angular', 'component', {
                ...componentSetting,
                type: schema.type,
                name: `${schema.type}s/${name}`,
                export: true,
                path: generatePath,
                skipTests: true
            }));
        const componentStories = parts.map(name =>
            applyWithSkipExisting(url('./files'), [
                template({
                    ...strings,
                    componentFileName: `${name}.${schema.type}`,
                    componentName: classify(`${name}-${schema.type}`),
                    title: `${classify(storyTitle)}/${classify(schema.type)}s/${classify(name)}`,
                    atomicModule: `${projectName}-atomic`,
                    tmpl: '',
                }),
                move(generatePath + '/' + `${schema.type}s/${name}`),
            ]))
        return chain([
            addParentModule(generatePath, projectName),
            ...generateActions,
            ...componentStories
        ])
    }
}

export function addParentModule(generatePath: string, projectName: string) {
    return (tree) => {
        const atomicModulePath = `${generatePath}/${projectName}-atomic.module.ts`;
        const atomicModuleExist = tree.exists(atomicModulePath);
        if (!atomicModuleExist) {
            tree.create(atomicModulePath, `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
  exports: [CommonModule]
})
export class ${classify(projectName)}AtomicModule {}
`)
        }
    }
}

export async function getProjectName(schema, tree) {
    const cwd = process.cwd();
    const isInAppsOrLibs = cwd.includes('libs') ?? cwd.includes('apps');
    let projectName = schema.project;
    if (!projectName && isInAppsOrLibs) {
        projectName = await guessProject(tree);
    } else {
        projectName = projectName ?? await getDefaultProjectName(tree);
    }
    return projectName;
}

export async function getGeneratePath(schema, tree, projectName) {
    const cwd = process.cwd();
    const isInAppsOrLibs = cwd.includes('libs') ?? cwd.includes('apps');
    if (isInAppsOrLibs) {
        const folderPath = cwd.includes('libs') ? path.join('libs', cwd.split('libs')[1]) : path.join('apps', cwd.split('apps')[1]);
        schema.path = folderPath;
    } else {
        schema.path = await getDefaultProjectPath(schema, tree);
    }
    schema.path = normalize(schema.path);
    return schema.path;
}

export async function guessProject(tree) {
    let projectName;
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    const workspace = await getWorkspace(tree);
    const entries = Object.fromEntries(workspace.projects.entries());
    for (const [name, project] of Object.entries(entries)) {
        if (cwdNormalize.includes(project.sourceRoot)) {
            projectName = name;
        }
    }
    return projectName;
}

async function getDefaultProjectName(tree) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return angularFile.defaultProject;
}

async function getDefaultProjectPath(projectName, tree) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(projectName);
    return buildDefaultPath(project);
}
