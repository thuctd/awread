import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, SchematicsException } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createEmptySection } from '../../utility/create-empty-section';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { componentSetting } from '../../utility/edit-angular-json';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    // const CUSTOMPATH = 'ui/pages';
    const CUSTOMPATH = 'pages';
    const PREFIX = 'page-';
    if (!schema.name.startsWith(`${PREFIX}`) && (schema.name != PREFIX.substring(0, PREFIX.length - 1))) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = `${PREFIX}${schema.name}`;
    };
    const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
    schema.project = directoryNoSlash + '-ui-' + schema.ui.trim();
    const originName = schema.name.substring(PREFIX.length);
    const moduleName = `${CUSTOMPATH}/${originName}`;
    let defaultPath;
    try {
      defaultPath = await createDefaultPath(tree, schema.project);
    } catch (error) {
      throw new SchematicsException(`project not found ${schema.project}`);
    }

    schema.defaultPath = defaultPath;
    const folderNameDesktop = `${moduleName}-desktop`;
    const folderNameMobile = `${moduleName}-mobile`;

    const routingPath = path.join(defaultPath, `${schema.project}-routing.module.ts`);
    // console.log('routing exist?', tree.exists(routingPath), defaultPath, `${schema.project}-routing.module.ts`)

    return chain([
      ...addFeatureRoutingModule(schema, tree, routingPath),

      schematic('module', {
        project: schema.project,
        name: moduleName,
        mode: 'desktop',
        module: schema.project,
        route: originName,
        type: 'page',
        prefix: 'page',
      }),
      createEmptySection(`${defaultPath}/${folderNameDesktop}`),
      schematic('module', {
        project: schema.project,
        name: moduleName,
        mode: 'mobile',
        module: schema.project,
        route: originName,
        type: 'page',
        prefix: 'page',
      }),
      createEmptySection(`${defaultPath}/${folderNameMobile}`),
    ])
  }
}

function addFeatureRoutingModule(schema, tree, routingPath) {
  let rule0;
  let mixRules;
  if (tree.exists(routingPath)) {
    rule0 = noop();
    mixRules = [rule0];
  } else {
    rule0 = schematic('module', {
      project: schema.project,
      name: schema.project,
      routing: true,
      routingOnly: true,
      ui: schema.ui,
      flat: true
    });

    const routingPath = `${schema.defaultPath}/${schema.project}-routing.module`;
    const rootModule = `${schema.defaultPath}/${schema.project}.module`;

    const rule1 = addImportDeclarationToModule(schema, `${schema.project}-routing-module`, rootModule, `./${schema.project}-routing.module`);
    const rule2 = addImportPathToModule(schema, classify('shell-desktop-layout'), routingPath, null, 'shared', true);
    const rule3 = addImportPathToModule(schema, classify('shell-mobile-layout'), routingPath, null, 'shared');
    mixRules = [
      rule0,
      rule1,
      rule2,
      rule3,
      externalSchematic('@schematics/angular', 'component', {
        ...componentSetting,
        name: `layouts/${schema.ui}`,
        type: 'layout',
        module: schema.project,
        project: schema.project,
        export: true
      }),
      addImportPathToModule(schema, classify(`${schema.ui}-layout`), routingPath, `./layouts/${schema.ui}/${schema.ui}.layout`, null, true),
    ];
  }
  return mixRules;
}
