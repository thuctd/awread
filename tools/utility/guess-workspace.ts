import {
    chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
    branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';

import { getWorkspace, buildDefaultPath } from '@schematics/angular/utility/workspace';
import * as path from 'path';
import { applyWithSkipExisting } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { Path, normalize, strings } from '@angular-devkit/core';
import { getNpmScope, readJsonFile } from '@nrwl/workspace';

const resolve = require('path').resolve;

export async function getProjectRoot(schema, tree) {

}

export async function getGeneratePath(schema, tree) {
    const cwd = process.cwd();
    switch (true) {
        case schema.project === "global-design-system":
            schema.path = `/libs/global/design-system/src/lib`;
            return schema.path;
        default:
            return getAbsolutePathFromProjectRoot(cwd, schema, tree);
    }
}

export async function getAbsolutePathFromProjectRoot(cwd, schema, tree) {
    const isInAppsOrLibs = cwd.includes('libs') ?? cwd.includes('apps');
    if (isInAppsOrLibs) {
        const folderPath = cwd.includes('libs') ? path.join('libs', cwd.split('libs')[1]) : path.join('apps', cwd.split('apps')[1]);
        schema.path = normalize(folderPath);
        const isGenerateFolderIsType = schema.path.split('/').pop() === schema.type + 's';
        if (isGenerateFolderIsType) {
            schema.path = schema.path.split('/').slice(0, -1).join('/');
        }
    } else {
        schema.path = await getDefaultProjectPath(schema, tree);
    }
    schema.path = normalize(schema.path);
    return schema.path;
}

export async function guessProject(tree) {
    let projectName;
    let projectRoot;
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    const cwdDashrize = cwdNormalize.replace(/\//g, '-').trim();
    const workspace = await getWorkspace(tree);
    const entries = Object.fromEntries(workspace.projects.entries());
    for (const [name, project] of Object.entries<any>(entries)) {
        // console.log('name,project', name, cwdDashrize, cwdDashrize.includes(name));
        if (project.sourceRoot && cwdDashrize.includes(name)) {
            projectName = name;
            projectRoot = entries[projectName].sourceRoot;
        }
    }
    if (!projectName) {
        projectName = await getDefaultProjectName(tree);
        projectRoot = entries[projectName].sourceRoot;
    }
    return { projectName, projectRoot };
}

async function getDefaultProjectName(tree) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return angularFile.defaultProject;
}

async function getDefaultProjectPath(schema, tree) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(schema.project);
    return buildDefaultPath(project);
}
