# Run Storybook

- All project
  `nx run writer-web:storybook`

- Feature Lib
  `nx run writer-web-ui-auth:storybook`
  `nx run writer-web-shared:storybook`

- Design System
  `nx run global-design-system:storybook`

# WARNING:

generate code only working on atomic parent folder, for example:

atomic folder ( <-- you should open terminal on here) - atoms folder - molecs folder - organs folder

# GENERATE COMMAND

## how to do that?

case 1: generate the atomic design system

```
- open terminal from everywhere
- nx workspace-schematic ds --type=[atom,molec,organ default value is atom] [your list component name here]
```

case 2: generate the atomic design system

```
- open terminal on atomic parent folder
- nx workspace-schematic ds --type=[atom,molec,organ default value is atom] [your list component name here]
```

# EXAMPLE

## generate in feature folder:

nx workspace-schematic atomic --type=[atom,molec,organ] [your list component name here]
if you dont using --type, default value is atom

for example:

### generate without --type

```
nx workspace-schematic atomic auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
```

### generate with --type

```
nx workspace-schematic atomic --type=atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-schematic atomic --type=molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-schematic atomic --type=organ login,register
nx workspace-schematic atomic --type=template login-register
```

## generate design system folder:

nx workspace-schematic ds --type=[atom,molec,organ] [your list component name here]
if you dont using --type, default value is atom

```
nx workspace-schematic ds auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
```

### generate with --type

```
nx workspace-schematic ds --type=atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-schematic ds --type=molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-schematic ds --type=organ login,register
nx workspace-schematic ds --type=template login-register
```
