const rootMain = require('../../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...[
    '@libs/writer/web/**/*.stories.mdx',
    '@libs/writer/web/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;