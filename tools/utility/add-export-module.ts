
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
import { buildAliasFromProjectRoot } from './build-alias-from-project-root';

export function addExportDeclarationToModule(schema, whatYouWantToImport: string, writeToFilePath: string, customImportSyntax?: string): Rule {
  return (tree: Tree) => {
    if (!whatYouWantToImport || !writeToFilePath) {
      return tree;
    }
    // Part I: Construct path and read file
    const writeToModulePath = normalize(`${writeToFilePath}.ts`);
    const text = tree.read(writeToModulePath);
    if (text === null) {
      throw new SchematicsException(`File ${writeToModulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(writeToModulePath, sourceText, ts.ScriptTarget.Latest, true);

    // PART II: targetModule name
    const targetModuleClassify = `${classify(whatYouWantToImport)}`;

    const addImport = (
      symbolName: string,
      fileName: string,
      isDefault = false
    ): Change => {
      return insertImport(source, writeToModulePath, symbolName, fileName, isDefault);
    };

    if (!customImportSyntax) {
      customImportSyntax = buildAliasFromProjectRoot(schema, tree);
    }
    const hasTargetModule = sourceText.includes(targetModuleClassify);
    const syntaxImports = !hasTargetModule ? `{ ${targetModuleClassify} }` : targetModuleClassify;

    insert(tree, writeToModulePath, [
      addImport(syntaxImports, customImportSyntax, true),
      ...addExportToModule(source, writeToModulePath, targetModuleClassify),
    ]);
    // PART III: console.log to see the changes
    const afterInsertContent = tree.get(writeToModulePath)?.content.toString();
    // console.log('change result:', afterInsertContent);

    return tree;
  };
}
