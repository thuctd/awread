import { chain, externalSchematic, Rule, SchematicContext, Tree, SchematicsException, noop } from '@angular-devkit/schematics';
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

function checkFileExist(projectPath: string, routingModuleName: string, tree: Tree) {
  const routingPath = path.join(projectPath, `${routingModuleName}.module.ts`);
  console.log('routing exist?', tree.exists(routingPath), projectPath, `${routingModuleName}.module.ts`)
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
    const routingModuleName = `${schema.project}-page`;
    const moduleName = `${CUSTOMPATH}/page-${name}`;
    const defaultPath = await createDefaultPath(tree, schema.project);
    const fullCustomPath = path.join(defaultPath, CUSTOMPATH);
    return chain([
      checkFileExist(fullCustomPath, routingModuleName, tree) ? noop() : externalSchematic('@schematics/angular', 'module', {
        project: schema.project,
        name: `${CUSTOMPATH}/${routingModuleName}`,
        routing: true,
        flat: true,
        module: schema.project
      }),
      externalSchematic('@schematics/angular', 'module', {
        project: schema.project,
        name: moduleName,
        module: routingModuleName,
        route: name
      }),
      emptySectionFolder(fullCustomPath, schema.name),
    ])
  }
}

