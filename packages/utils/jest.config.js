/**
 * jest typescript test runner
 *
 */
const conf = require('../../jest.config.js');

module.exports = Object.assign({}, conf, {
	runner: 'jest-runner-tsc',
	displayName: "TSC: utils",
});
