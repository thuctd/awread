const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const path = require('path');
const webpack = require('webpack');
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


function patchPostCSS(webpackConfig, tailwindConfig, components = false) {
  if (!tailwindConfig) {
    console.error('Missing tailwind config :', tailwindConfig);
    return;
  }
  const pluginName = "autoprefixer";
  for (const rule of webpackConfig.module.rules) {
    if (!(rule.use && rule.use.length > 0) || (!components && rule.exclude)) {
      continue;
    }
    for (const useLoader of rule.use) {
      if (!(useLoader.options && useLoader.options.postcssOptions)) {
        continue;
      }
      const originPostcssOptions = useLoader.options.postcssOptions;
      useLoader.options.postcssOptions = (loader) => {
        const _postcssOptions = originPostcssOptions(loader);
        const insertIndex = _postcssOptions.plugins.findIndex(
          ({ postcssPlugin }) => postcssPlugin && postcssPlugin.toLowerCase() === pluginName
        );
        if (insertIndex !== -1) {
          _postcssOptions.plugins.splice(insertIndex, 0, ["tailwindcss", tailwindConfig]);
        } else {
          console.error(`${pluginName} not found in postcss plugins`);
        }
        return _postcssOptions;
      };
    }
  }
}
