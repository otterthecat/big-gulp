/**
 * Logs & returns generated string
 * @param  {string} str [user defined string to be appeneded to return value]
 * @return {string}     [full concated string]
 */
var thing = function (str){
	'use strict';

	var thing = 'Your lovely string is ' + str;
	console.log(thing);
	return thing;
};

module.exports = thing;
