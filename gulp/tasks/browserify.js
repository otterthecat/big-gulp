var gulp = require('gulp');
var browserify = require('browserify');
var vinyl = require('vinyl-source-stream');
var sources = require('../config/sources').app;

module.exports = function (){
	'use strict';

	return browserify(sources)
			.bundle()
			.pipe(vinyl('bundle.js'))
			.pipe(gulp.dest('./public/javascript/'));
};
