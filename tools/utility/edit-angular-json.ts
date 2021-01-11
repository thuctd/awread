import { getNpmScope, getWorkspace, getWorkspacePath, NxJson, readJsonFile, updateJsonInTree, updateWorkspace, updateWorkspaceInTree } from "@nrwl/workspace";
import { Rule, Tree, SchematicContext, SchematicsException, noop, chain } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { normalize } from "path";
import { insertCustomCode } from "./insert-custom-code";
import { addImportPathToModule } from "./add-import-module";
import { myProjectConfig } from '../my-project-config';

import { ProjectDefinition, ProjectDefinitionCollection } from "@angular-devkit/core/src/workspace/definitions";
import { getProjectsEntries } from "./guess-workspace";
// base on: https://github.com/LayZeeDK/nx-tiny-app-project
// base on: https://indepth.dev/tiny-angular-application-projects-in-nx-workspaces

export const componentSetting = {
  "style": "scss",
  "displayBlock": true,
  "changeDetection": "OnPush"
}

export const appAndLibSetting = {
  "style": "scss",
  "linter": "eslint"
}


async function updateFilesAction(tree) {
  const angularJson = JSON.parse(tree.read('angular.json').toString('utf-8'));
  const projects = angularJson.projects;

  let angularApps: Array<Record<string, any>> = [];
  let rules: Rule[] = [];
  angularApps = Object.keys(projects)
    .map(name => ({ name, project: projects[name] }))
    .filter(({ name, project }: { name: string, project }) => {
      const isApplication = project.projectType === "application";
      const isAngular = project.architect?.build?.builder?.includes('angular');
      return isApplication && isAngular;
    })

  angularApps.forEach(({ name, project }) => {
    const isHaveBuildConfiguration = project.architect.build.configurations;

    try {
      rules.push(addStorybookFile(tree, name, project));
    } catch (error) {
      console.warn(error.message);
    }

    try {
      addProjectStylesFolder(tree, name);
    } catch (error) {
      console.warn(error.message);
    }
    try {
      addProjectAssetsFolder(tree, name);
    } catch (error) {
      console.warn(error.message);
    }
    try {
      updateEnviromentFile(tree, name, project);
    } catch (error) {
      console.warn('update enviromentFile', error.message);
    }

    try {
      rules.push(updateMainFile(tree, name, project));
    } catch (error) {
      console.warn('update main', error.message);
    }

    try {
      if (isHaveBuildConfiguration) {
        // rules.push(updateEnviroment(name));
      }
    } catch (error) {
      console.warn('update enviroment', error.message);
    }

    try {
      if (isHaveBuildConfiguration) {
        rules.push(updateApplicationArchitect(name));
      }
    } catch (error) {
      console.warn('update architect', error.message);
    }
  })
  return { rules };
}

export function updateFiles() {
  return async (tree: Tree) => {
    const { rules } = await updateFilesAction(tree);
    return chain([
      ...rules,
    ])
  }
};

export function createFiles() {
  return async (tree: Tree) => {
    // host.create(`libs/global/README.md`, '# Global have libs work with all workspace');
    const workspaceName = getNpmScope(tree);

    tree.getDir(`libs/global/styles`).visit(path => tree.delete(path));
    addProjectStylesFolder(tree, '', `libs/global/styles/src`)

    tree.getDir(`libs/global/assets`).visit(path => tree.delete(path));
    tree.create(`libs/global/assets/README.md`, '# Assets');
    tree.create(`libs/global/assets/src/global-assets/fonts/.gitkeep`, ``);
    tree.create(`libs/global/assets/src/global-assets/icons/.gitkeep`, ``);
    tree.create(`libs/global/assets/src/global-assets/images/.gitkeep`, ``);

    tree.overwrite(`libs/global/environments/README.md`, '# Enviroments');
    tree.getDir(`libs/global/environments/src/lib`).visit(path => tree.delete(path));
    tree.create(`libs/global/environments/src/lib/environment.ts`, `export const environment = {
  production: false,
};
`);
    tree.create(`libs/global/environments/src/lib/environment.prod.ts`, `export const environment = {
  production: true,
};
`);
    tree.create(`libs/global/environments/src/lib/environment.stage.ts`, `export const environment = {
  production: true,
  stage: true,
};
`);
    tree.create(`libs/global/environments/src/lib/environment.test.ts`, `export const environment = {
  production: true,
  test: true,
};
`);
    tree.overwrite(`libs/global/environments/src/index.ts`, `export * from './lib/environment';`);

    // handle main
    tree.create(`libs/global/core/src/lib/main.global.ts`, `import { environment } from '@${workspaceName}/global/environments';

export function customMain() {
  return environment;
}`);
    tree.overwrite(`libs/global/core/src/index.ts`,
      tree.read(`libs/global/core/src/index.ts`).toString('utf-8') + `\nexport * from './lib/main.global';`
    );

    const { rules } = await updateFilesAction(tree);
    return chain([
      ...rules
    ])
  };
}

