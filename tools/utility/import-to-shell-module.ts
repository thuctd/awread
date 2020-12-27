import { createDefaultPath } from '@schematics/angular/utility/workspace';

export async function getShellModuleData(tree, schema, declareProject?) {
  const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
  const name = directoryNoSlash + '-feature-shell';
  let projectRoot;
  try {
    projectRoot = await createDefaultPath(tree, name);
    return {
      name: name,
      folderPath: projectRoot,
      filePath: `${projectRoot}/${name}.module`,
    }
  } catch (error) {
    return {
      name: null,
      folderPath: null,
      filePath: null,
    }
  }
}
