module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8446
    },

    module: {
        rules: [
            {test: /\.js$/, use: {loader: 'babel-loader', options: {presets: ['env']}}}
        ]
    }
};