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
- nx workspace-generator ds --type=[atom,molec,organ default value is atom] [your list component name here]
```

case 2: generate the atomic design system

```
- open terminal on atomic parent folder
- nx workspace-generator ds --type=[atom,molec,organ default value is atom] [your list component name here]
```

# EXAMPLE

## generate in feature folder:

nx workspace-generator atomic --type=[atom,molec,organ] [your list component name here]
if you dont using --type, default value is atom

for example:

### generate without --type

```
nx workspace-generator atomic auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
```

### generate with --type

```
nx workspace-generator atomic --type=atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-generator atomic --type=molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-generator atomic --type=organ login,register
nx workspace-generator atomic --type=template login-register
```

## generate design system folder:

nx workspace-generator ds --type=[atom,molec,organ] [your list component name here]
if you dont using --type, default value is atom

```
nx workspace-generator ds auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
```

### generate with --type

```
nx workspace-generator ds --type=atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-generator ds --type=molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-generator ds --type=organ login,register
nx workspace-generator ds --type=template login-register
```
