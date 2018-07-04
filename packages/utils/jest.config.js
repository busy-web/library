/**
 * jest typescript test runner
 *
 */
const conf = require('../../jest.config.js')

module.exports = conf(__dirname, {
	runner: 'jest-runner-tsc',
	displayName: "TSC: utils",
});
