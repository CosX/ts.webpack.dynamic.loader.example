const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(svelte)$/,
        use: 'svelte-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: [ '.mjs', '.ts', '.js', '.svelte' ],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'demo'),
  },
};