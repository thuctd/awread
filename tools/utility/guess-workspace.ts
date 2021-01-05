import { SchematicsException } from '@angular-devkit/schematics';
import { getWorkspace, buildDefaultPath } from '@schematics/angular/utility/workspace';
import { Path, normalize, strings } from '@angular-devkit/core';
import { getNpmScope } from '@nrwl/workspace';

export function getWorkspaceName(tree) {
    return getNpmScope(tree);
}

export async function guessProjectToSchema(tree, schema, context) {
    const kind = schema.kind ?? context.schematic.description.name;
    const { projectName, projectRoot, projectType } = await guessProject(tree, schema);
    const { application, applicationRoot } = await guessApplication(tree, projectName);
    return {
        ...schema,
        kind,
        project: projectName,
        projectRoot,
        application,
        applicationRoot,
        projectType
    }
}

export async function guessApplicationToSchema(schema, tree) {
    const { application, applicationRoot } = await guessApplication(tree, schema.application);
    schema.application = application;
    schema.applicationRoot = applicationRoot;
    return schema;
}

export async function guessApplication(tree, projectName) {
    const projectEntries = getProjectsEntries(tree);
    let application;
    let applicationRoot;
    for (const [name, project] of projectEntries) {
        if (projectName.includes(name)) {
            application = name;
            applicationRoot = project.sourceRoot;
        }
    }
    return { application, applicationRoot };
}

export async function guessProject(tree, schema) {
    let projectName = schema.project;
    let { projectRoot, projectType } = await guessProjectRoot(tree, projectName);
    projectRoot = schema.projectRoot ?? projectRoot;
    projectType = schema.projectType ?? projectType;
    if (projectRoot) {
        return { projectName, projectRoot, projectType };
    }
    return await guessProjectByPath(tree, schema);

}

export function getProjectsEntries(tree) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return Object.entries<any>(angularFile.projects);
}

export function getLastFolder() {
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    return cwdNormalize.split('/').pop();
}

async function guessProjectByPath(tree, schema) {
    let projectName;
    let projectRoot;
    let projectType;
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    const cwdDashrize = cwdNormalize.replace(/\//g, '-').trim();
    const projectEntries = getProjectsEntries(tree);

    for (const [name, project] of projectEntries) {
        if (project.sourceRoot && cwdDashrize.includes(name)) {
            projectName = name;
            projectRoot = project.sourceRoot;
            projectType = project.projectType;
        }
    }
    if (projectName) {
        return { projectName, projectRoot, projectType };
    }
    return guessDefaultProject(tree, schema);
}

async function guessDefaultProject(tree, schema) {
    const projectName = await getDefaultProjectName(tree);
    const defaultProject = await getProject(tree, projectName);
    const projectRoot = defaultProject.sourceRoot;
    const projectType = defaultProject.projectType;
    return { projectName, projectRoot, projectType };
}

async function guessProjectRoot(tree, projectName) {
    let projectRoot;
    let projectType;
    if (!projectName) return { projectRoot, projectType };
    const projectEntries = getProjectsEntries(tree);
    for (const [name, project] of projectEntries) {
        if (name === projectName) {
            try {
                projectRoot = project.sourceRoot;
                projectType = project.projectType;
            } catch (error) {
                throw new SchematicsException(`cannot detect sourceRoot of project: ${projectName}`)
            }
        }
    }
    return { projectRoot, projectType };
}

async function getDefaultProjectName(tree) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return angularFile.defaultProject;
}

export async function getProject(tree, projectName) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return angularFile.projects[projectName];
}

export async function getDefaultProjectPath(schema, tree) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(schema.project);
    return buildDefaultPath(project);
}
