const rootMain = require('../../../../.storybook/main');
rootMain.stories.push(...[
    '@libs/apps/reader/**/*.stories.mdx',
    '@libs/apps/reader/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;