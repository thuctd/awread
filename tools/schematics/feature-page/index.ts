import { chain, externalSchematic, SchematicsException, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createFile } from '../../utility/create-file';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // const CUSTOMPATH = 'ui/pages';
    const CUSTOMPATH = 'pages';
    const PREFIX = 'page-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const nameOnly = schema.name.substring(PREFIX.length);
    schema.nameOnly = nameOnly;
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    schema.project = directoryNoSlash + '-feature-' + schema.ui.trim();
    const nameWithDirectory = `${CUSTOMPATH}/${nameOnly}`;
    let defaultPath;
    try {
      defaultPath = await createDefaultPath(tree, schema.project);
    } catch (error) {
      throw new SchematicsException(`project not found ${schema.project}`);
    }
    schema.defaultPath = defaultPath;

    const routingPath = path.join(defaultPath, `${schema.project}-routing.module.ts`);
    console.log('routing exist?', tree.exists(routingPath), defaultPath, `${schema.project}-routing.module.ts`)

    return chain([
      schematic('service', {
        name: nameWithDirectory,
        type: 'power',
        project: schema.project,
      }),
      createEmptyFolder(defaultPath, nameWithDirectory, 'spells'),
    ])
  }
}

function createEmptyFolder(projectPath: string, folderName: string, kindName: string) {
  return createFile(projectPath, folderName, kindName);
}
