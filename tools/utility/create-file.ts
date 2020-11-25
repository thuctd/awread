
import { chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop } from '@angular-devkit/schematics';
import * as path from 'path';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { classify } from '@nrwl/workspace/src/utils/strings';

export function createFile(projectPath: string, folderName: string, kindName: string, fileName = '.gitkeep', fileContent = ``) {
  return (tree: Tree, context: SchematicContext) => {
    const filePath = path.join(
      projectPath,
      folderName,
      kindName,
      fileName
    );
    tree.create(filePath, fileContent);
    return tree;
  }
}
