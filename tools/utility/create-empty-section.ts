import { SchematicContext, Tree, } from '@angular-devkit/schematics';
import * as path from 'path';

export function createEmptySection(projectPath: string) {
  return (tree: Tree, context: SchematicContext) => {
    const filePath = path.join(
      projectPath,
      'sections',
      '.gitkeep'
    );
    tree.create(filePath, ``);
    return tree;
  }
}
