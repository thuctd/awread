import { chain, externalSchematic, Rule, SchematicContext, Tree, SchematicsException, schematic } from '@angular-devkit/schematics';
import { modifyEslint, appAndLibSetting } from '../../utility/edit-angular-json';
import { dasherize } from '@nrwl/workspace/src/utils/strings';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    if (!schema.directory?.length) {
      throw new SchematicsException(`directory (${schema.directory}) is not valid, it must have length`);
    }
    return chain([
      ...domainDeviceVersion(schema, 'web'),
      ...domainDeviceVersion(schema, 'phone'),
      modifyEslint(),
      schematic('global', {
        name: 'global',
      }),
      tree => {
        const f = JSON.parse(tree.read('angular.json').toString('utf-8'));
        const readerWeb = Object.keys(f.projects['reader-web'].architect);
        return tree;
      }
    ]);
  }
}

function domainDeviceVersion(schema, deviceVersion: 'web' | 'phone') {
  const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
  const domainName = dasherize(directoryNoSlash + '-' + deviceVersion);
  const directory = schema.directory + '/' + deviceVersion;

  const chain = [
    externalSchematic('@nrwl/angular', 'app', {
      ...appAndLibSetting,
      name: deviceVersion,
      directory: schema.directory,
      routing: false,
      strict: true,
      tags: `scope:shared,type:app`,
    }),
    schematic('shell', {
      application: domainName,
      directory,
    }),
    schematic('shared', {
      directory,
    }),
    (tree: Tree) => {
      tree.delete(`${directory}/assets/.gitkeep`);
      tree.delete(`${directory}/environments/environment.prod.ts`);
      tree.delete(`${directory}/environments/environment.ts`);
      return tree;
    }
  ];
  return chain;
}
