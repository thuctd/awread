import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop
} from '@angular-devkit/schematics';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { guessProjectToSchema } from '../../utility/guess-workspace';
import { prepareCurrentModule } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    await prepareCurrentModule(schema, context);
    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: `${schema.kind}-${schema.name}`,
        directory: schema.directory ?? './',
        tags: `scope:${schema.kind}-${schema.name},scope:shared,type:${schema.kind}`,
        style: 'scss'
      }),
      ...addPage(schema, schema.name),
      addFeatureToUi(schema, schema.project),
    ])
  }
}

function addFeatureToUi(schema, featureProject) {
  return (tree: Tree) => {
    const uiProjectName = schema.project.replace('feature', 'ui');
    const uiProjectRoot = schema.projectRoot.replace('feature', 'ui');
    const uiPath = `${uiProjectRoot}/${uiProjectName}.module.ts`;
    if (tree.exists(uiPath)) {
      return chain([
        addImportDeclarationToModule(schema, `${featureProject}-module`, uiPath)
      ]);
    }
    return chain([
      noop()
    ]);
  }
}

export function addPage(schema, featureName): Rule[] {
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('feature-page', {
        name: page.trim(),
        kind: 'page'
      })) : [];
  return !pages.length ? [] : pages;
}
