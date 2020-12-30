
import { buildRelativePath } from '@schematics/angular/utility/find-module';

function buildRelativeFilePath(schema) {
    // /libs/writer/web/ui-auth/src/lib/register/pages/register-desktop/register-desktop.page.ts
    const writeToFilePath = `${schema.path}/${schema.name}-${schema.mode}/${schema.name}-${schema.mode}.${schema.type}.ts`;
    // /libs/writer/web/ui-auth/src/lib/register/pages/register/register.page
    // do not have .ts to get relative path
    const implementPath = `${schema.path}/${schema.name}/${schema.name}.${schema.type}`;
    // libs/writer/web/shared/src/lib/layouts/shell-desktop/shell-desktop.layout.ts
    // libs/writer/web/shared/src/lib/layouts/shell/shell.layout
    const relativePath = buildRelativePath(writeToFilePath, implementPath);
    // console.log('is that module is exist', writeToPath, host.exists(writeToPath));
    return relativePath;
}