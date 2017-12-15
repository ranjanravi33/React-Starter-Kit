var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
module.exports = {
  'entry': {
    'app' : ['./src/index.tsx']
  },
  'output': {
    'publicPath': path.join('outdir'),
    'path': path.join(__dirname, 'outdir'),
    'filename': 'bundle.js'
  },
  'devtool': "source-map",
  'module': {
    'loaders': [
      {
        'test': /\.tsx?$/,
        'loaders': ['babel-loader','ts-loader'],
        'exclude': [/node_modules/,nodeModulesPath]
      },
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/,nodeModulesPath]
      }
    ]
  },
  'resolve': {
    'extensions': ['.js', '.jsx', '.ts', '.tsx']
  }
};