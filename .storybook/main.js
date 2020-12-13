const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: [
    // this stories coming from libs/wrirter/web/ui-auth
    '@awread/global/design-system/src/lib/**/*.stories.mdx',
    '@awread/global/design-system/src/lib/**/*.stories.@(js|jsx|ts|tsx)'
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
    const tailwindConfig = require("../tailwind.config.js")(configType === 'PRODUCTION');
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: [
            require('postcss-import'),
            require('tailwindcss')(tailwindConfig),
            require('autoprefixer'),
          ]
        }
      }
    });

    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /postcss-import/
      })
    );

    // Add absolute path.resolve so storybook can handle absolute import (eg. @src/resources/...)

    // console.log('path resolver', path.resolve(__dirname, "./"));
    // console.log('path resolver', path.resolve(__dirname, "../libs/writer/web"));

    config.resolve.alias = {
      ...config.resolve.alias,
      "@awread/global": path.resolve(__dirname, "../libs/global"),
      "@awread/writer/web": path.resolve(__dirname, "../libs/writer/web"),
    };

    // config.resolve.plugins = [new TsconfigPathsPlugin({
    //   configFile: '../tsconfig.base.json'
    // })];

    return config;

  },
};
