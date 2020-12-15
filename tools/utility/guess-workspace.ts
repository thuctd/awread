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
    if (schema.project === "global-design-system") {
        schema.path = `/libs/global/design-system/src/lib`;
        return schema.path;
    } else if (isInAppsOrLibs) {
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
        // console.log('name,project', name);
        if (project.sourceRoot && cwdNormalize.includes(project.sourceRoot)) {
            projectName = name;
        }
    }
    return projectName;
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
