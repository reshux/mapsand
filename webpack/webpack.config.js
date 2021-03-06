const errorConstants = require('./error-constants');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  console.log(env);
  if (!env) {
    throw new Error(errorConstants.ERR_NO_ENV_FLAG);
  }
  const envConfig = require(`./webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(commonConfig, envConfig);
  return mergedConfig;
};
