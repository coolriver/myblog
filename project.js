var path = require('path'),
    cwd = process.cwd(); // jshint ignore:line

module.exports = {
    PATH_ROOT: cwd,
    PATH_SRC: path.join(cwd, '/src/pages'),
    PATH_PUBLIC: path.join(cwd, '/public/pages'),
    SRC_FILE: 'main',
    PUBLIC_FILE: 'bundle'
};