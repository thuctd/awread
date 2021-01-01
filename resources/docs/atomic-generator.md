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
- nx workspace-generator ds [atom,molec,organ default value is atom] [your list component name here]
```

case 2: generate the atomic design system

```
- open terminal on atomic parent folder
- nx workspace-generator ds [atom,molec,organ default value is atom] [your list component name here]
```

# EXAMPLE

## generate in feature folder:

nx workspace-generator atomic [atom,molec,organ] [your list component name here]

for example:

### generate

```
nx workspace-generator atomic atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-generator atomic molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-generator atomic organ login,register
nx workspace-generator atomic template login-register
```

## generate design system folder:

nx workspace-generator ds [atom,molec,organ] [your list component name here]

### generate

```
nx workspace-generator ds atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-generator ds molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-generator ds organ login,register
nx workspace-generator ds template login-register
```