export function modifyEslint() {
  return updateJsonInTree('.eslintrc.json', (json) => {
    const workspaceName = readJsonFile('package.json').name;
    // const npmScope = getNpmScope();
    json.overrides[0].rules["no-empty-function"] = "off"
    json.overrides[0].rules["@typescript-eslint/no-empty-function"] = [
      "warn",
      {
        "allow": [
          "methods",
          "constructors"
        ]
      }
    ]
    return json;
  });
}

export function updateMainFile(host: Tree, name: string, project: any): Rule {
  const mainPath = `${project.sourceRoot}/main`;
  if (!mainPath) return chain([noop()]);
  const workspaceName = readJsonFile('package.json').name;
  return chain([
    insertCustomCode(mainPath, `
customMain();
    `),
    addImportPathToModule(host, 'customMain', mainPath, `@${workspaceName}/global/core`, null, true, false)
  ])
}

export function updateEnviromentFile(host: Tree, name: string, project: any) {
  const path = `${project.sourceRoot}/main.ts`;
  const workspaceName = readJsonFile('package.json').name;
  const appEnvironmentPath = `@${workspaceName}/global/environments`;
  const mainBuffer = host.read(normalize(path));
  const mainContent = mainBuffer.toString().replace(`'./environments/environment'`, `'${appEnvironmentPath}'`);
  host.overwrite(path, mainContent);
}

export function addProjectAssetsFolder(host, projectName) {
  host.create(`libs/global/assets/src/projects/${projectName}/assets/fonts/.gitkeep`, ``);
  host.create(`libs/global/assets/src/projects/${projectName}/assets/icons/.gitkeep`, ``);
  host.create(`libs/global/assets/src/projects/${projectName}/assets/images/.gitkeep`, ``);
}

export function addStorybookFile(tree: Tree, projectName, project) {
  const mainPath = `${project.root}/.storybook/main.js`;
  const tsconfigStorybook = `${project.root}/.storybook/tsconfig.json`;
  const directoryRoot = project.root.split('/');
  directoryRoot.pop();
  const isApplication = project.projectType === 'application';
  const isLib = project.projectType === 'library' && projectName.includes('ui');
  const isStorybookExist = tree.exists(mainPath);
  const relativeFolderNumber = project.root.split('/').length;
  if (!isStorybookExist && (isApplication || isLib)) {
    tree.create(mainPath, `const rootMain = require('${`../`.repeat(relativeFolderNumber + 1)}.storybook/main');
rootMain.stories.push(...[
    '${isApplication ? '@libs/' + directoryRoot.join('/') : '../src/lib'}/**/*.stories.mdx',
    '${isApplication ? '@libs/' + directoryRoot.join('/') : '../src/lib'}/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;`);
    tree.create(tsconfigStorybook, `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "emitDecoratorMetadata": true
  },
  "exclude": ["../**/*.spec.ts" ],
  "include": ["../src/**/*"]
}
`);
  }

  const rules = [];
  rules.push(updateJsonInTree(`${project.root}/tsconfig.json`, (json) => {
    const tsconfigStorybookRefs = json.references.find(ref => ref.path.includes('storybook'));
    if (!tsconfigStorybookRefs) {
      json.references.push({
        "path": "./.storybook/tsconfig.json"
      })
    }
    return json;
  }));
  return chain(rules);
}

