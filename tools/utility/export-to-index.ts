import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';


export function exportToLibIndex(projectRoot, exportContent) {
  if (!exportContent.includes(';')) {
    exportContent = exportContent + ';';
  }
  return (tree: Tree) => {
    const indexFilePath = path.join(projectRoot, 'index.ts');
    const buffer = tree.read(indexFilePath);
    const indexSource = buffer!.toString('utf-8');
    if (indexSource.includes(exportContent)) {
      return tree;
    }
    const indexSourceFile = ts.createSourceFile(
      indexFilePath,
      indexSource,
      ts.ScriptTarget.Latest,
      true
    );

    insert(tree, indexFilePath, [
      ...addGlobal(
        indexSourceFile,
        indexFilePath,
        exportContent
      ),
    ]);
    return tree;
  }
}


export function exportToFileIndex(indexPath, exportContent) {
  if (!exportContent.includes(';')) {
    exportContent = exportContent + ';';
  }
  return (tree: Tree) => {
    const indexFilePath = path.join(indexPath);
    if (tree.exists(indexFilePath)) {
      const buffer = tree.read(indexFilePath);
      const indexSource = buffer!.toString('utf-8');
      if (indexSource.includes(exportContent)) {
        return tree;
      }
      const indexSourceFile = ts.createSourceFile(
        indexFilePath,
        indexSource,
        ts.ScriptTarget.Latest,
        true
      );

      insert(tree, indexFilePath, [
        ...addGlobal(
          indexSourceFile,
          indexFilePath,
          exportContent
        ),
      ]);
    } else {
      tree.create(indexFilePath, exportContent);
    }
    return tree;
  }
}
