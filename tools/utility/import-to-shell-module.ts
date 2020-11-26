import { createDefaultPath } from '@schematics/angular/utility/workspace';

export async function getShellModuleData(tree, directoryNoSlash, declareProject?) {
  const addImportProjectName = declareProject ?? directoryNoSlash + '-feature-shell';
  let addImportProjectPath;
  try {
    addImportProjectPath = await createDefaultPath(tree, addImportProjectName);
    return {
      name: addImportProjectName,
      path: addImportProjectPath,
    }
  } catch (error) {
    return {
      name: null,
      path: null
    }
  }


}
