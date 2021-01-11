const { patchPostCSS } = require('./patchPostCSS');
const webpack = require('webpack');

module.exports = (config) => {
  const isProd = config.mode === "production";
  const tailwindConfig = require("./tailwind.config.js")(isProd);
  patchPostCSS(config, tailwindConfig, true);

  config.plugins.push(
    new webpack.DefinePlugin({
      __ISSTORYBOOK__: false
    })
  );

  return config;
};