export function addProjectStylesFolder(host, projectName, path = `libs/global/styles/src/projects/${projectName}`) {
  const prefix = projectName.length ? `${projectName}-` : '';
  host.create(`${path}/index.scss`, ``);
  // host.create(`${path}/lib/${projectName}vendors.scss`, ``);
  // host.create(`${path}/lib/${projectName}fonts.scss`, ``);
  // host.create(`${path}/lib/${projectName}variable.scss`, ``);
  // host.create(`${path}/lib/${projectName}theme.scss`, ``);
  // host.create(`${path}/lib/${projectName}global.scss`, ``);
  // host.create(`${path}/${projectName ? projectName : 'index'}.scss`, `
  // @import './lib/${projectName}vendors.scss';
  // @import './lib/${projectName}fonts.scss';
  // @import './lib/${projectName}variable.scss';
  // @import './lib/${projectName}theme.scss';
  // @import './lib/${projectName}global.scss';
  // `);
}

export function updateGenerator() {
  return updateWorkspaceInTree((config, context, host: Tree) => {

    const appConfig = config.schematics['@schematics/angular:application'] ?? {};
    config.schematics['@schematics/angular:application'] = {
      ...appConfig,
      ...appAndLibSetting
    };
    const libConfig = config.schematics['@schematics/angular:library'] ?? {};
    config.schematics['@schematics/angular:library'] = {
      ...libConfig,
      ...appAndLibSetting
    };

    const angularComponent = config.schematics['@schematics/angular:component'] ?? {};
    config.schematics['@schematics/angular:component'] = {
      ...angularComponent,
      ...componentSetting
    };

    return config;
  })
}

export function createSharedLibrary() {
  return updateWorkspaceInTree((config, context, host: Tree) => {
    const libNames = ['global-assets', 'global-styles'];
    const libProjects: Array<Record<string, any>> = [];
    const appProjects: Array<Record<string, any>> = [];
    const targets: Array<Record<string, any>> = [];
    Object.keys(config.projects).forEach((name) => {
      const p = config.projects[name];
      if (p.projectType === "library") {
        libProjects.push(p);
        if (libNames.includes(name)) targets.push(p);
      } else if (p.projectType === "application") {
        appProjects.push(p);
      }
    });

    resetArchitect(targets);

    Object.keys(config.projects)
      .filter(name => config.projects[name].projectType === "application")
      .forEach((projectName) => {
        const p = config.projects[projectName];
        const isAngular = p.architect.build?.builder.includes('angular');
        if (isAngular) {
          updateAsset(p, projectName);
          updateStyle(p, projectName);
        }
      });

    return config;
  })
}

function resetArchitect(targets) {
  targets.forEach((p) => {
    p.architect = {}; // reset architect
  });
}

function updateAsset(p, projectName) {
  const libRoot = `libs/global/assets/src`;
  const projectPath = `${libRoot}/projects/${projectName}`;
  const assets: Array<Record<string, any>> = p.architect.build.options.assets;
  const globalAsset = assets.find(a => a.output === 'global-assets');
  if (!globalAsset) {
    p.architect.build.options.assets.push({
      "glob": "**/*",
      "input": libRoot + "/global-assets",
      "output": "global-assets"
    });
  }

  const projectAssets = assets.find(a => a.output === 'assets');
  if (!projectAssets) {
    p.architect.build.options.assets.push({
      "glob": "**/*",
      "input": projectPath + "/assets",
      "output": "assets"
    });
  }
}

function updateStyle(p, projectName) {
  const libRoot = `libs/global/styles/src`;
  const projectPath = `${libRoot}/projects/${projectName}`;
  const styles = p.architect.build.options.styles;

  const globalIndex = `${libRoot}/index.scss`;
  const globalFile = styles.find(s => s === globalIndex);
  if (!globalFile) {
    p.architect.build.options.styles.push(globalIndex);
  }

  // const globalMaterial = `${libRoot}/material.scss`;
  // const materialFile = styles.find(s => s === globalMaterial);
  // if (!materialFile) {
  //   p.architect.build.options.styles.push(globalMaterial);
  // }

  const globalTailwind = `${libRoot}/tailwind.scss`;
  const tailwindFile = styles.find(s => s === globalTailwind);
  if (!tailwindFile) {
    p.architect.build.options.styles.push(globalTailwind);
  }

  // const projectIndex = `${projectPath}/${projectName}.scss`;
  const projectIndex = `${projectPath}/index.scss`;
  const projectFile = styles.find(s => s === projectIndex);
  if (!projectFile) {
    p.architect.build.options.styles.push(projectIndex);
  }
}

