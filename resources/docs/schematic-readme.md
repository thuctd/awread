node --inspect-brk ./node_modules/nx/bin/nx.js workspace-schematic my-schematic mylib --dry-run
node --inspect-brk ./node_modules/nx/bin/nx.js
nx g @nrwl/angular:storybook-configuration project-name

## Generate Server

nx g @nrwl/nest:app api --directory=backend
nx g lib api-interfaces --directory=backend

# Generate order

Follow to this order

nx workspace-generator generator

1. generate application
2. generate global
3. generate shell
4. generate share
5. generate ui and feature

or we can using domain:

1. generate domain
2. generate ui and feature

## Generate application

nx g app web --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app
other example:
nx g app phone --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app web --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app phone --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app

## Generate global

nx workspace-generator global global

## Generate shell

nx workspace-generator shell --directory=writer/web --project=writer-web

## Generate Shared

nx workspace-generator shared --directory=writer/web

## Generate domain skip 4 step above

nx workspace-generator domain writer

## Generate ui with multi pages (only work at the first time create library)

nx workspace-generator ui auth --directory=writer/web --pages=login,register
nx workspace-generator ui auth --directory=writer/web --pages=login,register

## Generate single page of ui

nx workspace-generator page --directory=writer/web --ui=auth forgot

## Generate feature

nx workspace-generator feature cleaner --directory=writer/web --pages=one

## Generatae single page of feature

nx workspace-generator feature-page --directory=writer/web --feature=cleaner two

## Combo example command:

nx workspace-generator domain writer && nx workspace-generator ui auth --directory=writer/web --pages=login,register
