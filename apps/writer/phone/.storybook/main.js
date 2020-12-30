const rootMain = require('../../../../.storybook/main');
rootMain.stories.push(...[
    '@libs/apps/writer/**/*.stories.mdx',
    '@libs/apps/writer/**/*.stories.@(js|jsx|ts|tsx)'
])

module.exports = rootMain;