node --inspect-brk ./node_modules/nx/bin/nx.js workspace-schematic my-schematic mylib --dry-run
node --inspect-brk ./node_modules/nx/bin/nx.js


Always add shared or shell first, then ui

nx workspace-schematic shared --directory=writer/web
nx workspace-schematic shell --directory=writer/web --project=writer-web 
nx workspace-schematic ui auth --directory=writer/web --pages=login,register
nx workspace-schematic page forgot --directory=writer/web --project=writer-web-ui-auth --ui=auth


nx workspace-schematic feature test --directory=writer/web --pages=one
$ nx workspace-schematic feature-page two --directory=writer/web --project=writer-web-feature-test --feature=auth

nx g lib global 
