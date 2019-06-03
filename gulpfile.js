'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch_scss', function () {
  gulp.watch('./scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch_scss'));