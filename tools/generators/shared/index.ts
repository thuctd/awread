import { chain, externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { addImportDeclarationToModule, addImportPathToModule } from '../../utility/add-import-module';
import { addExportDeclarationToModule } from '../../utility/add-export-module';
import { insertCustomCode } from '../../utility/insert-custom-code';
import { addRouterOutlet } from '../../utility/add-router-outlet';
import { getShellModuleData } from '../../utility/import-to-shell-module';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { addPageService } from '../../utility/page-service';
import { FileModule } from '../../utility/file-module.type';
import { insertRoutes } from '../../utility/insert-routes';
import { appAndLibSetting, componentSetting } from '../../utility/edit-angular-json';
import { createPageLazy } from '../../utility/create-page-lazy';
import { prepareCurrentModule } from '../../utility/prepare-data';
import { buildAliasFromProjectRoot } from '../../utility/build-alias-from-project-root';
import { exportToLibIndex } from '../../utility/export-to-index';
import { addStoryBook } from '../../utility/add-storybook';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    const currentModule = prepareCurrentModule(schema, context);
    const shellModule = await getShellModuleData(tree, schema);

    return chain([
      externalSchematic('@nrwl/angular', 'lib', {
        ...appAndLibSetting,
        name: schema.name,
        directory: schema.directory ?? './',
        tags: `scope:shared`,
      }),
      addStoryBook(schema),
      insertCustomCode(
        currentModule.path,
        `\ndeclare const window: Window & {haveMobile: boolean};\nwindow.haveMobile = ${schema.haveMobile};`
      ),
      addImportDeclarationToModule(
        schema,
        'RouterModule',
        currentModule.path,
        '@angular/router'
      ),
      addExportDeclarationToModule(
        schema,
        'RouterModule',
        currentModule.path,
        '@angular/router'
      ),
      createSharedDeviceVersion(schema, 'desktop'),
      createSharedDeviceVersion(schema, 'mobile'),
      createNotFoundPage(schema),
      ...insertNotFound(tree, schema, shellModule, currentModule.name),
    ]);
  };
}

function createSharedDeviceVersion(
  schema,
  deviceVersion: 'desktop' | 'mobile'
) {
  return (tree) => {
    return chain([
      externalSchematic('@nrwl/angular', 'component', {
        ...componentSetting,
        name: `layouts/shared-${deviceVersion}`,
        type: 'layout',
        module: schema.project,
        project: schema.project,
        export: true,
      }),
      addRouterOutlet(true, schema, `shared-${deviceVersion}`),
      addPageService(tree, {
        ...schema,
        path: `${schema.projectRoot}/lib/layouts`,
        mode: deviceVersion,
      }),
      exportToLibIndex(
        schema.projectType,
        schema.projectRoot,
        `export * from './lib/layouts/shared-${deviceVersion}/shared-${deviceVersion}.layout'`
      ),
    ]);
  };
}

export function createNotFoundPage(schema) {
  return chain([...createPageLazy(schema, 'not-found')]);
}

export function insertNotFound(
  tree,
  schema,
  shellModule: FileModule,
  currentModuleName
) {
  const notFoundAbsolutePath = buildAliasFromProjectRoot(schema, tree);
  const NotFoundModuleName = 'NotFound';
  // this line can enable in below
  // \ndeclare const window: any;\nwindow.haveMobile = ${schema.haveMobile};
  const routes = `
declare const window: Window & {haveMobile: boolean};

const routes: Routes = [
{
  path: '',
  component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
  children: [
    {
      path: 'not-found', component: ${NotFoundModuleName}Page
    },
    { path: '**', pathMatch: 'full', redirectTo: 'not-found'}
  ]
}
];`;
  const addDesktopImport = addImportPathToModule(
    schema,
    classify('shared-desktop-layout'),
    shellModule.filePath,
    null,
    'shared',
    true
  );
  const addMobileImport = addImportPathToModule(
    schema,
    classify('shared-mobile-layout'),
    shellModule.filePath,
    null,
    'shared'
  );
  const addNotFoundImport = addImportPathToModule(
    schema,
    classify(`${NotFoundModuleName}-page`),
    shellModule.filePath,
    null,
    'shared'
  );
  return [
    addImportDeclarationToModule(
      schema,
      `${currentModuleName}-module`,
      shellModule.filePath,
      notFoundAbsolutePath
    ),
    addDesktopImport,
    addMobileImport,
    addNotFoundImport,
    ...insertRoutes(schema, shellModule, routes),
  ];
}
