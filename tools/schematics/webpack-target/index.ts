import type { workspaces } from '@angular-devkit/core';
import type { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { updateWorkspaceInTree } from '@nrwl/workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    return updateWorkspaceInTree((config, context, host: Tree) => {
      const appProjects: Array<Record<string, any>> = [];
      Object.keys(config.projects).forEach((name) => {
        const p = config.projects[name];
        if (p.projectType === "application") {
          const isAngular = p.architect.build?.builder.includes('angular');
          const isHaveBuildConfiguration = p.architect.build?.configurations;
          if (isAngular && isHaveBuildConfiguration) {
            appProjects.push(p);
          }
        }
      });
      appProjects.forEach((p) => {
        const buildTarget = p.architect['build'];
        const serveTarget = p.architect['serve'];

        serveTarget.builder = '@angular-builders/custom-webpack:dev-server';
        buildTarget.builder = '@angular-builders/custom-webpack:browser';
        buildTarget.options.customWebpackConfig = {
          path: 'webpack.config.js',
        };
      });

      return config
    })
  }
}
