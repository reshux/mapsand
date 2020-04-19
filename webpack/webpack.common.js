const commonPaths = require('./common-paths');
const config = {
  target: 'web',
  entry: {
    bundle: './app/src/index.jsx',
  },
  entry: {
    polyfills: ['core-js/es6/set'],
    bundle: './app/src/index.jsx',
  },
  output: {
    filename: 'static/js/[name].js',
    path: commonPaths.outputPath,
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
};

module.exports = config;
