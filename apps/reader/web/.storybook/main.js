const rootMain = require('../../../../.storybook/main');
rootMain.stories.push(...[
    '@libs/reader/web/**/*.stories.mdx',
    '@libs/reader/web/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;