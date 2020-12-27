import {
    chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
    branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { exportToFileIndex } from '../../utility/export-to-index';
import { guessProject, guessProjectToSchema } from '../../utility/guess-workspace';
const resolve = require('path').resolve;


export default function (schema: any): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        schema = await guessProjectToSchema(tree, schema, context);
        const generatePath = `${schema.projectRoot}/lib`;
        const parts = schema.list.length ? schema.list.split(',') : [];
        const generateActions = parts.map(name => fileAction(strings.dasherize(schema.type), strings.dasherize(name), generatePath))

        return chain([
            ...generateActions
        ])
    }
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
            tree.create(filePath, ` export interface ${strings.classify(name)} {}`);
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
