var complexityOpts = {
	errorsOnly      : false,
	cyclomatic      : 3,
	halstead        : 10,
	maintainability : 90,
	trycatch        : true
};



module.exports = {

	plato: {
		dest: './metrics/report',
		complexity: complexityOpts,
		jshint: {
			options: {
				strict: true
			}
		}
	},

	complexity: complexityOpts,

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
