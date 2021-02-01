import * as path from 'path';
import { normalize } from '@angular-devkit/core';
import { getDefaultProjectPath } from './guess-workspace';

export async function getGeneratePath(schema, tree) {
    const cwd = process.cwd();
    switch (true) {
        case schema.project === "global-design-system":
            schema.path = `/libs/global/design-system/src/lib`;
            return schema.path;
        default:
            return getAbsolutePathFromProjectRoot(cwd, schema, tree);
    }
}

export async function getAbsolutePathFromProjectRoot(cwd, schema, tree) {
    const isInAppsOrLibs = cwd.includes('libs') ?? cwd.includes('apps');
    if (isInAppsOrLibs) {
        const folderPath = cwd.includes('libs') ? path.join('libs', cwd.split('libs')[1]) : path.join('apps', cwd.split('apps')[1]);
        schema.path = normalize(folderPath);
        const isGenerateFolderIsType = schema.path.split('/').pop() === schema.type + 's';
        if (isGenerateFolderIsType) {
            schema.path = schema.path.split('/').slice(0, -1).join('/');
        }
    } else {
        schema.path = await getDefaultProjectPath(schema, tree);
    }
    schema.path = normalize(schema.path);
    return schema.path;
}