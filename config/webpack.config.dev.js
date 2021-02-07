const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const { getPackageName } = require('../utils/packagename');

const isProduction = process.env.NODE_ENV === 'production';
// const devPort = process.env.PORT || 3000;
const devPort = 3000; //temporary
const packageName = getPackageName();
const rootDir = path.join(__dirname, '..');

const plugins = [
  new CheckerPlugin(),
  new MiniCssExtractPlugin({ filename: '[name].css' }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
];

if (!isProduction) {
  plugins.push(
    new WebpackNotifierPlugin({ title: { packageName } }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootDir, 'public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  );
}

const scssLoaders = [
  isProduction ? { loader: MiniCssExtractPlugin.loader } : require.resolve('style-loader'),
  { loader: require.resolve('css-loader'), options: { importLoaders: 1 } },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: [require('autoprefixer'), require('cssnano')({ preset: 'default' })],
      },
    },
  },
  require.resolve('sass-loader'),
];

module.exports = {
  entry: { main: path.join(rootDir, 'src/index.js') },
  output: {
    path: path.resolve(rootDir, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer: {
    contentBase: path.join(rootDir, 'public/'),
    // disableHostCheck: true,
    // historyApiFallback: true,
    // https: false,
    hot: true,
    hotOnly: true,
    publicPath: 'http://localhost:3000/dist/',
    // index: path.resolve(__dirname, 'src/index.html'),
    // inline: true,
    stats: 'errors-only',
    open: false,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: devPort,
  },
  mode: isProduction ? 'production' : 'development',
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: ['react-refresh/babel'],
        },
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          configFileName: path.join(rootDir, 'tsconfig.json'),
        },
      },
      {
        test: /\.scss$/,
        use: scssLoaders,
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/',
        },
      },
    ],
  },

  plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
};
