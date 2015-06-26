var gulp = require('gulp');
var $ = require('gulp-load-plugins');

gulp.task('css',function() {
  gulp.src('src/css/**/*.less')
    .pipe($.less())
    .pipe(gulp.dest('public/css'));
});