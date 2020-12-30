import {
  chain, externalSchematic, Rule, SchematicContext, Tree, schematic, noop, apply, url, template,
  branchAndMerge, mergeWith, move
} from '@angular-devkit/schematics';

export function addRouterOutlet(usingLayout: boolean, schema, targetName, customContent = '\n<router-outlet></router-outlet>') {
  return (tree: Tree) => {
    const path = usingLayout ? `${schema.projectRoot}/lib/layouts/${targetName}/${targetName}.layout.html` : `${schema.projectRoot}/${schema.projectType === 'application' ? 'app' : 'lib'}/${targetName}.html`;
    let sharedLayout = tree.read(path);
    if (sharedLayout != null) {
      let newData = sharedLayout.toString() + customContent;
      tree.overwrite(path, newData);
    }

    // PART III: console.log to see the changes
    const afterInsertContent = tree.get(path)?.content.toString();
    // console.log('change result:', afterInsertContent);

    return tree;
  }
}
