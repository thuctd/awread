export function prepareCurrentModule(schema) {
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const currentModuleName = `${directoryNoSlash}-${schema.kind}-${schema.name}`;
    const projectRoot = `/libs/${directoryNoSlash}/${schema.name}`;
    const project = currentModuleName;

    schema.project = project;
    schema.projectRoot = projectRoot;

    const currentModule = {
        name: currentModuleName,
        path: `${projectRoot}/lib/${currentModuleName}.module`
    }
    return currentModule;
}