var fs = require('fs'),
    path = require('path');

module.exports = function(dir, main) {
    var files = fs.readdirSync(dir),
        objRe = {};

    files.forEach(function(file) {
        objRe[file] = path.join(dir, file, main);
    });

    return objRe;
};