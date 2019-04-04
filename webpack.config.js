const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

  entry: ['./src/js/main.js', './src/scss/main.scss'],

  output: {
    path: path.resolve(__dirname, 'build'),

    filename: 'assets/main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            publicPath: './images',
            name: '[name].[ext]',
            outputPath: 'assets/images'
          }

        }, ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/main.css'
    })
  ]
};