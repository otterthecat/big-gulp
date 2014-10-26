var gulp = require('gulp');
var less = require('gulp-less');
var sources = require('../config/sources').less;

module.exports = function () {
	gulp.src(sources)
		.pipe(less())
		.pipe(gulp.dest('./public/stylesheets/'));
};
