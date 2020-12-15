## Development Environment setup
```
npm i -g nx
```
```
npm i
```

## Start development

```
nx serve writer-web --hmr
```

## Development Guidelines

1. Always checkout a new branch from `develop`.

2. Branch name should have the following format:
  if you start coding
   > [your-name]/[your-project]
Example: hiep/writer-web,quy/writer-web,phuong/writer-web,quyen/api,quyen/database

  if you fixing issue
   > [prefix]/[issue code]-[description]

In which:

- prefix: one of `feature`, `fix`, `refactor`
- issue code: taken from task in Jira
- description: short description on the task (optional if issue code is available)

Examples: `feature/BK-1308-dashboard`, `feature/bk-1306`, `fix/BK-1062-remove-phone-parentheses`

3. Upon completing a task, create a merge request to `develop` branch. Add other members as reviewers.
   (Optional) Include screenshot(s) of the completed view.

4. Create merge request from `develop` to `deployment/staging`. Then run command to deploy staging.

5. If a feature is ready for production, merge from `deployment/staging` to `deployment/production` and run command to deploy production for new feature.

## Coding Convention

- Code styling enforced by [Prettier](https://prettier.io/). Git precommit hook is setup to run Prettier on all changed files.
- (Recommended) Install editorconfig and prettier plugins on IDE of choice.

## VS Code plugin
- tailwind itellisense (read more)[https://tailwindcss.com/docs/intellisense] (download)[vscode:extension/bradlc.vscode-tailwindcss]

