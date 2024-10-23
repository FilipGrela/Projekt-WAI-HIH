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
    devtool: 'source-map',  // Enable source maps
    watch: true,
    watchOptions: {
        poll: 500, // Sprawdzaj zmiany co 1000 ms
        ignored: /node_modules/, // Ignoruj zmiany w node_modules
    },
    cache: {
        type: 'filesystem',  // Użyj systemu plików jako cache
    },
};