import { addStorybookFile } from "./edit-angular-json";
import { getProject } from "./guess-workspace";
import { chain } from '@angular-devkit/schematics';

export function addStoryBook(schema) {
    return async (tree) => {
        const projectName = schema.project;
        const project = await getProject(tree, projectName);
        return chain([
            addStorybookFile(tree, projectName, project)
        ])
    }
}