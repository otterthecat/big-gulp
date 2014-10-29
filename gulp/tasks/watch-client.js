var gulp = require('gulp');
var sources = require('../config/sources');
var browserSync = require('browser-sync');

module.exports = function () {
	return gulp.watch(
				[sources.js, sources.less],
				['browserify', 'less', browserSync.reload]
			);
};
