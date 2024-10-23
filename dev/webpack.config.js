const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
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
        devtool: isProduction ? false : 'source-map',  // Enable source maps only in development
        watchOptions: {
            poll: 500,
            ignored: /node_modules/,
        },
        cache: {
            type: 'filesystem',
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true,  // Remove console.* calls
                            drop_debugger: true, // Remove debugger statements
                        },
                    },
                }),
            ],
        },
    };
};
