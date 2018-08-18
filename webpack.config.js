const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const paths = {
    entry: path.resolve(__dirname, 'src/main.js'),
    build: path.resolve(__dirname),
    htmlTemplate: path.resolve(__dirname, 'src/index.html')
}

module.exports = {
    entry: paths.entry,
    output: {
        path: paths.build,
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, 'index.html'),
            path.resolve(__dirname, 'main.js')
        ]),
        new HtmlWebpackPlugin({
            template: paths.htmlTemplate,
            hash: true
        })
    ]
}