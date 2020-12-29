import {
  chain, externalSchematic, Rule, SchematicContext, Tree, SchematicsException, schematic, noop
} from '@angular-devkit/schematics';
import { modifyEslint, appAndLibSetting } from '../../utility/edit-angular-json';
import { dasherize } from '@nrwl/workspace/src/utils/strings';
import { getProjectConfig, updateWorkspaceInTree } from '@nrwl/workspace';

export default function (schema: any): Rule {
  return async (tree: Tree, context: SchematicContext) => {
    if (!schema.directory?.length) {
      throw new SchematicsException(`directory (${schema.directory}) is not valid, it must have length`);
    }
    return chain([
      ...domainDeviceVersion(schema, 'web'),
      ...domainDeviceVersion(schema, 'phone'),
      modifyEslint(),
      schematic('global', {
        name: 'global',
      }),
    ]);
  }
}

function addProxy(frontendProjectName: string): Rule {
  return (host: Tree, context: SchematicContext) => {
    const projectConfig = getProjectConfig(host, frontendProjectName);
    if (projectConfig.architect && projectConfig.architect.serve) {
      const pathToProxyFile = `${projectConfig.root}/proxy.conf.json`;
      host.create(
        pathToProxyFile,
        JSON.stringify(
          {
            '/api': {
              target: 'http://localhost:3333',
              secure: false,
            },
          },
          null,
          2
        )
      );

      updateWorkspaceInTree((json) => {
        projectConfig.architect.serve.options.proxyConfig = pathToProxyFile;
        json.projects[frontendProjectName] = projectConfig;
        return json;
      })(host, context);
    }
  };
}

function domainDeviceVersion(schema, deviceVersion: 'web' | 'phone') {
  const directoryNoSlash: string = schema.directory.replace(/\//g, '-').trim();
  const domainName = dasherize(directoryNoSlash + '-' + deviceVersion);
  const directory = schema.directory + '/' + deviceVersion;

  const chain = [
    externalSchematic('@nrwl/angular', 'app', {
      ...appAndLibSetting,
      name: deviceVersion,
      directory: schema.directory,
      routing: false,
      strict: true,
      tags: `scope:shared,type:app`,
    }),
    schema.proxy ? addProxy(domainName) : noop(),
    schematic('shell', {
      application: domainName,
      directory,
    }),
    schematic('shared', {
      directory,
    })
  ];
  return chain;
}
