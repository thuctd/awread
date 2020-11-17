import { chain, externalSchematic, Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
import * as path from 'path';
import * as fs from 'fs';
import { workspace } from '@angular-devkit/core/src/experimental';


function getProject(schema: any, tree: Tree, context: SchematicContext) {
  // Read `angular.json` as buffer
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Could not find an Angular workspace configuration');
  }
  // parse config only when not null
  const workspaceConfig: workspace.WorkspaceSchema = JSON.parse(workspaceConfigBuffer.toString());
  // if project is not passed (--project), use default project name
  if (!schema.project && workspaceConfig.defaultProject) {
    schema.project = workspaceConfig.defaultProject;
  }
  const projectName = schema.project as string;
  // elect project from projects array in `angular.json` file
  const project: workspace.WorkspaceProject = workspaceConfig.projects[projectName];
  if (!project) {
    throw new SchematicsException(`Project ${projectName} is not defined in this workspace.`);
  }
  return project;
}

function emptySectionFolder(schema: any, CUSTOMPATH) {
  return (tree: Tree, context: SchematicContext) => {
    const project = getProject(schema, tree, context);
    const filePath = path.join(
      project.sourceRoot,
      'lib',
      CUSTOMPATH,
      'sections',
      '.gitkeep'
    );
    tree.create(filePath, ``);
    return tree;
  }
}

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // const project = getProject(schema, tree, context)
    // console.log('libPath', project.sourceRoot);
    // const libPath = project.sourceRoot; // process.cwd()
    const CUSTOMPATH = 'ui/pages';
    const PREFIX = 'page-';
    if (!schema.name.startsWith('page-') && (schema.name != 'page')) {
      // custom libraries managing state must have name conventions: 'state' or 'state-<name>'
      schema.name = PREFIX + schema.name;
    };
    const name = schema.name.substring(PREFIX.length);
    const routingModuleName = `${schema.project}-page`;
    const moduleName = `${CUSTOMPATH}/page-${name}`;
    // console.log("moduleName, componentName", moduleName, name)
    // console.log("schema.name, name, schema", schema.name, name, schema)
    return chain([
      externalSchematic('@schematics/angular', 'module', {
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
      emptySectionFolder(schema, moduleName),
    ])
  }
}

