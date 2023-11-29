'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const bulkSass = require('gulp-sass-bulk-import');

/**
 * Asset paths.
 */
const scssSrc = 'styles/*.scss';
const assetsDir = 'assets';

/**
 * SCSS task
 */
gulp.task('css', function () {
  return gulp.src(scssSrc).pipe(bulkSass()).pipe(sass()).pipe(rename('theme.css')).pipe(gulp.dest(assetsDir));
});

/**
 * Watch task
 */
gulp.task('watch', function () {
  gulp.watch([scssSrc, 'styles/*/*.scss'], gulp.series('css'));
});
