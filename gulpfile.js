'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const replace = require('gulp-replace');

gulp.task('less', function () {
    return gulp.src('./src/styles/main.less')
        .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(replace('../fonts', '../../src/fonts'))
        .pipe(replace('../images', '../../src/images'))
        .pipe(gulp.dest('./dist/css'));
});