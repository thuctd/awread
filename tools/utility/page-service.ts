import { Tree, noop, SchematicsException } from '@angular-devkit/schematics';
import { buildRelativePath } from '@schematics/angular/utility/find-module';
import { Path, normalize, strings } from '@angular-devkit/core';
import * as ts from 'typescript';
import { addGlobal, getNpmScope, insert, RemoveChange } from '@nrwl/workspace';
import { getSourceNodes, InsertChange, insertImport, ReplaceChange } from '@nrwl/workspace/src/utils/ast-utils';
import { classify } from '@nrwl/workspace/src/utils/strings';
import { removeImport } from './ast-utils';
import { Change } from '@nrwl/workspace/src/core/file-utils';
import { buildAliasFromProjectRoot } from './build-alias-from-project-root';

export function addPageService(tree: Tree, schema) {
  const path = `${schema.path}/${schema.name}/${schema.name}.${schema.type}.ts`;
  const pagePathNotExistYet = !tree.exists(path);
  if (schema.type && schema.mode && pagePathNotExistYet) {

    tree.create(path, `import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ${classify(schema.name) + classify(schema.type)} implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}`)
  }

  return schema.type && schema.mode ? [
    updateDesktopAndMobilePage(tree, schema),
  ] : [noop()]
}

function buildPathRelative(schema) {
  // /libs/writer/web/ui-auth/src/lib/register/pages/register-desktop/register-desktop.page.ts
  const writeToFilePath = `${schema.projectRoot}/lib/${schema.name}-${schema.mode}/${schema.name}-${schema.mode}.${schema.type}.ts`;
  // /libs/writer/web/ui-auth/src/lib/register/pages/register/register.page
  // do not have .ts to get relative path
  const implementPath = `${schema.projectRoot}/lib/${schema.name}/${schema.name}.${schema.type}`;
  // libs/writer/web/shared/src/lib/layouts/shell-desktop/shell-desktop.layout.ts
  // libs/writer/web/shared/src/lib/layouts/shell/shell.layout
  const relativePath = buildRelativePath(writeToFilePath, implementPath);
  // console.log('is that module is exist', writeToPath, host.exists(writeToPath));
  return relativePath;
}


function updateDesktopAndMobilePage(tree, schema) {
  return (host: Tree) => {
    if (!schema.mode) {
      return host;
    }

    const writeToFilePath = `${schema.path}/${schema.name}-${schema.mode}/${schema.name}-${schema.mode}.${schema.type}.ts`;
    const relativePath = schema.importPageAbsolute ? buildAliasFromProjectRoot(schema, tree) : buildPathRelative(schema);
    const text = host.read(writeToFilePath);
    if (text === null) {
      // throw new SchematicsException(`File ${writeToFilePath} does not exist.`);
      console.warn(`File ${writeToFilePath} does not exist.`);
      return tree;
    }
    const sourceText = text.toString();
    const source = ts.createSourceFile(writeToFilePath, sourceText, ts.ScriptTarget.Latest, true);
    let nodes = getSourceNodes(source);

    const insertImportSymbol = insertImport(source,
      writeToFilePath,
      strings.classify(`${schema.name}-${schema.type}`),
      relativePath);

    const renewClass = replaceConstructorForInjection(nodes, classify(`${schema.name}-${schema.mode}-${schema.type}`), writeToFilePath, classify(`${schema.name}-${schema.type}`));
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


