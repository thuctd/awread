import { readJsonFile, toFileName } from "@nrwl/workspace";

export function getProjectPath(directory, name) {
  let customImportSyntax;
  const dir = `${toFileName(directory)}`;
  const pathPrefix = `${dir}/${toFileName(name)}`;
  const workspaceName = readJsonFile('package.json').name;
  customImportSyntax = `@${workspaceName}/${pathPrefix}`;
  return customImportSyntax;
}
