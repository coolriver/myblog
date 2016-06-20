var path = require('path'),
    getEntry = require('./webpack/getEntry'),
    PATH_ROOT = __dirname, // jshint ignore:line
    PATH_SRC = path.join(PATH_ROOT, '/src/pages'),
    MAIN_FILE = 'main',
    PUBLIC_FILE = 'bundle',
    PATH_PUBLIC = path.join(PATH_ROOT, '/public/pages');

module.exports = {
    entry: getEntry(PATH_SRC, MAIN_FILE),
    output: {
        path: PATH_PUBLIC,
        filename: '[name]/' + PUBLIC_FILE + '.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
