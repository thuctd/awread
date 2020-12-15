import {
  chain, externalSchematic, Rule, SchematicContext, Tree, SchematicsException, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { modifyEslint, createSharedLibrary, updateFiles, updateGenerator } from '../../utility/edit-angular-json';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { getProjectConfig, updateWorkspaceInTree } from '@nrwl/workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {

    return chain([
      updateGenerator(),
    ])
   }
}
