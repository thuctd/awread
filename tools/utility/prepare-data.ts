export function prepareCurrentModule(schema) {
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const currentModuleName = `${directoryNoSlash}-${schema.kind ? schema.kind + '-' : ''}${schema.name}`;
    const projectRoot = `libs/${schema.directory}/${schema.kind ? schema.kind + '-' : ''}${schema.name}/src`;
    const project = currentModuleName;
    const projectType = 'library';

    schema.project = project;
    schema.projectRoot = projectRoot;
    schema.projectType = projectType;

    const currentModule = {
        name: currentModuleName,
        path: `${projectRoot}/lib/${currentModuleName}.module`
    }
    return currentModule;
}