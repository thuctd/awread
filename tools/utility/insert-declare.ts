import { InsertChange } from '@schematics/angular/utility/change';

import { SchematicsException } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import * as ts from 'typescript';
import { insert, readJsonFile, toFileName } from '@nrwl/workspace';
import { Change, insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { addExportToModule } from '../utility/ast-utils';
import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';


import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';

export function insertDeclare(destinationPath: string, destinationName: string, schema: any, whatYouWantToImport: string): Rule {
  return (tree: Tree) => {
    // Part I: Construct path and read file

    const writeToModulePath = normalize(`${destinationPath}/${destinationName}.module.ts`);
    const text = tree.read(writeToModulePath);
    if (text === null) {
      throw new SchematicsException(`File ${writeToModulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(writeToModulePath, sourceText, ts.ScriptTarget.Latest, true);

    // PART II: targetModule name
    const target = source.statements[2];
    const postionToImport = target.pos;
    whatYouWantToImport = whatYouWantToImport ?? `declare const window: any;\nwindow.haveMobile = ${schema.haveMobile};`;
    // insert a new change
    const insertChange = new InsertChange(writeToModulePath, postionToImport, whatYouWantToImport);
    const exportRecorder = tree.beginUpdate(writeToModulePath);
    exportRecorder.insertLeft(insertChange.pos, insertChange.toAdd);
    tree.commitUpdate(exportRecorder);
    // PART III: console.log to see the changes
    const afterInsertContent = tree.get(writeToModulePath)?.content.toString();
    console.log('change result:', afterInsertContent);
    // const a = 'foo';
    // const b = 'bar';

    // tree.delete(writeToModulePath); // cleanup (if not running schematic in debug mode)
    return tree;
  };
}
