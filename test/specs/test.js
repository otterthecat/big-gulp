/* jshint expr: true */
// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

// stubs
// /////////////////////////////////////////////////////////


// modules to test
// /////////////////////////////////////////////////////////
describe('Test', function () {
	it('should be true', function () {
		'test'.should.be.a('string');
	});
});
