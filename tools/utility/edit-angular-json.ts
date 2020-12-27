import { getNpmScope, getWorkspace, getWorkspacePath, NxJson, readJsonFile, updateJsonInTree, updateWorkspace, updateWorkspaceInTree } from "@nrwl/workspace";
import { Rule, Tree, SchematicContext, SchematicsException, noop, chain } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { normalize } from "path";
import { insertCustomCode } from "./insert-custom-code";
import { addImportPathToModule } from "./add-import-module";
import myProjectConfig from '../my-project-config.json';
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


function updateFilesAction(angularFile, host) {
  let angularApps: Array<Record<string, any>> = [];
  let rules: any[] = [];
  angularApps = Object.keys(angularFile.projects)
    .map(name => ({ name, project: angularFile.projects[name] }))
    .filter(({ name, project }) => {
      const isApplication = project['projectType'] === "application";
      const isAngular = project.architect.build?.builder.includes('angular');
      return isApplication && isAngular;
    })

  angularApps.forEach(({ name, project }) => {
    try {
      addProjectStylesFolder(host, name);
    } catch (error) {
      console.warn('asset maybe exist', error);
    }
    try {
      addProjectAssetsFolder(host, name);
    } catch (error) {
      console.warn('asset maybe exist', error);
    }
    try {
      updateEnviromentFile(host, name, project);
    } catch (error) {
      console.warn('enviroment maybe exist', error);
    }
    try {
      rules.push(...updateMainFile(host, name, project));
    } catch (error) {
      console.warn('main file maybe exist', error);
    }
    try {
      const isHaveBuildConfiguration = project.architect.build?.configurations;
      if (isHaveBuildConfiguration) {
        updateEnviroment(project, name);
      }
    } catch (error) {
      console.warn('main file maybe exist', error);
    }

  })
  return rules;
}

export function updateFiles() {
  return async (host: Tree) => {
    // host.create(`libs/global/README.md`, '# Global have libs work with all workspace');
    const workspace = await getWorkspace(host, getWorkspacePath(host));
    const angularFile = JSON.parse(host.read('angular.json').toString('utf-8'))
    const rules = updateFilesAction(angularFile, host);
    return chain([
      updateWorkspace(workspace),
      ...rules,
    ])
  }
};

