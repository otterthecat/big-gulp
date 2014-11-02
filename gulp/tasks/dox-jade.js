var gulp = require('gulp');
var dox = require('gulp-dox');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var fs = require('fs');
var sources = require('../config/sources').js;

var stripNames = function(list){
	for(var i = 0; i < list.length; i += 1){
		list[i] = list[i].replace('.json', '');
	}
	return list;
};

module.exports = function (){
	gulp.src(sources)
		.pipe(dox())
		.pipe(gulp.dest('./docs/raw'))
		.on('finish', function (){
			fs.readdir('./docs/raw/', function (err, docs){
				docs.forEach(function (jsn){
					jsn = jsn.replace('.json', '');
					gulp.src('./templates/doc.html')
					.pipe(rename(jsn +'.html'))
					.pipe(jade({
					    locals: {
					    	current: jsn,
					    	docs: require('../../docs/raw/' + jsn),
					    	files: stripNames(docs)
					    }
					}))
					.pipe(gulp.dest('./docs/html/' + jsn));
				});
			});
		});
};
