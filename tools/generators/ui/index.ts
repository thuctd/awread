import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic
} from '@angular-devkit/schematics';
import { addImportDeclarationToModule } from '../../utility/add-import-module';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { addStorybookFile } from '../../utility/edit-angular-json';
import { editArchitectStorybookLibrary } from '../../utility/edit-architect-angular-json';
import { getProject } from '../../utility/guess-workspace';
import { getShellModuleData } from '../../utility/import-to-shell-module';
import { prepareCurrentModule } from '../../utility/prepare-data';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    await prepareCurrentModule(schema, context);
    const shellModule = await getShellModuleData(tree, schema);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        linter: "eslint",
        name: `${schema.kind}-${schema.name}`,
        directory: schema.directory ?? './',
        tags: `scope:${schema.kind}-${schema.name},scope:shared,type:${schema.kind}`,
        style: 'scss'
      }),
      addStorybookFileToUi(schema),
      editArchitectStorybookLibrary(schema.project),
      ...addPage(schema, schema.name),
      addImportDeclarationToModule(schema, `${schema.project}-module`, shellModule.filePath),
      addRouterOutlet(true, schema, schema.name),
      schematic('feature', {
        name: schema.name,
        directory: schema.directory,
        pages: schema.pages
      }),
    ])
  }
}

export function addPage(schema, featureName): Rule[] {
  const pages: Rule[] = schema.pages && schema.pages.length ?
    schema.pages.split(',').map((page: string) =>
      schematic('ui-page', {
        name: page.trim(),
        ui: featureName
      })) : [];
  return !pages.length ? [] : pages;
}

export function addStorybookFileToUi(schema) {
  return async (tree) => {
    const projectName = schema.project;
    const project = await getProject(tree, projectName);
    return chain([
      addStorybookFile(tree, projectName, project)
    ])
  }
}