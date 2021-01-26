
import { SchematicsException } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import * as ts from 'typescript';
import { insert, readJsonFile, toFileName } from '@nrwl/workspace';
import { Change, insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { addImportToModule } from '@nrwl/angular/src/utils/ast-utils';
import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';

import { classify, dasherize, camelize, underscore } from '@angular-devkit/core/src/utils/strings';
import { buildAliasFromProjectRoot } from './build-alias-from-project-root';

export function addImportPathToModule(schema, whatYouWantToImport: string, writeToFilePath: string, customImportSyntax?: string, fileNameYouWantToImport?, isDefault = false, usingClassify = true): Rule {
  return (host: Tree) => {
    if (!whatYouWantToImport || !writeToFilePath) {
      return host;
    }
    // Part I: Construct path and read file
    const writeToModulePath = normalize(`${writeToFilePath}.ts`);
    const text = host.read(writeToModulePath);
    if (text === null) {
      throw new SchematicsException(`add-import: File ${writeToModulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(writeToModulePath, sourceText, ts.ScriptTarget.Latest, true);

    // PART II: targetModule name
    const targetModuleClassify = usingClassify ? `${classify(whatYouWantToImport)}` : whatYouWantToImport;

    const addImport = (
      symbolName: string,
      fileName: string,
      isDefault = false
    ): Change => {
      return insertImport(source, writeToModulePath, symbolName, fileName, isDefault);
    };

    if (!customImportSyntax) {
      const dir = `${toFileName(schema.directory)}`;
      const pathPrefix = `${dir}/${toFileName(fileNameYouWantToImport ?? schema.name)}`;
      const workspaceName = readJsonFile('package.json').name;
      customImportSyntax = `@${workspaceName}/${pathPrefix}`;
    }
    const syntaxImports = isDefault && !text.includes(customImportSyntax) ? `{ ${targetModuleClassify} }` : targetModuleClassify;

    insert(host, writeToModulePath, [
      addImport(syntaxImports, customImportSyntax, isDefault),
    ]);

    // PART III: console.log to see the changes
    const afterInsertContent = host.get(writeToModulePath)?.content.toString();
    // console.log('change result:', afterInsertContent);

    return host;
  }
}

export function addImportDeclarationToModule(schema, whatYouWantToImport: string, writeToFilePath: string, customImportSyntax?: string, symbolName?: string): Rule {
  return (tree: Tree) => {
    if (!whatYouWantToImport || !writeToFilePath) {
      return tree;
    }
    // Part I: Construct path and read file
    const writeToModulePath = normalize(`${writeToFilePath}.ts`);
    const text = tree.read(writeToModulePath);
    if (text === null) {
      console.log('schema', schema);
      throw new SchematicsException(`add-import: trying to import ${whatYouWantToImport} but File ${writeToModulePath} does not exist.`);
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
      ...addImportToModule(source, writeToModulePath, symbolName ?? targetModuleClassify),
    ]);

    // PART III: console.log to see the changes
    const afterInsertContent = tree.get(writeToModulePath)?.content.toString();
    // console.log('change result:', afterInsertContent);

    return tree;
  };
}
