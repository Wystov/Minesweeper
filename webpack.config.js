const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].js',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/assets/favicon/favicon.webp',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
        type: 'asset',
        generator: {
          filename: path.join('assets', '[contenthash][ext]'),
        },
      },
      {
        test: /\.(wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: path.join('assets', '[contenthash][ext]'),
        },
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
    config.devtool = false;
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }));
  } else {
    config.mode = 'development';
    config.devtool = 'source-map';
  }
  return config;
};
