var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'app/static/sass/*'
];

gulp.task('sass', function() {
  return gulp.src('app/static/sass/stylesheet.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    // .pipe($.autoprefixer({
    //   browsers: ['last 2 versions', 'ie >= 9']
    // }))
    .pipe(gulp.dest('app/static/css'));
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(['app/static/sass/*.scss',
              'app/static/sass/**/*.scss',
              'app/static/sass/*/**/*.scss'], ['sass']);
});

gulp.task('default', function () {
    console.log('gulp sass');
    console.log('gulp watch');
});
