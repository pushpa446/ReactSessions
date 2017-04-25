module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 8446
    }
};