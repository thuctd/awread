const rootMain = require('../../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...[
    '@awread/writer/web/**/*.stories.mdx',
    '@awread/writer/web/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;