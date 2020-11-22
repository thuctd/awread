import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { classify } from '@nrwl/workspace/src/utils/strings';

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
    schema.defaultPath = defaultPath;
    const folderNameDesktop = `${moduleName}-desktop`;
    const folderNameMobile = `${moduleName}-mobile`;

    const routingPath = path.join(defaultPath, `${schema.project}-routing.module.ts`);
    console.log('routing exist?', tree.exists(routingPath), defaultPath, `${schema.project}-routing.module.ts`)

    return chain([
      ...addFeatureRoutingModule(schema, tree, routingPath),
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

function addFeatureRoutingModule(schema, tree, routingPath) {
  const rule1 = checkRoutingFileExist(tree, routingPath) ? noop() : schematic('module', {
    project: schema.project,
    name: schema.project,
    routing: true,
    routingOnly: true,
    flat: true,
    module: schema.project
  });

  const rule2 = addImportPathToModule(schema, classify('desktop-shell-layout'), schema.defaultPath, `${schema.project}-routing`, null, 'shared');
  const rule3 = addImportPathToModule(schema, classify('mobile-shell-layout'), schema.defaultPath, `${schema.project}-routing`, null, 'shared');
  const mixRule = schema.routingOnly ? [rule2, rule3] : [];
  return [rule1, ...mixRule];
}


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

function checkRoutingFileExist(tree: Tree, routingPath: string) {
  return tree.exists(routingPath);
}
