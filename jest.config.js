
const path = require('path');

module.exports = function(dir, conf) {
	const tsconf = Object.assign({}, {
			"verbose": true,
			"transform": { "^.+\\.ts$": "ts-jest" },
			"testRegex": "^.+\\.test\\.ts$",  //(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
			"moduleFileExtensions": [ "ts", "js", "json" ],
			"moduleDirectories": [ "node_modules", "src", "tests" ],
			"globals": {
				"ts-jest": {
					"useBabelrc": true,
					"skipBabel": false,
					"enableTsDiagnostics": true,
					"tsConfigFile": path.join(dir, 'tsconfig.test.json')
				}
			}
		}, 
		conf
	);
	return tsconf;
};
