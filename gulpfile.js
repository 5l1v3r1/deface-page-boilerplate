"use-strict";

var gulp    = require('gulp-help')(require('gulp')),
    gutil   = require('gulp-util'),
    sass    = require('gulp-sass'),
    pug     = require('gulp-pug'),
    rename = require('gulp-rename'),
    minify = require('gulp-minifier'),
    options = require('gulp-options'),
    jshint = require('gulp-jshint'),
    fs      = require('fs');

gulp.task('pug', false, function buildHTML() {
  return gulp.src('./src/pug/index.pug')
    .pipe(pug({
        doctype: 'html',
        pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', false, function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// Builder Tasks

// Developer's Tasks
gulp.task('devmode', "Developer's Mode", function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
    gulp.watch('./src/pug/**/*.pug', ['pug']);
});

// Boilerplate Information
gulp.task('info', false, function() {
    gutil.log('Some Information About Boilerplate');
});

// Default Task
gulp.task('default', false, function() {
    gutil.log("Deface Page Boilerplate");
    gutil.log("Developed by Waren Gonzaga");
    gutil.log("Created by Hackers for Hackers");
});