const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
   mode: process.env.NODE_ENV,
   entry: './src/index.jsx',
   output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/',
   },
   devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
   module: {
      rules: [
         {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.s?[ac]ss$/,
            loader: [
               process.env.NODE_ENV === 'development'
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
            use: [
               {
                  loader: 'url-loader',
                  options: { limit: 8192 },
               },
            ],
         },
      ],
   },
   devServer: {
      proxy: {
         '/api': 'http://localhost:3000',
      },
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: './index.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
         filename: '[name].css',
         chunkFilename: '[id].css',
      }),
   ],
}

module.exports = config
