import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move, MergeStrategy, applyTemplates, SchematicsException
} from '@angular-devkit/schematics';


import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import * as path from 'path';
import { addGlobal, getNpmScope, insert, RemoveChange } from '@nrwl/workspace';
import { getSourceNodes, InsertChange, insertImport, ReplaceChange } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { createEmptySection } from './create-empty-section';
import { exportToLibIndex } from './export-to-index';
import { insertCustomCode } from './insert-custom-code';
import { addImportDeclarationToModule, addImportPathToModule } from './add-import-module';
import { removeImport } from './ast-utils';
import { Change } from '@nrwl/workspace/src/core/file-utils';

export function addPageService(tree: Tree, schema) {
  const path = `${schema.path}/${schema.originName}/${schema.originName}.${schema.type}.ts`;
  if (schema.type && schema.mode && !tree.exists(path)) {

    tree.create(path, `import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ${classify(schema.originName) + classify(schema.type)} implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}`)
  }

  return schema.type && schema.mode ? [
    updateDesktopAndMobilePage(tree, schema),
  ] : [noop()]
}


function updateDesktopAndMobilePage(tree, schema) {
  return (host: Tree) => {
    if (!schema.mode) {
      return host;
    }
    const workspaceName = getNpmScope(tree);
    const writeToFilePath = `${schema.path}/${schema.originName}-${schema.mode}/${schema.originName}-${schema.mode}.${schema.type}.ts`;
    const relativePath = `@${workspaceName}`;
    const text = host.read(writeToFilePath);
    if (text === null) {
      throw new SchematicsException(`File ${writeToFilePath} does not exist.`);
    }
    const sourceText = text.toString();
    const source = ts.createSourceFile(writeToFilePath, sourceText, ts.ScriptTarget.Latest, true);
    let nodes = getSourceNodes(source);

    const insertImportSymbol = insertImport(source,
      writeToFilePath,
      strings.classify(`${schema.originName}-${schema.type}`),
      relativePath);

    const renewClass = replaceConstructorForInjection(nodes, classify(`${schema.originName}-${schema.mode}-${schema.type}`), writeToFilePath, classify(`${schema.originName}-${schema.type}`));
    const removeImportOnInit = removeImport(source, writeToFilePath, classify('OnInit'));
    const changes = [insertImportSymbol, renewClass, removeImportOnInit];

    const recorder = host.beginUpdate(writeToFilePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      } else if (change instanceof RemoveChange) {
        recorder.remove(change.pos, change.toRemove.length);
      } else if (change instanceof ReplaceChange) {
        recorder.remove(change.pos, change.oldText.length);
        recorder.insertLeft(change.pos, change.newText);
      }
    }
    host.commitUpdate(recorder);

    // PART III: console.log to see the changes
    const afterInsertContent = host.get(writeToFilePath)?.content.toString();

    return host;
  };
}

function replaceConstructorForInjection(nodes: ts.Node[], writeToName: string, writeToPath: string, symbolName: string): Change {
  let classNode = nodes.find(n => n.kind === ts.SyntaxKind.ClassKeyword);

  if (!classNode) {
    throw new SchematicsException(`expected class in <span class="hljs-subst" > ${writeToPath} < /span>`);
  }

  if (!classNode.parent) {
    throw new SchematicsException(`expected constructor in <span class="hljs-subst" > ${writeToPath} < /span> to have a parent node`);
  }

  let siblings = classNode.parent.getChildren();
  let classIndex = siblings.indexOf(classNode);

  siblings = siblings.slice(classIndex);

  let classIdentifierNode = siblings.find(n => n.kind === ts.SyntaxKind.Identifier);

  if (!classIdentifierNode) {
    throw new SchematicsException(`expected class in <span class="hljs-subst" > ${writeToPath} < /span> to have an identifier`);
  }

  if (classIdentifierNode.getText() !== writeToName) {
    throw new SchematicsException(`expected first class in <span class="hljs-subst" > ${writeToPath} < /span> to have the name ${writeToName}`);
  }

  // Find opening cury braces (FirstPunctuation means '{' here).
  let curlyNodeIndex = siblings.findIndex(n => n.kind === ts.SyntaxKind.FirstPunctuation);
  let pageNameSymbol = siblings.find(n => n.kind === ts.SyntaxKind.Identifier);
  const oldText = classNode.parent.getText().split(pageNameSymbol.getText())[1];

  let listNode = siblings.find(n => n.kind === ts.SyntaxKind.SyntaxList);

  if (!listNode) {
    throw new SchematicsException(`expected first class in <span class="hljs-subst" > ${writeToPath} < /span> to have a body`);
  }

  let toAdd = ` extends ${symbolName} {}`;
  // return new ReplaceChange(writeToPath, classNode.parent.pos, beforeText, toAdd);
  return new ReplaceChange(writeToPath, pageNameSymbol.end, oldText, toAdd);
}


