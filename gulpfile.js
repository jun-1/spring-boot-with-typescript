var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var exec = require('gulp-exec');

gulp.task('install_bower', function(callback){
    return gulp.src('')
            .pipe(exec("./node_modules/bower/bin/bower install"));
});

gulp.task('build', ['install_bower'], function(callback){
  return gulp.src('./src/main/ts/app.ts')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build/resources/main/static/js/'));
});
