import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'ui-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const directory: string = schema.directory.replace(/\//g, '-').trim();
    const projectName = directory + '-' + schema.name.trim();

    const featureShellName = schema.project ?? directory + '-feature-shell';
    const featureShellPath = await createDefaultPath(tree, featureShellName);
    return chain([
        externalSchematic('@nrwl/angular', 'lib', {
          name: schema.name,
          directory: schema.directory ?? './',
          tags: `scope:ui-${name},scope:shared,type:ui`,
          style: 'scss'
        }),
        ...addPage(schema, projectName),
        addDeclarationToAppModule(schema, projectName, featureShellPath, featureShellName)
      ])
  }
}

import { SchematicsException } from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import * as ts from 'typescript';
import { insert, readJsonFile, toFileName } from '@nrwl/workspace';
import { Change, insertImport } from '@nrwl/workspace/src/utils/ast-utils';
import { addImportToModule } from '@nrwl/angular/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';

export function addPage(schema, projectName): Rule[] {
  console.log('project name', projectName, schema.pages);
  schema.pages = schema.pages ?? [];
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) => schematic('page', { project: projectName, name: page.trim() })) : [];
  return !pages.length ? [] : pages;
}

export function addDeclarationToAppModule(schema, targetLibName: string, featureShellPath: string, featureShellName: string): Rule {
  return (host: Tree) => {
    if (!targetLibName) {
      return host;
    }
    // Part I: Construct path and read file
    const writeToModulePath = normalize(`${featureShellPath}/${featureShellName}.module.ts`);
    const text = host.read(writeToModulePath);
    if (text === null) {
      throw new SchematicsException(`${writeToModulePath} does not exist.`);
      }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(writeToModulePath, sourceText, ts.ScriptTarget.Latest, true);

    // PART II: targetModule name
    const targetModuleClassify = `${classify(targetLibName)}Module`;

    const addImport = (
      symbolName: string,
      fileName: string,
      isDefault = false
    ): Change => {
      return insertImport(source, writeToModulePath, symbolName, fileName, isDefault);
    };

    const dir = `${toFileName(schema.directory)}`;
    const pathPrefix = `${dir}/${toFileName(schema.name)}`;
    const workspaceName = readJsonFile('package.json').name;
    const moduleImportPath = `@${workspaceName}/${pathPrefix}`;
    const syntaxImports = `{ ${targetModuleClassify} }`;
    insert(host, writeToModulePath, [
      addImport(syntaxImports, moduleImportPath, true),
      ...addImportToModule(source, writeToModulePath, targetModuleClassify),
    ]);

    return host;
  };
}
