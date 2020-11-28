import { createDefaultPath } from '@schematics/angular/utility/workspace';

export async function getModuleData(tree, directoryNoSlash, declareProject?) {
  const addImportProjectName = declareProject ?? directoryNoSlash + '-feature-shell';
  let addImportProjectPath;
  try {
    addImportProjectPath = await createDefaultPath(tree, addImportProjectName);
    return {
      name: addImportProjectName,
      folderPath: addImportProjectPath,
      filePath: `${addImportProjectPath}/${addImportProjectName}.module`,
    }
  } catch (error) {
    return {
      name: null,
      folderPath: null,
      filePath: null,
    }
  }


}
