var gulp = require('gulp');
var sources = require('../config/sources');
var browserSync = require('browser-sync');

module.exports = function () {

	browserSync({
		proxy: 'localhost/github/big-gulp/public'
	});

	return gulp.watch(
				[sources.js, sources.less],
				['browserify', 'less', browserSync.reload]
			);
};
