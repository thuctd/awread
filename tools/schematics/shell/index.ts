import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addExportDeclarationToAppModule } from '../../utility/add-export-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { Path, normalize, strings } from '@angular-devkit/core';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const PREFIX = 'feature-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.fullName = `${PREFIX}${schema.name}`;
    };
    const name = schema.fullName.substring(PREFIX.length);
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    const targetLibName = directoryNoSlash + '-' + schema.fullName.trim();
    // const directoryLibsPath = normalize(`libs/${schema.directory}`)
    // const featureShellPath = normalize(`${directoryLibsPath}/${schema.fullName}/src/lib`);
    // const targetLibName = `${targetLibName}-routing`
    // // adding template
    // const parsedPath = parseName(directoryLibsPath, schema.fullName);
    // schema.path = parsedPath.path;
    // schema.directoryNoSlash = directoryNoSlash;
    // schema.targetLibName = targetLibName;
    // const templateSource = apply(url('./files'), [
    //   applyTemplates({
    //     ...schema,
    //     ...strings
    //   }),
    //   move(featureShellPath),
    // ]);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.fullName,
        directory: schema.directory ?? './',
        tags: `scope:shell,scope:shared,type:feature`,
        style: 'scss'
      }),
      // mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
      // addImportDeclarationToAppModule(schema, targetLibName, featureShellPath, targetLibName, `./${targetLibName}-routing.module`),
      // addExportDeclarationToAppModule(schema, targetLibName, featureShellPath, targetLibName, `./${targetLibName}-routing.module`),
    ])
  }
}
