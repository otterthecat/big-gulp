var gulp = require('gulp');
var sources = require('../config/sources');

module.exports = function () {
	return gulp.watch(
			[sources.js, sources.test, sources.less],
			['jshint', 'jscs', 'mocha', 'browserify', 'less']
		);
};
