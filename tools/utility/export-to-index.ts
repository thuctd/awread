import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';


export function exportToLibIndex(projectRoot, exportContent) {
  return (tree: Tree) => {
    const indexFilePath = path.join(projectRoot, '../index.ts');
    const buffer = tree.read(indexFilePath);
    const indexSource = buffer!.toString('utf-8');
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
