import {
  chain, externalSchematic, Rule, SchematicContext, Tree
} from '@angular-devkit/schematics';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { insertCustomCode } from '../../utility/insert-custom-code';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { getShellModuleData } from '../../utility/import-to-shell-module';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { exportToLibIndex } from '../../utility/export-to-index';
import { addPageService } from '../../utility/page-service';
import { getProjectPath } from '../../utility/get-project-path';
import { FileModule } from '../../utility/file-module.type';
import { insertRoutes } from '../../utility/insert-routes';
import { appAndLibSetting, componentSetting } from '../../utility/edit-angular-json';
import { createPageLazy } from '../../utility/create-page-lazy';
import { guessProjectToSchema, getWorkspaceName } from '../../utility/guess-workspace';
import { prepareCurrentModule } from '../../utility/prepare-data';


export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const workspaceName = getWorkspaceName(tree);
    const currentModule = prepareCurrentModule(schema);
    const shellModule = await getShellModuleData(tree, schema);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
      }),
      insertCustomCode(currentModule.path, `\ndeclare const window: Window & {haveMobile: boolean};\nwindow.haveMobile = ${schema.haveMobile};`),
      addImportDeclarationToModule(schema, 'RouterModule', currentModule.path, '@angular/router'),
      addExportDeclarationToModule(schema, 'RouterModule', currentModule.path, '@angular/router'),
      externalSchematic('@nrwl/angular', 'component', {
        ...componentSetting,
        name: `layouts/shell-desktop`,
        type: 'layout',
        module: schema.project,
        project: schema.project,
        export: true
      }),
      addRouterOutlet(true, schema.projectRoot, 'shell-desktop'),
      ...addPageService(tree, { ...schema, originName: 'shell', path: `${schema.projectRoot}/layouts`, mode: 'desktop' }),
      externalSchematic('@nrwl/angular', 'component', {
        ...componentSetting,
        name: `layouts/shell-mobile`,
        type: 'layout',
        module: schema.project,
        project: schema.project,
        export: true
      }),
      addRouterOutlet(true, schema.projectRoot, 'shell-mobile'),
      ...addPageService(tree, { ...schema, originName: 'shell', path: `${schema.projectRoot}/layouts`, mode: 'mobile' }),
      exportToLibIndex(schema.projectRoot, `export * from './lib/layouts/shell-desktop/shell-desktop.layout';`),
      exportToLibIndex(schema.projectRoot, `export * from './lib/layouts/shell-mobile/shell-mobile.layout';`),
      ...createNotFoundPage(schema, currentModule),
      ...insertNotFound(schema, shellModule, currentModule.name)
    ])
  }
}



export function createNotFoundPage(schema, currentModule: { name: string, path: string }) {
  return createPageLazy(schema, 'not-found', currentModule);
}

export function insertNotFound(schema, shellModule: FileModule, currentModuleName) {
  const notFoundAbsolutePath = getProjectPath(schema.directory, 'shared');
  const NotFoundModuleName = 'NotFound';
  // this line can enable in below
  // \ndeclare const window: any;\nwindow.haveMobile = ${schema.haveMobile};
  const routes = `
declare const window: Window & {haveMobile: boolean};

const routes: Routes = [
{
  path: '',
  component: window.innerWidth <= 768 && window?.haveMobile ? ShellMobileLayout : ShellDesktopLayout,
  children: [
    {
      path: 'not-found', component: ${NotFoundModuleName}Page
    },
    { path: '**', pathMatch: 'full', redirectTo: 'not-found'}
  ]
}
];`;
  const addDesktopImport = addImportPathToModule(schema, classify('shell-desktop-layout'), shellModule.filePath, null, 'shared', true);
  const addMobileImport = addImportPathToModule(schema, classify('shell-mobile-layout'), shellModule.filePath, null, 'shared');
  const addNotFoundImport = addImportPathToModule(schema, classify(`${NotFoundModuleName}-page`), shellModule.filePath, null, 'shared');
  return [
    addImportDeclarationToModule(schema, `${currentModuleName}-module`, shellModule.filePath, notFoundAbsolutePath),
    addDesktopImport,
    addMobileImport,
    addNotFoundImport,
    ...insertRoutes(schema, shellModule, routes),
  ]
}
