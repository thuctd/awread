import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addDeclarationToAppModule } from '../../utility/add-import-module';
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
    const directoryLibsPath = normalize(`libs/${schema.directory}`)
    const featureShellName = directoryNoSlash + '-' + schema.fullName.trim();
    const featureShellPath = normalize(`${directoryLibsPath}/${schema.fullName}/src/lib`);
    const targetLibName = `${featureShellName}-routing`
    // adding template
    const parsedPath = parseName(directoryLibsPath, schema.fullName);
    schema.path = parsedPath.path;
    schema.directoryNoSlash = directoryNoSlash;
    schema.type = 'page';
    schema.featureShellName = featureShellName;
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...schema,
        ...strings
      }),
      move(featureShellPath),
    ]);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        name: schema.fullName,
        directory: schema.directory ?? './',
        tags: `scope:shell,scope:shared,type:feature`,
        style: 'scss'
      }),
      externalSchematic('@nrwl/angular', 'component', {
        name: schema.name,
        type: schema.type,
        module: featureShellName,
        project: featureShellName
      }),
      mergeWith(templateSource, MergeStrategy.AllowCreationConflict),
      addDeclarationToAppModule(schema, targetLibName, featureShellPath, featureShellName, `./${featureShellName}-routing.module`),
    ])
  }
}
