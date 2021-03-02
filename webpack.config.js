const HtmlPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
      },
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
                
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"]
            },
        ]
    },

    plugins:[
        new HtmlPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
    ],

    devServer: {
        port:4200,
        historyApiFallback:true,
        hot:true
    }
}