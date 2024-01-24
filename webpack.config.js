const path = require('path');

module.exports = {
    mode: 'development', // 'production' for production build
    entry: './src/index.js', // Path to your main JavaScript file
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.css$/, // For CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injects styles into the DOM
                    'css-loader',   // Turns CSS into CommonJS
                    {
                        loader: 'sass-loader', // Compiles Sass to CSS
                        options: {
                            additionalData: `@import "${path.resolve(__dirname, './src/styles/_colors.scss')}";`
                        }
                    }
                ]
            },
        ],
    },
};
