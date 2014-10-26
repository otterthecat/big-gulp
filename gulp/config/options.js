module.exports = {

	complexity: {
		errorsOnly      : false,
		cyclomatic      : 3,
		halstead        : 10,
		maintainability : 90,
		trycatch        : true
	},

	istanbul: {
		dest: './metrics/coverage',
		reporters: {
			test: ['text-summary']
		}
	},

	mocha: {
		reporter: 'min'
	}
};
