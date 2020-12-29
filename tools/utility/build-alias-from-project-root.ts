import { getNpmScope } from "@nrwl/workspace";

export function buildAliasFromProjectRoot(schema, tree) {
    const workspaceName = getNpmScope(tree);
    const projectRoot = schema.projectRoot.split('/');
    projectRoot.pop();
    projectRoot.shift();
    return `@${workspaceName}/${projectRoot.join('/')}`
}   