export function createFiles() {
  return async (host: Tree) => {
    // host.create(`libs/global/README.md`, '# Global have libs work with all workspace');
    const workspaceName = getNpmScope(host);
    const workspace = await getWorkspace(host, getWorkspacePath(host));
    const angularFile = JSON.parse(host.read('angular.json').toString('utf-8'))
    host.getDir(`libs/global/styles`).visit(path => host.delete(path));
    addProjectStylesFolder(host, '', `libs/global/styles/src`)

    host.getDir(`libs/global/assets`).visit(path => host.delete(path));
    host.create(`libs/global/assets/README.md`, '# Assets');
    host.create(`libs/global/assets/src/global-assets/fonts/.gitkeep`, ``);
    host.create(`libs/global/assets/src/global-assets/icons/.gitkeep`, ``);
    host.create(`libs/global/assets/src/global-assets/images/.gitkeep`, ``);

    host.overwrite(`libs/global/environments/README.md`, '# Enviroments');
    host.getDir(`libs/global/environments/src/lib`).visit(path => host.delete(path));
    host.create(`libs/global/environments/src/lib/environment.ts`, `export const environment = {
  production: false,
};
`);
    host.create(`libs/global/environments/src/lib/environment.prod.ts`, `export const environment = {
  production: true,
};
`);
    host.create(`libs/global/environments/src/lib/environment.stage.ts`, `export const environment = {
  production: true,
  stage: true,
};
`);
    host.create(`libs/global/environments/src/lib/environment.test.ts`, `export const environment = {
  production: true,
  test: true,
};
`);
    host.overwrite(`libs/global/environments/src/index.ts`, `export * from './lib/environment';`);

    // handle main
    host.create(`libs/global/core/src/lib/main.global.ts`, `import { environment } from '@${workspaceName}/global/environments';

export function customMain() {
  return environment;
}`);
    host.overwrite(`libs/global/core/src/index.ts`,
      host.read(`libs/global/core/src/index.ts`).toString('utf-8') + `\nexport * from './lib/main.global';`
    );

    const rules = updateFilesAction(angularFile, host);
    return chain([
      updateWorkspace(workspace),
      ...rules,
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

export function updateMainFile(host: Tree, name: string, project: any): Rule[] {
  const mainPath = `${project.sourceRoot}/main`;
  if (!mainPath) return [noop()];
  const workspaceName = readJsonFile('package.json').name;
  return [
    insertCustomCode(mainPath, `
customMain();
    `),
    addImportPathToModule(host, 'customMain', mainPath, `@${workspaceName}/global/core`, null, true, false)
  ]
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

export function addProjectStylesFolder(host, projectName, path = `libs/global/styles/src/projects/${projectName}`) {
  const prefix = projectName.length ? `${projectName}-` : '';
  host.create(`${path}/lib/${projectName}vendors.scss`, ``);
  host.create(`${path}/lib/${projectName}fonts.scss`, ``);
  host.create(`${path}/lib/${projectName}variable.scss`, ``);
  host.create(`${path}/lib/${projectName}theme.scss`, ``);
  host.create(`${path}/lib/${projectName}global.scss`, ``);
  host.create(`${path}/${projectName ? projectName : 'index'}.scss`, `
  @import './lib/${projectName}vendors.scss';
  @import './lib/${projectName}fonts.scss';
  @import './lib/${projectName}variable.scss';
  @import './lib/${projectName}theme.scss';
  @import './lib/${projectName}global.scss';
  `);
  // host.create(`${path}/${projectName}material.scss`, ``);
  host.create(`${path}/${projectName}tailwind.scss`, ``);
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
        const isHaveBuildConfiguration = p.architect.build?.configurations;
        if (isAngular) {
          updateAsset(p, projectName);
          updateStyle(p, projectName);
        }
        if (isHaveBuildConfiguration) {
          updateEnviroment(p, projectName);
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

  const projectIndex = `${projectPath}/${projectName}.scss`;
  const projectFile = styles.find(s => s === projectIndex);
  if (!projectFile) {
    p.architect.build.options.styles.push(projectIndex);
  }
}

function updateEnviroment(p, projectName) {
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
}


function updateApplicationArchitect(p, projectName) {
  if (p.architect?.build && p.architect?.build.includes('angular')) {
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
      };
    }
    // add build-storybook
    let buildStorybookTarget = p.architect['storybook'];
    if (!buildStorybookTarget) {
      p.architect['storybook'] = {
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
      };
    }
    // set deploy
    let deployTarget = p.architect['deploy'];
    p.architect['storybook'] = {
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
    };

  }
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



// function updateFile() {
//   return async (host: Tree) => {
//     const workspace = await getWorkspace(host, getWorkspacePath(host));
//     for (const [projectName, projectDefinition] of workspace.projects) {
//       const architects = projectDefinition.targets;
//       for (const [targetName, targetDefination] of architects) {
//         if (targetDefination.builder !== '@nrwl/nx-plugin:e2e') {
//           continue;
//         }
//         const updatedOptions = { ...targetDefination.options };
//         delete updatedOptions.tsSpecConfig;
//         targetDefination.options = updatedOptions;
//       }
//     }
//     return updateWorkspace(workspace);
//   };
// }




// function updateAngularJsonOptions(host, options) {
//   var projectDir = (options.directory || options.name) + '/';
//   var configPath = projectDir + 'angular.json';
//   var workspace = getWorkspace(host, projectDir);

//   if (host.exists(configPath)) {
//     var currentAngularJson = host.read(configPath)!.toString('utf-8');
//     var json = JSON.parse(currentAngularJson);
//     var optionsJson = json['projects'][options.name]['architect']['build']['options'];
//     optionsJson['assets'].push("src/custom1.scss");
//     optionsJson['assets'].push("src/custom2.scss");
//     json['projects'][options.name]['architect']['build']['options'] = optionsJson;
//     host.overwrite(configPath, JSON.stringify(json, null, 2));
//   } else {
//     throw new SchematicsException('angular.json not found at ' + configPath);
//   }
//   return host;
// }

// function removeDeprecatedJestBuilderOptions() {
//   return async (host: Tree) => {
//     const workspace = await getWorkspace(host, getWorkspacePath(host));
//     for (const [, projectDefinition] of workspace.projects) {
//       for (const [, testTarget] of projectDefinition.targets) {
//         if (testTarget.builder !== '@nrwl/nx-plugin:e2e') {
//           continue;
//         }
//         const updatedOptions = { ...testTarget.options };
//         delete updatedOptions.tsSpecConfig;
//         testTarget.options = updatedOptions;
//       }
//     }
//     return updateWorkspace(workspace);
//   };
// }

// function createSharedItem(projectName: string) {
//   return updateWorkspaceInTree((config) => {
//     const filteredProjects: Array<Record<string, any>> = [];
//     Object.keys(config.projects).forEach((name) => {
//       if (
//         config.projects[name].architect &&
//         config.projects[name].architect.e2e &&
//         config.projects[name].architect.e2e.builder ===
//         '@nrwl/cypress:cypress' &&
//         config.projects[name].architect.e2e.options.devServerTarget.endsWith(
//           ':storybook'
//         )
//       ) {
//         filteredProjects.push(config.projects[name]);
//       }
//     });
//     filteredProjects.forEach((p) => {
//       delete p.architect.e2e.options.headless;
//       delete p.architect.e2e.options.watch;
//       delete p.architect.e2e.configurations;
//     });
//     return config;
//   })
// }


// export default function update(): Rule {
//   return chain([removeDeprecatedJestBuilderOptions(), formatFiles()]);
// }
