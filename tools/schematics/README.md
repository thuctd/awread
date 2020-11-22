node --inspect-brk ./node_modules/nx/bin/nx.js workspace-schematic my-schematic mylib --dry-run
node --inspect-brk ./node_modules/nx/bin/nx.js workspace-schematic 



Always add shared first, then shell, then ui

nx workspace-schematic shared --directory=writer/web
nx workspace-schematic shell --directory=writer/web --project=writer-web 
nx workspace-schematic ui auth --directory=writer/web --pages=login,register,forgot
