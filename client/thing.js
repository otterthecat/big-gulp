/**
 * @module thing
 * Logs & returns generated string
 * @param  {string} str [user defined string to be appeneded to return value]
 * @return {string}     [full concated string]
 */
var Thing = function (str){
	'use strict';

	var thing = 'Your lovely string is ' + str;
	console.log(thing);
	return thing;
};

/**
 * Takes 2 numbers and multiplies the first against the second.
 * @param  {number} num1 A Number
 * @param  {number} num2 A Number
 * @return {number}      value of num1 * num2
 */
Thing.prototype.stuff = function (num1, num2){

	return num1 * num2;
};

/** export new instance of constructor */
module.exports = new Thing();
