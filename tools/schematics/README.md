node --inspect-brk ./node_modules/nx/bin/nx.js workspace-schematic my-schematic mylib --dry-run
node --inspect-brk ./node_modules/nx/bin/nx.js

# Generate order
Follow to this order

1) generate application
2) generate global
3) generate share
4) generate shell
5) generate ui and feature

or we can using domain:
1) generate domain
2) generate ui and feature

## Generate Server
nx g @nrwl/nest:app api --directory=backend

## Generate application
nx g app web --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app
other example:
nx g app phone --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app web --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app phone --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app

##  Generate global 
nx workspace-schematic global global

## Generate shell
nx workspace-schematic shell --directory=writer/web --project=writer-web 

## Generate Shared
nx workspace-schematic shared --directory=writer/web

## Generate domain skip 4 step above
nx workspace-schematic domain writer

## Generate ui
nx workspace-schematic ui auth --directory=writer/web --pages=login,register
nx workspace-schematic ui auth --directory=writer/web --pages=login,register

## Generate ui page
nx workspace-schematic page --directory=writer/web --ui=auth forgot

## Generate feature
nx workspace-schematic feature cleaner --directory=writer/web --pages=one

## Add feature page
nx workspace-schematic feature-page --directory=writer/web --feature=cleaner two

## Combo example command:
nx workspace-schematic domain writer && nx workspace-schematic ui auth --directory=writer/web --pages=login,register
