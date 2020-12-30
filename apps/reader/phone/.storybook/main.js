const rootMain = require('../../../../.storybook/main');
rootMain.stories.push(...[
    '@libs/reader/phone/**/*.stories.mdx',
    '@libs/reader/phone/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;