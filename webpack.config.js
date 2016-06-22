var path = require('path'),
    getEntry = require('./webpack/getEntry'),
    PROJECT = require('./project');

module.exports = {
    entry: getEntry(PROJECT.PATH_SRC, PROJECT.SRC_FILE),
    output: {
        path: PROJECT.PATH_PUBLIC,
        filename: '[name]/' + PROJECT.PUBLIC_FILE + '.js'
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
