var webpack = require('webpack');
module.exports = {
    entry: {
        'bundle': './src/main.js'
    },
    output: {
        path: __dirname+'/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js/,
                use: [
					{
						loader: 'babel-loader'
					}
				]
            }
        ]
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'cheap-eval-source-map',
    resolve: {
        extensions: ['.css', '.js'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }       
    },
    devServer: {
        compress: true,       
        port: 9000,
        hot: true
    } 
}