var gulp = require('gulp');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');

var dev_path =
  {
    jade: 'src/jade/',
    sass: 'src/sass/'
  };

var build_path =
  {
    html: 'dist/',
    css:  'dist/css/'
  };

gulp.task('sass', function() {
  gulp.src([dev_path.sass + '**/*.scss'])
    .pipe(sass())
    .pipe(nano())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(build_path.css))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('jade', function(){
  gulp.src([dev_path.jade + '*.jade'])
    .pipe(jade({pretty: true}))
    .on('error', console.log)
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('server', function(){
  browserSync.init(null, {
    server: {baseDir: './'}
  });
});

gulp.task('watch', function(){
  gulp.watch(dev_path.jade + '**/*.jade', ['jade']);
  gulp.watch(dev_path.sass + '**/*.scss', ['sass']);
});

gulp.task('default', [
  'jade', 'sass', 'server', 'watch'
]);
