# Auto import from module not work in the first time?
Follow this (explain)[https://github.com/nrwl/nx/issues/3342] the first time import library X will NOT WORK, yeah, it just not suggest. Only second time it will suggest, 
Because: "this is a limitation of how vscode autocompletion works. The language service has to know that myapp points to mylib before it can autocomplete tokens from it. The same is true about autocompleting tokens from node_modules."
