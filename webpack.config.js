const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:path.join(__dirname, 'src','index.ts'),
    output:{
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin()],
    module:{
        rules:[{
            test:/\.ts$/,
            use:['ts-loader']
        }]
    }
}