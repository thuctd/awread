import { getNpmScope } from "@nrwl/workspace";

export function buildAliasFromProjectRoot(schema, tree) {
    const workspaceName = getNpmScope(tree);
    const projectRoot = schema.projectRoot.split('/');
    projectRoot.pop();
    projectRoot.shift();
    if (projectRoot[0] === 'apps' || projectRoot[0] === 'libs') {
        projectRoot.shift();
    }
    const result = `@${workspaceName}/${projectRoot.join('/')}`;
    // console.log('alias', projectRoot, schema.projectRoot, result);
    return result;
}   