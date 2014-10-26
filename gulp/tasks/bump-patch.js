var gulp = require('gulp');
var bump = require('gulp-bump');

module.exports = function () {
	'use strict';

	gulp.src('./package.json')
		.pipe(bump())
		.pipe(gulp.dest('./'));
};