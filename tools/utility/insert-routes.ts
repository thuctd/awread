import { addImportPathToModule } from "./add-import-module";
import { FileModule } from "./file-module.type";
import { insertCustomCode } from "./insert-custom-code";
import { Tree } from '@angular-devkit/schematics';
import { normalize } from "path";
import { applyLintFix } from '@schematics/angular/utility/lint-fix';

export function insertRoutes(schema: any, writeToModule: FileModule, routes: string) {
  const insertRoutes = insertCustomCode(writeToModule.filePath, routes);
  const addRoutesTypeImport = addImportPathToModule(schema, 'Routes', writeToModule.filePath, '@angular/router', null, true);
  return [
    addRoutesTypeImport,
    updateRoutesVariable(writeToModule),
    insertRoutes,
    applyLintFix(writeToModule.filePath)
  ];
}

export function updateRoutesVariable(writeToModule: FileModule) {
  return (tree: Tree) => {
    const path = normalize(`${writeToModule.filePath}.ts`)
    const content = detectRouterModule(tree, path);
    tree.overwrite(path, content)
    return tree;
  }
}

export function detectRouterModule(tree, path: string) {

  const content: string | null = tree.get(path)?.content.toString();
  if (content) {
    return content
      .replace('forRoot([])', 'forRoot(routes)')
      .replace('forChild([])', 'forChild(routes)')
  } else {
    return content;
  }
}
