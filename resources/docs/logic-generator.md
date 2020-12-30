# GEAR

gear generator generate file type: gear, addon, api, model, interface
example:
`nx workspace-generator logic gear login,register,forgot`
This will generate `gears` folder with `index.ts` inside. Then create `login.gear.ts, register.gear.ts, forgot.gear.ts`

```
- gears
  - index.ts
  - login.gear.ts
  - register.gear.ts
  - forgot.gear.ts
```

The same for other file types.

# AKITA

akita generator generate file for full feature function like: service, query and store file
for example:
`nx workspace-generator akita current-user`
this will generate `states` folder with `index.ts` inside. Then create 3 file `current-user.service.ts, current-user.query.ts, current-user.store.ts`

```
- states
  - index.ts
  - current-user
    - current-user.service.ts
    - current-user.query.ts
    - current-user.store.ts
- models
  - index.ts
  -  current-user.model.ts

```
