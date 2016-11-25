'use strict';


const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const $ = require('gulp-load-plugins')()

// SASS css
gulp.task('css', function(){
  return gulp.src('app/sass/**/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      broswers: [ 'last 2 versions' ],
      cascade: false
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
})

gulp.task('css:watch', ()=>{
  gulp.watch('app/sass/**/*.scss', ['css']);
})

gulp.task('css:build', ['css'], function(){
  return gulp.src('app/sass/**/main.scss')
    .pipe($.rev())
    .pipe(gulp.dest('./public/css'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('./public/css'))
})

// javascript
gulp.task('scripts', function(){
  gulp.src('app/js/main.js')
      .pipe(gulp.dest('./public/js'))
})
gulp.task('scripts:watch', function(){
  gulp.watch('app/js/main.js', ['scripts'])
})
gulp.task('scripts:build', ['scripts'], function(){
  return gulp.src('app/js/main.js')
    .pipe($.rev())
    .pipe(gulp.dest('./public/js'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('./public/js'))
})

// images
gulp.task('images', function() {
  gulp.src([
    './app/images/**/*'
  ])
  .pipe(gulp.dest('./public/images'))
})

gulp.task('images:watch', function() {
  gulp.watch('app/images/**/*', ['images']);
});

gulp.task('images:build', ['images'], function() {
  return gulp.src('app/images/**/*')
             .pipe($.rev())
             .pipe(gulp.dest('./public/images'))
             .pipe($.rev.manifest())
             .pipe(gulp.dest('./public/images'));
})
