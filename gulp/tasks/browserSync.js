var gulp = require('gulp')
var browserSync = require('browser-sync');

module.exports = function (){
	browserSync({
		proxy: 'localhost/github/big-gulp/public'
	});
};
