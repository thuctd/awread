import { chain, noop, Rule, SchematicContext, Tree, schematic } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as pluralize from 'pluralize';
import { exportToFileIndex, exportToLibIndex } from '../../utility/export-to-index';
import { getLastFolder, guessProject, guessProjectToSchema } from '../../utility/guess-workspace';

export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        schema = await guessProjectToSchema(tree, schema, context);
        const generatePath = getGeneratePath(schema);
        const parts = schema.list.length ? schema.list.split(',') : [];
        const generateActions = parts.map(name => fileAction(strings.dasherize(schema.type), strings.dasherize(name), generatePath))

        return chain([
            ...generateActions,
            exportToParentIndex(schema)
        ])
    }
}

function getGeneratePath(schema) {
    if (schema.project === 'global-powers') {
        if (!schema.directory) {
            schema.directory = getLastFolder();
        }
        return `${schema.projectRoot}/lib/${schema.directory}`;
    }
    return `${schema.projectRoot}/lib`;
}

function exportToParentIndex(schema) {
    let exportString = `export * from './lib/${schema.type}s/index'`;
    let exportTo = schema.projectRoot;
    if (schema.directory) {
        exportString = `export * from './${schema.type}s/index'`;
        exportTo = schema.projectRoot + `/lib/${schema.directory}`;
    }
    return ['model', 'facade', 'interface'].includes(schema.type) ?
        exportToLibIndex(schema.projectType, exportTo, exportString, true) :
        noop()
}

export function fileAction(type, name, generatePath) {
    return (tree) => {
        const fileName = `${name}.${type}.ts`;
        const filePath = `${generatePath}/${type}s/${fileName}`;
        const indexPath = `${generatePath}/${type}s/index.ts`;
        return chain([
            addFile(filePath, name, type),
            exportToFileIndex(indexPath, `export * from './${name}.${type}'`)
        ])
    }
}

export function addFile(filePath: string, name: string, type: string) {
    return (tree) => {
        const fileExist = tree.exists(filePath);
        if (type === 'model') {
            tree.create(filePath, `export interface ${pluralize.singular(strings.classify(name))} {
  id: string;
}

export function ${pluralize.singular(strings.classify(name))}(params: Partial<${pluralize.singular(strings.classify(name))}>) {
  return {

  } as ${pluralize.singular(strings.classify(name))};
}`);
            return tree;
        }
        if (type === 'api') {
            tree.create(filePath, `import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";

@Injectable({ providedIn: 'root' })
export class ${strings.classify(name)}${strings.classify(type)} {

  constructor(
    private apollo: Apollo
  ) { }

  get() {
  }

}
`)
            return tree;
        }
        if (!fileExist) {
            tree.create(filePath, `import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ${strings.classify(name)}${strings.classify(type)} {

  constructor(
  ) {
  }

  get() {
  }

}
`)
            return tree;
        }
    }
}
