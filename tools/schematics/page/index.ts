import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';

function emptySectionFolder(projectPath: string, folderName: string) {
  return (tree: Tree, context: SchematicContext) => {

    const filePath = path.join(
      projectPath,
      folderName,
      'sections',
      '.gitkeep'
    );
    tree.create(filePath, ``);
    return tree;
  }
}

function checkRoutingFileExist(projectPath: string, routingModuleName: string, tree: Tree) {
  const routingPath = path.join(projectPath, `${routingModuleName}-routing.module.ts`);
  console.log('routing exist?', tree.exists(routingPath), projectPath, `${routingModuleName}-routing.module.ts`)
  return tree.exists(routingPath);
}

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // const CUSTOMPATH = 'ui/pages';
    const CUSTOMPATH = 'pages';
    const PREFIX = 'page-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const name = schema.name.substring(PREFIX.length);
    const moduleName = `${CUSTOMPATH}/${name}`;
    const defaultPath = await createDefaultPath(tree, schema.project);
    const folderNameDesktop = `${moduleName}-desktop`;
    const folderNameMobile = `${moduleName}-mobile`;
    return chain([
      checkRoutingFileExist(defaultPath, schema.project, tree) ? noop() : schematic('module', {
        project: schema.project,
        name: schema.project,
        routing: true,
        routingOnly: true,
        flat: true,
        module: schema.project
      }),
      schematic('module', {
        project: schema.project,
        name: moduleName,
        mode: 'desktop',
        module: schema.project,
        route: name,
        type: 'page',
        prefix: 'page'
      }),
      emptySectionFolder(defaultPath, folderNameDesktop),
      schematic('module', {
        project: schema.project,
        name: moduleName,
        mode: 'mobile',
        module: schema.project,
        route: name,
        type: 'page',
        prefix: 'page'
      }),
      emptySectionFolder(defaultPath, folderNameMobile),
    ])
  }
}