function updateEnviroment(projectName) {
  return updateWorkspaceInTree((json) => {
    const p = json.projects[projectName];
    const libRoot = `libs/global/environments/src`;
    const projectPath = `${libRoot}/${projectName}`;
    p.architect.build.configurations.production.fileReplacements = [];
    p.architect.build.configurations.production.fileReplacements.push({
      "replace": libRoot + "/lib/environment.ts",
      "with": libRoot + "/lib/environment.prod.ts"
    });
    p.architect.build.configurations.stage = {
      ...p.architect.build.configurations.production,
      fileReplacements: [
        {
          "replace": libRoot + "/lib/environment.ts",
          "with": libRoot + "/lib/environment.stage.ts"
        }
      ]
    };
    p.architect.build.configurations.test = {
      ...p.architect.build.configurations.production,
      fileReplacements: [
        {
          "replace": libRoot + "/lib/environment.ts",
          "with": libRoot + "/lib/environment.test.ts"
        }
      ]
    };
    if (p.architect.serve.configurations?.production) {
      const buildPrefix = p.architect.serve.configurations.production.browserTarget.split(":");
      buildPrefix.pop();
      const stageData = p.architect.serve.configurations['stage'] ?? {};
      p.architect.serve.configurations['stage'] = {
        ...stageData,
        browserTarget: `${buildPrefix.join(':')}:stage`
      }
      const testData = p.architect.serve.configurations['stage'] ?? {};
      p.architect.serve.configurations['test'] = {
        ...testData,
        browserTarget: `${buildPrefix.join(':')}:test`
      }
    }
    return json;
  });
}


function updateApplicationArchitect(projectName) {
  return updateWorkspaceInTree((json) => {
    const p = json.projects[projectName];
    // using custom webpack for tailwind
    const buildTarget = p.architect['build'];
    const serveTarget = p.architect['serve'];
    serveTarget.builder = '@angular-builders/custom-webpack:dev-server';
    buildTarget.builder = '@angular-builders/custom-webpack:browser';
    buildTarget.options.customWebpackConfig = {
      path: 'webpack.config.js',
    };
    // add storybook
    let storybookTarget = p.architect['storybook'];
    if (!storybookTarget) {
      p.architect['storybook'] = {
        "builder": "@nrwl/storybook:storybook",
        "options": {
          "uiFramework": "@storybook/angular",
          "port": 4400,
          "config": {
            "configFolder": p.root + "/.storybook"
          }
        },
        "configurations": {
          "ci": {
            "quiet": true
          }
        }
      }
    }
    // add build-storybook
    let buildStorybookTarget = p.architect['build-storybook'];
    if (!buildStorybookTarget) {
      p.architect['build-storybook'] = {
        "builder": "@nrwl/storybook:build",
        "options": {
          "uiFramework": "@storybook/angular",
          "outputPath": "dist/storybook/" + projectName,
          "config": {
            "configFolder": p.root + "/.storybook"
          }
        },
        "configurations": {
          "ci": {
            "quiet": true
          }
        }
      }
    }
    // set deploy
    // console.log('myProjectConfig', myProjectConfig);
    let deployTarget = p.architect['deploy'];
    if (!deployTarget) {
      p.architect['deploy'] = {
        "builder": "@angular/fire:deploy",
        "options": {
          "buildTarget": projectName + ":build",
          "firebaseProject": myProjectConfig.firebase.developmentProject
        },
        "configurations": {
          "production": {
            "buildTarget": projectName + ":build",
            "firebaseProject": myProjectConfig.firebase.productionProject
          },
          "storybook": {
            "buildTarget": projectName + ":build-storybook",
            "firebaseProject": myProjectConfig.firebase.developmentProject,
            "siteTarget": projectName + "-story"
          }
        }
      }
    }
    return json;
  });
}

function updateImplicit(projectName) {
  return updateJsonInTree<NxJson>('nx.json', (json) => {
    Object.keys(json.projects).forEach((name) => {
      const project = json.projects[name];
      const previous = project.implicitDependencies ?? [];
      if (name === projectName) {
        project.implicitDependencies = [
          ...previous,
          "global-assets",
          "global-styles"
        ]
      }
    });

    return json;
  });
}
