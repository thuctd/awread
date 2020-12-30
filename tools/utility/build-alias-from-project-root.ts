import { getNpmScope } from "@nrwl/workspace";

export function buildAliasFromProjectRoot(schema, tree) {
    const workspaceName = getNpmScope(tree);
    const projectRoot = schema.projectRoot.split('/');
    projectRoot.pop();
    if (projectRoot[0] === 'apps' || projectRoot[0] === 'libs') {
        projectRoot.pop();
    }
    projectRoot.shift();
    // console.log('alias', projectRoot, schema.projectRoot);
    return `@${workspaceName}/${projectRoot.join('/')}`
}   