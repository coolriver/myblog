var gulp = require('gulp'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    gulpWebpack = require('webpack-stream'),
    webpack = require('webpack'),
    minify = require('gulp-minify'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    webpackConfig = require('./webpack.config'),
    PROJECT = require('./project');

gulp.task("webpack", function() {
    return gulp.src('')
        .pipe(gulpWebpack(webpackConfig), webpack)
        //.pipe(minify())
        //.pipe(gulp.dest('public/pages/'))
        //.pipe(rev())
        .pipe(gulp.dest(PROJECT.PATH_PUBLIC));
});

gulp.task('minify', function() {
    return gulp.src(path.join(PROJECT.PATH_PUBLIC, '/**/' + PROJECT.PUBLIC_FILE + '.js'))
        .pipe(minify())
        .pipe(gulp.dest(PROJECT.PATH_PUBLIC));
        //.pipe(rev())
        //.pipe(gulp.dest(PROJECT.PATH_PUBLIC))
        //.pipe(rev.manifest()) // 生成一个rev-manifest.json
        //.pipe(gulp.dest('tmp'));
});

gulp.task('md5', function() {
    return  gulp.src(path.join(PROJECT.PATH_PUBLIC, '/**/' + PROJECT.PUBLIC_FILE + '-min.js'))
        .pipe(rev())
        .pipe(gulp.dest(PROJECT.PATH_PUBLIC))
        .pipe(rev.manifest()) // 生成一个rev-manifest.json
        .pipe(gulp.dest('tmp'));
});

gulp.task('rev', function() {
    gulp.src(['tmp/*.json', 'src/pages/**/index.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('public/pages'));                     //- 替换后的文件输出的目录
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['src/**/*.js'], ['webpack']);
});

gulp.task('default', [
    'webpack',
    'watch'
]);