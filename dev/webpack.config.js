const path = require('path');

module.exports = {
    entry: {
        gallery: './src/web/scripts/gallery.ts',
        script: './src/web/scripts/script.ts',
        weather: './src/web/scripts/weather.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src/web/build'),
        chunkFilename: '[id].[chunkhash].js'
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