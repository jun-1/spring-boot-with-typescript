var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var exec = require('gulp-exec');

gulp.task('install_bower', function(callback){
    return gulp.src('')
            .pipe(exec("./node_modules/bower/bin/bower install"));
});

gulp.task('build', ['install_bower'], function(callback){
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/resources/main/static/js/'));
});
