
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

export function addExportDeclarationToModule(schema, whatYouWantToImport: string, destinationPath: string, destinationName: string, customImportSyntax?: string): Rule {
  return (host: Tree) => {
    if (!whatYouWantToImport) {
      return host;
    }
    // Part I: Construct path and read file
    const writeToModulePath = normalize(`${destinationPath}/${destinationName}.module.ts`);
    const text = host.read(writeToModulePath);
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
      const dir = `${toFileName(schema.directory)}`;
      const pathPrefix = `${dir}/${toFileName(schema.name)}`;
      const workspaceName = readJsonFile('package.json').name;
      customImportSyntax = `@${workspaceName}/${pathPrefix}`;
    }
    const hasTargetModule = sourceText.includes(targetModuleClassify);
    const syntaxImports = !hasTargetModule ? `{ ${targetModuleClassify} }` : targetModuleClassify;

    insert(host, writeToModulePath, [
      addImport(syntaxImports, customImportSyntax, true),
      ...addExportToModule(source, writeToModulePath, targetModuleClassify),
    ]);

    return host;
  };
}
