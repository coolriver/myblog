var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    //gulpWebpack = require("gulp-webpack"),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack'),
    //named = require('vinyl-named'),
    minify = require('gulp-minify'),
    webpackConfig = require('./webpack.config');

gulp.task("webpack", function() {
    return gulp.src('src/pages/index/entry.js')
        .pipe(gulpWebpack(webpackConfig), webpack)
        .pipe(gulp.dest('public/pages/'));
});

gulp.task('mini', function() {
    return gulp.src('src/pages/**/main.js', {base: 'src'})
        .pipe(minify())
        .pipe(gulp.dest('test'));
});

gulp.task('watch', function() {
    //livereload.listen();
    //gulp.watch(['src/**/*.js'], ['webpack']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);