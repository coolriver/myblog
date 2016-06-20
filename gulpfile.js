var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack'),
    minify = require('gulp-minify'),
    webpackConfig = require('./webpack.config');

gulp.task("webpack", function() {
    return gulp.src('src/pages/index/entry.js')
        .pipe(gulpWebpack(webpackConfig), webpack)
        .pipe(minify())
        .pipe(gulp.dest('public/pages/'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/**/*.js'], ['webpack']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);