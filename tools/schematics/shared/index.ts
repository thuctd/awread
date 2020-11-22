import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToAppModule } from '../../utility/add-import-module';
import { addExportDeclarationToAppModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';

function addRouterOutlet(tree: Tree, schema: any, target) {
  return (tree: Tree, context: SchematicContext) => {
    const path = `${schema.path}/shared/src/lib/layouts/${target}/${target}.layout.html`;
    let sharedLayout = tree.read(path);
    if (sharedLayout != null) {
      let newData = `${sharedLayout.toString()}\n<router-outlet></router-outlet>`;
      tree.overwrite(path, newData);
    }
    return tree;
  }

}

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const directoryLibsPath = normalize(`libs/${schema.directory}`)
    const currentModuleName = directoryNoSlash + '-' + schema.name.trim();
    const currentModulePath = normalize(`${directoryLibsPath}/${schema.name}/src/lib`);
    // adding template
    const parsedPath = parseName(directoryLibsPath, schema.name);
    schema.path = parsedPath.path;
    schema.directoryNoSlash = directoryNoSlash;
    schema.featureShellName = currentModuleName;

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
        style: 'scss'
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-desktop`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(tree, schema, 'shell-desktop'),
      externalSchematic('@nrwl/angular', 'component', {
        name: `layouts/shell-mobile`,
        type: 'layout',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      addRouterOutlet(tree, schema, 'shell-mobile'),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/navbar`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/header`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: `parts/footer`,
        type: 'part',
        style: 'scss',
        module: currentModuleName,
        project: currentModuleName,
        export: true
      })
    ])
  }
}
