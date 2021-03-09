import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { createSharedLibrary, createFiles, updateFiles, appAndLibSetting } from '../../utility/edit-angular-json';

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
        ...appAndLibSetting,
        name: 'assets',
        directory: schema.name,
        tags: `scope:shared,type:assets`,
      }),
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: 'styles',
        directory: schema.name,
        tags: `scope:shared,type:styles`,
      }),
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: 'environments',
        directory: schema.name,
        tags: `scope:shared,type:environments`,
      }),
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: 'core',
        directory: schema.name,
        tags: `scope:shared,type:core`,
      }),
      createSharedLibrary(),
      createFiles(),
    ])
  }
}
