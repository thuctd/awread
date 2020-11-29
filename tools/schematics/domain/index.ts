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
import { createSharedLibrary, updateFiles } from '../../utility/edit-angular-json';
import { dasherize } from '@nrwl/workspace/src/utils/strings';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    if (!schema.directory?.length) {
      throw new SchematicsException(`directory (${schema.directory}) is not valid, it must have length`);
    }

    const web = 'web';
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const webName = dasherize(directoryNoSlash + '-' + web);
    const webDir = schema.directory + '/' + web;

    const chainWeb = [
      externalSchematic('@nrwl/angular', 'app', {
        name: web,
        directory: schema.directory,
        style: 'scss',
        routing: false,
        strict: true,
        tags: `scope:shared,type:app`,
      }),
      schematic('shell', {
        project: webName,
        directory: webDir,
      }),
      schematic('shared', {
        directory: webDir,
      })
    ];

    const phone = 'phone';
    const phoneName = dasherize(directoryNoSlash + '-' + phone);
    const phoneDir = schema.directory + '/' + phone;

    const chainPhone = [
      externalSchematic('@nrwl/angular', 'app', {
        name: phone,
        directory: schema.directory,
        style: 'scss',
        routing: false,
        strict: true,
        tags: `scope:shared,type:app`,
      }),
      schematic('shell', {
        project: phoneName,
        directory: phoneDir,
      }),
      schematic('shared', {
        directory: phoneDir,
      })
    ]

    return chain([
      ...chainWeb,
      ...chainPhone,
        schematic('global', {
          name: 'global',
        }),
    ]);
  }
}
