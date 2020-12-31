import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, SchematicsException } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { componentSetting } from '../../utility/edit-angular-json';
import { guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    schema = await guessProjectToSchema(tree, schema, context);
    return async (tree: Tree, context: SchematicContext) => {
      const actions = schema.list.split(',').map(name => singleAction(schema, context, name))
      return chain([
        ...actions
      ])
    }
  }
}

function singleAction(schema, context, name) {
  return async (tree) => {
    schema.name = name;
    const routingModulePath = path.join(schema.projectRoot, `${schema.project}-routing.module.ts`);

    return chain([
      ...addFeatureRoutingModule(schema, tree, routingModulePath),
      schematic('module', {
        project: schema.project,
        name: `${schema.kind}s/${schema.name}`,
        mode: 'desktop',
        module: schema.project,
        route: schema.name,
        type: schema.kind,
        prefix: schema.kind,
      }),
      schematic('module', {
        project: schema.project,
        name: `${schema.kind}s/${schema.name}`,
        mode: 'mobile',
        module: schema.project,
        route: schema.name,
        type: schema.kind,
        prefix: schema.kind,
      }),
    ])
  }
}

function addFeatureRoutingModule(schema, tree, routingPath) {
  let rule0;
  let mixRules = [];
  if (!tree.exists(routingPath)) {
    rule0 = schematic('module', {
      project: schema.project,
      name: schema.project,
      routing: true,
      routingOnly: true,
      ui: schema.ui,
      flat: true
    });

    const rootModule = `${schema.projectRoot}/${schema.project}.module`;
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
