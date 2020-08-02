const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        context: path.join(__dirname, 'src'),
        entry: './src/index.js',
    },
    output: {
        filename: '[Name].js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
      ],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
    
    watch: false
};