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
var thing = require('../../client/thing');

describe('Thing', function () {
	it('should set string', function () {
		var item = thing('boom');
		item.should.equal('Your lovely string is boom');
	});
});
