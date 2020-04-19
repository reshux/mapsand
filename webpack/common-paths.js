const resolve = require('path').resolve;
module.exports = {
  outputPath: resolve(__dirname, '../', 'build'),
  contentBasePath: resolve(__dirname, '../', 'public'),
  srcPath: resolve(__dirname, '../app/src'),
  stylesheetsPath: resolve(__dirname, '../app/stylesheets'),
};
