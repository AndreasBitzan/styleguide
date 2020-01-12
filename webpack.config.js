const path = require("path");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/logo.html',
      filename: 'logo.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/typography.html',
      filename: 'typography.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/colors.html',
      filename: 'colors.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/code-style.html',
      filename: 'code-style.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/naming-style.html',
      filename: 'naming-style.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/buttons.html',
      filename: 'buttons.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-items.html',
      filename: 'menu-items.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/welcome-screen.html',
      filename: 'welcome-screen.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dish-screen.html',
      filename: 'dish-screen.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-screen.html',
      filename: 'menu-screen.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/menu-bar.html',
      filename: 'menu-bar.html'
    }),
  ],
  module: {
      rules: [
          {
            test: /\.s[ac]ss$/i,
          use: [
            {
            loader: MiniCssExtractPlugin.loader,
            },
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ],
          },
          {
            test: /\.(png|jpe?g|svg)$/i,
            loader: 'file-loader',
            options: {
              esModule: false,
              name(file) {
                return 'img/[name].[ext]';
              },
            },
        },
      ]
  }
  
};