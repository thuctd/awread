import { updateWorkspaceInTree } from "@nrwl/workspace";

export function editArchitectStorybookLibrary(projectName) {
    return updateWorkspaceInTree((json) => {
        const p = json.projects[projectName];
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
        return json;
    });
}