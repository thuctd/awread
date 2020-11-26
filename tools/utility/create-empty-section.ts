import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, insert, RemoveChange } from '@nrwl/workspace';
import { insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';


export function createEmptySection(projectPath: string, folderName: string) {
    return (tree: Tree, context: SchematicContext) => {
      const filePath = path.join(
        projectPath,
        folderName,
        'sections',
        '.gitkeep'
      );
      tree.create(filePath, ``);
      return tree;
    }
  }
