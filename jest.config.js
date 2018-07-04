
module.exports = {
	rootDir: "./",
	transform: { "^.+\\.ts$": "ts-jest" },
	testRegex: "^.+\\.test\\.ts$",  //(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	moduleFileExtensions: [ "ts", "js", "json" ],
	moduleDirectories: [ "node_modules", "src", "tests" ],
	globals: {
		"ts-jest": {
			useBabelrc: false,
			enableTsDiagnostics: true
		}
	}
};
