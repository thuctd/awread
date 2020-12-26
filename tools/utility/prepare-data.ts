import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { getModuleData } from './import-to-shell-module';

export async function prepareData(schema, tree, context, kind) {
    const PREFIX = `${kind}-`;
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
        // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
        schema.name = `${PREFIX}${schema.name}`;
    };
    const originName = schema.name.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const libName = `${directoryNoSlash}-${schema.name}`
    const addImportProjectName = schema.declareProject ?? `${directoryNoSlash}-ui-${originName}`;
    const uiLibPath = `/libs/${schema.directory}/ui-${originName}/src/index.ts`;
    const uiLibExist = tree.exists(uiLibPath);
    let addImportProjectPath;
    if (uiLibExist) {
        try {
            addImportProjectPath = await createDefaultPath(tree, addImportProjectName);
            schema.writeToFilePath = `${addImportProjectPath}/${addImportProjectName}.module`;
        } catch (error) {
            throw new Error(`Couldn't find the project ${addImportProjectName} to create defaultPath`);
        }
    }

    const currentProjectPath = `/libs/${schema.directory}/${schema.name}/src/lib`;
    const editedSchema = schema;
    const shellModule = await getModuleData(tree, directoryNoSlash, schema.declareProject);
    return {
        originName,
        directoryNoSlash,
        libName,
        addImportProjectName,
        addImportProjectPath,
        uiLibExist,
        uiLibPath,
        currentProjectPath,
        editedSchema,
        shellModule
    }
}