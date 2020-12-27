import { SchematicsException } from '@angular-devkit/schematics';
import { getWorkspace, buildDefaultPath } from '@schematics/angular/utility/workspace';
import { Path, normalize, strings } from '@angular-devkit/core';
import { getNpmScope } from '@nrwl/workspace';

export async function getWorkspaceName(tree) {
    return getNpmScope(tree);
}

export async function guessProjectToSchema(tree, schema, context) {
    const { projectName, projectRoot } = await guessProject(tree, schema);
    const { application, applicationRoot } = await guessApplication(tree, projectName);
    return {
        ...schema,
        kind: schema.kind ?? context.schematic.description.name,
        project: projectName,
        projectRoot,
        application,
        applicationRoot
    }
}

export async function guessApplicationToSchema(schema, tree) {
    const { application, applicationRoot } = await guessApplication(tree, schema.application);
    schema.application = application;
    schema.applicationRoot = applicationRoot;
    return schema;
}

export async function guessApplication(tree, projectName) {
    const projectEntries = await getProjectsEntries(tree);
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
    let projectRoot = schema.projectRoot ?? await guessProjectRoot(tree, projectName);
    if (projectRoot) {
        return { projectName, projectRoot };
    }
    return await guessProjectByPath(tree, schema);

}

async function getProjectsEntries(tree) {
    const workspace = await getWorkspace(tree);
    const entries = Object.fromEntries(workspace.projects.entries());
    return Object.entries<any>(entries);
}

async function guessProjectByPath(tree, schema) {
    let projectName;
    let projectRoot;
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    const cwdDashrize = cwdNormalize.replace(/\//g, '-').trim();
    const projectEntries = await getProjectsEntries(tree);

    for (const [name, project] of projectEntries) {
        if (project.sourceRoot && cwdDashrize.includes(name)) {
            projectName = name;
            projectRoot = project.sourceRoot;
        }
    }
    if (projectName) {
        return { projectName, projectRoot };
    }
    return guessDefaultProject(tree, schema);
}

async function guessDefaultProject(tree, schema) {
    const projectName = await getDefaultProjectName(tree);
    const projectRoot = await getDefaultProjectRoot(tree, schema);
    return { projectName, projectRoot };
}

async function guessProjectRoot(tree, projectName) {
    if (!projectName) return;
    const projectEntries = await this.getProjectsEntries(tree);
    let projectRoot;
    for (const [name, project] of projectEntries) {
        try {
            projectRoot = projectEntries.sourceRoot;
        } catch (error) {
            throw new SchematicsException(`cannot detect sourceRoot of project: ${projectName}`)
        }
    }
    return projectRoot
}

async function getDefaultProjectName(tree) {
    const angularFile = JSON.parse(tree.read('angular.json').toString('utf-8'));
    return angularFile.defaultProject;
}

async function getDefaultProjectRoot(tree, schema) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(schema.project);
    return project.sourceRoot;
}

export async function getDefaultProjectPath(schema, tree) {
    const workspace = await getWorkspace(tree);
    const project = workspace.projects.get(schema.project);
    return buildDefaultPath(project);
}
