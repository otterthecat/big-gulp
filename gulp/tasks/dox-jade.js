var gulp = require('gulp');
var dox = require('gulp-dox');
var jade = require('gulp-jade');
var data = require('gulp-data');
var rename = require('gulp-rename');
var fs = require('fs');
var sources = require('../config/sources').js;

module.exports = function (){
	gulp.src(sources)
		.pipe(dox())
		.pipe(gulp.dest('./docs/raw'))
		.on('finish', function (){
			var docs = fs.readdirSync('./docs/raw/');
			docs.forEach(function (jsn){
				jsn = jsn.replace('.json', '');
				gulp.src('./templates/doc.html')
				.pipe(rename(jsn+'.html'))
				.pipe(jade({
				    locals: require('../../docs/raw/'+jsn)
				}))
				.pipe(gulp.dest('./docs/html/'+jsn+'.html'));
			});
		});
};
