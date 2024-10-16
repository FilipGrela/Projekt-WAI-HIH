const path = require('path');

module.exports = {
    entry: {
        gallery: './src/web/scripts/gallery.ts', // Entry for the gallery script
        // anotherPage: './src/web/scripts/anotherPage.ts' // Another entry point for a different script
    },
    output: {
        filename: 'gallery.js',
        path: path.resolve(__dirname, 'src/web/build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};