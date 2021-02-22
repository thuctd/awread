const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const path = require('path');
const webpack = require('webpack');
const { patchPostCSS } = require('../configs/tailwind/patchPostCSS.js');

module.exports = {
  stories: [
    // this stories coming from libs/wrirter/web/ui-auth
    '@libs/global/design-system/src/lib/**/*.stories.mdx',
    '@libs/global/design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions'],
  // your Storybook configuration
  // refs: {
  //   'design-system': {
  //     title: 'Design System',
  //     url: 'http://localhost:4400',
  //   },
  // },

  webpackFinal: (config, { configType }) => {
    const isProd = config.mode === "production";
    const tailwindConfig = require("../tailwind.config.js")(isProd);
    patchPostCSS(config, tailwindConfig, true);

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /postcss-import/
      }),
      new webpack.DefinePlugin({
        __ISSTORYBOOK__: true
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      "@libs": path.resolve(__dirname, "../libs"),
    };


    return config;

  },
};
