
# APPLICATION

nx g app web --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app mobile --directory=reader --style=scss --routing=false --strict --tags=scope:shared,type:app

# LIBRARY

nx g lib auth --directory=reader/web --style=scss --tags=scope:auth,scope:shared,type:lib
- login
- register 
- forgot-password

nx g lib company --directory=reader/web --style=scss --tags=scope:company,scope:shared,type:lib
- about-us

nx g lib home --directory=reader/web --style=scss --tags=scope:home,scope:shared,type:lib
- home

nx g lib listing --directory=reader/web --style=scss --tags=scope:listing,scope:shared,type:lib
- all
- search
- filter

# STATES

- auth
- book-listing
- home
- company



# APPLICATION

nx g app web --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app
nx g app mobile --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app

#LIBRARY

nx g lib auth --directory=writer/web --style=scss --tags=scope:auth,scope:shared,type:lib
- login
- register 
- forgot-password

nx g lib setting --directory=writer/web --style=scss --tags=scope:setting,scope:shared,type:lib
- profile
- 

nx g lib dashboard --directory=writer/web --stype-scss --style=scss --tags=scope:dashboard,scope:shared,type:lib
- dashboard

nx g lib my-works --directory=writer/web --style=scss --tags=scope:my-works,scope:shared,type:lib
- all
- search
- filter

# STATES

- auth
- setting
- dashboard
- my-works








nx g lib shell --directory=writer-web --tags=scope:shell,scope:shared,type:feature --style=scss
nx g lib auth --directory=writer-web --tags=scope:auth,scope:shared,type:feature --style=scss
nx g lib setting --directory=writer-web --tags=scope:setting,scope:shared,type:feature --style=scss
nx g lib dashboard --directory=writer-web --tags=scope:dashboard,scope:shared,type:feature --style=scss
nx g lib my-works --directory=writer-web --tags=scope:my-works,scope:shared,type:feature --style=scss

nx g lib shell --directory=writer-web --tags=scope:shell,scope:shared,type:ui --style=scss
nx g lib auth --directory=writer-web --tags=scope:auth,scope:shared,type:ui --style=scss
nx g lib setting --directory=writer-web --tags=scope:setting,scope:shared,type:ui --style=scss
nx g lib dashboard --directory=writer-web --tags=scope:dashboard,scope:shared,type:ui --style=scss
nx g lib my-works --directory=writer-web --tags=scope:my-works,scope:shared,type:ui --style=scss


nx g lib feature-shell --directory=writer/web --tags=scope:shell,scope:shared,type:feature --style=scss
nx g lib feature-auth --directory=writer/web --tags=scope:feature-auth,scope:shared,type:feature --style=scss
