var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gulpWebpack = require("gulp-webpack"),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

gulp.task("webpack", function() {
    return gulp.src(['./src/pages/**/*.js'])
        .pipe(gulpWebpack(webpackConfig), webpack)
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/**/*.js'], ['webpack']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);