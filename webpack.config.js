const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output : {
        path : path.resolve(__dirname, "dist"),
        filename:"main.js"
    },
    resolve : {
        extensions: [".js"]
    },
    module : {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader", 
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({ 
            inject: true, 
            template: './public/index.html', 
            filename: './index.html'
        }),
        // new CopyPlugin({
        //     patterns: [
        //       {
        //         from: path.resolve(__dirname, "Assets", "Assets/images"),
        //         to: "assets/images"
        //       }
        //     ]
        // })
    ]
}