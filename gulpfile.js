var gulp = require('gulp');
var stylus = require('gulp-stylus');


// flex-grid
gulp.task('build', function () {
  return gulp.src('./src/flex-grid.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist/build'));
});
