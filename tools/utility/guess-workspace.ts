import { SchematicsException } from '@angular-devkit/schematics';
import { getWorkspace, buildDefaultPath } from '@schematics/angular/utility/workspace';
import { Path, normalize, strings } from '@angular-devkit/core';

export async function guessProjectToSchema(tree, schema, context) {
    const { projectName, projectRoot } = await guessProject(tree, schema);
    return {
        ...schema,
        kind: context.schematic.description.name,
        project: projectName,
        projectRoot
    }
}

export async function guessProject(tree, schema) {
    let projectName = tree.project;
    let projectRoot = await guessProjectRoot(tree, projectName);
    if (projectRoot) {
        return { projectName, projectRoot };
    }
    return await guessProjectByPath(tree, schema);

}

async function guessProjectByPath(tree, schema) {
    let projectName;
    let projectRoot;
    const cwd = process.cwd();
    const cwdNormalize = normalize(cwd);
    const cwdDashrize = cwdNormalize.replace(/\//g, '-').trim();
    const workspace = await getWorkspace(tree);
    const entries = Object.fromEntries(workspace.projects.entries());

    for (const [name, project] of Object.entries<any>(entries)) {
        if (project.sourceRoot && cwdDashrize.includes(name)) {
            projectName = name;
            projectRoot = entries[projectName].sourceRoot;
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
    const workspace = await getWorkspace(tree);
    const entries = Object.fromEntries(workspace.projects.entries());
    let projectRoot;
    for (const [name, project] of Object.entries<any>(entries)) {
        try {
            projectRoot = entries[projectName].sourceRoot;
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
