import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { createSharedLibrary, createFiles, updateFiles } from '../../utility/edit-angular-json';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const assetExist = tree.exists(`libs/global/assets/README.md`);
    const styleExist = tree.exists(`libs/global/styles/README.md`);
    const environmentsExist = tree.exists(`libs/global/environments/src/index.ts`);
    if (environmentsExist || schema.name === 'update') return chain([
      createSharedLibrary(),
      updateFiles()
    ]);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: 'assets',
        directory: schema.name,
        tags: `scope:shared,type:assets`,
        style: 'scss'
      }),
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: 'styles',
        directory: schema.name,
        tags: `scope:shared,type:styles`,
        style: 'scss'
      }),
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: 'environments',
        directory: schema.name,
        tags: `scope:shared,type:environments`,
        style: 'scss'
      }),
      createSharedLibrary(),
      createFiles(),
    ])
  }
}
