import { Path, normalize, strings } from '@angular-devkit/core';
import {
  SchematicContext, Rule, SchematicsException, Tree, apply, applyTemplates, chain, filter, mergeWith, move, noop, schematic, externalSchematic, MergeStrategy, url,
} from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { addImportToModule, getRouterModuleDeclaration, findNodes } from '@schematics/angular/utility/ast-utils';
import { Change } from '@schematics/angular/utility/change';
import { MODULE_EXT, ROUTING_MODULE_EXT, buildRelativePath, findModuleFromOptions } from '@schematics/angular/utility/find-module';
import { applyLintFix } from '@schematics/angular/utility/lint-fix';
import { parseName } from '@schematics/angular/utility/parse-name';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { InsertChange } from '@nrwl/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { camelize, classify } from '@nrwl/workspace/src/utils/strings';
import { addGlobal, getSourceNodes, insert, insertImport, RemoveChange, ReplaceChange } from '@nrwl/workspace/src/utils/ast-utils';
import { write } from 'fs';
import * as path from 'path';

export default function (schema: any): Rule {
  return async (host: Tree) => {
    schema.originName = schema.name.split('/').pop();
    schema.path = await createDefaultPath(host, schema.project as string);
    return chain([
      ...addPageService(schema),
      addPageIndexIfPossible(schema),
      addLibIndexIfPossible(schema),
      // schema.lintFix ? applyLintFix(schema.path) : noop(),
    ]);
  };
}

function addPageIndexIfPossible(schema) {
  if (!schema.indexPath) {
    return noop();
  }
  return (tree: Tree, context: SchematicContext) => {
    const filePath = path.join(schema.path, schema.name, schema.indexPath, 'index.ts');
    const existIndex = tree.exists(filePath);
    const exportString = `export * from './${schema.originName}.${schema.type}';`;
    if (existIndex) {
      const buffer = tree.read(filePath);
      const indexSource = buffer!.toString('utf-8');
      const indexSourceFile = ts.createSourceFile(
        filePath,
        indexSource,
        ts.ScriptTarget.Latest,
        true
      );

      insert(tree, filePath, [
        ...addGlobal(
          indexSourceFile,
          filePath,
          exportString
        )
      ]);
    } else {
      tree.create(filePath, exportString);
    }
    const afterInsertContent = tree.get(filePath)?.content.toString();
    return tree;

  }
}

function addLibIndexIfPossible(schema) {
  return (tree: Tree, context: SchematicContext) => {
    const filePath = path.join(schema.path, '../index.ts');
    const existIndex = tree.exists(filePath);
    const exportString = `export * from './lib/${schema.name}';`;
    if (existIndex) {
      const buffer = tree.read(filePath);
      const indexSource = buffer!.toString('utf-8');
      const indexSourceFile = ts.createSourceFile(
        filePath,
        indexSource,
        ts.ScriptTarget.Latest,
        true
      );

      insert(tree, filePath, [
        ...addGlobal(
          indexSourceFile,
          filePath,
          exportString
        )
      ]);
    } else {
      tree.create(filePath, exportString);
    }
    const afterInsertContent = tree.get(filePath)?.content.toString();
    return tree;

  }
}

function addPageService(schema) {
  const pathFile = path.join(schema.path, schema.name);
  const templateSource = apply(url('./files'), [
    filter(path => path.endsWith('type@dasherize__.ts.template')),
    applyTemplates({
      ...schema,
      ...strings
    }),
    move(pathFile),
  ]);

  return [
    mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
  ];
}
