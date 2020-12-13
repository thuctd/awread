# WARNING:

generate code only working on atomics folder
if you are in design system, generate at lib folder

# Generate command

nx workspace-schematic atomic --type=atom auth-bg,tab-btn,logo,input,check-btn,forgot-btn,submit-btn,social-btn
nx workspace-schematic atomic --type=molec tab-head,login-form,register-form,remember-forgot,action-btns
nx workspace-schematic atomic --type=organ login,register
nx workspace-schematic atomic --type=template login-register

# Run Storybook

- All project
  nx run writer-web:storybook

- Feature Lib
  nx run writer-web-ui-auth:storybook
  nx run writer-web-shared:storybook

- Design System
  nx run global-design-system:storybook
