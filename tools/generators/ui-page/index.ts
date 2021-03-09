import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, SchematicsException } from '@angular-devkit/schematics';
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
    const routingModulePath = `${schema.projectRoot}/lib/${schema.project}-routing.module`;
    // console.log('ui-page: schema module', schema);
    return chain([
      addFeatureRoutingModuleAndImportLayoutPath(schema, tree, routingModulePath),
      schematic('module', {
        project: schema.project,
        name: `${schema.type}s/${schema.name}`,
        mode: 'desktop',
        module: schema.project,
        route: schema.name,
        type: schema.type,
        prefix: schema.kind,
        projectRoot: schema.projectRoot
      }),
      schematic('module', {
        project: schema.project,
        name: `${schema.type}s/${schema.name}`,
        mode: 'mobile',
        module: schema.project,
        route: schema.name,
        type: schema.type,
        prefix: schema.kind,
        projectRoot: schema.projectRoot
      }),
    ])
  }
}

function addFeatureRoutingModuleAndImportLayoutPath(schema, tree, routingPath) {
  let rule0;
  let mixRules = [];
  if (!tree.exists(`${routingPath}.ts`)) {
    rule0 = schematic('module', {
      project: schema.project,
      name: schema.project,
      routing: true,
      routingOnly: true,
      ui: schema.ui,
      flat: true,
      projectRoot: schema.projectRoot
    });

    const rootModule = `${schema.projectRoot}/lib/${schema.project}.module`;
    const rule1 = addImportDeclarationToModule(schema, `${schema.project}-routing-module`, rootModule, `./${schema.project}-routing.module`);
    const { rule2, rule3 } = importLayout(schema, routingPath);
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
        export: true,
        inlineStyle: true,
        skipTests: true,
      }),
      addImportPathToModule(schema, classify(`${schema.ui}-layout`), routingPath, `./layouts/${schema.ui}/${schema.ui}.layout`, null, true),
    ];
  }
  return chain(mixRules);
}

function importLayout(schema, routingPath) {
  // NOTE: this is for shared layout import
  const rule2 = addImportPathToModule(schema, classify('shared-desktop-layout'), routingPath, null, 'shared', true);
  const rule3 = addImportPathToModule(schema, classify('shared-mobile-layout'), routingPath, null, 'shared');
  return { rule2, rule3 }
}
