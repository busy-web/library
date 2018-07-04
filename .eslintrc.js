module.exports = {
	root: true,
	parser: 'typescript-eslint-parser',
  parserOptions: {
    ecmaVersion: 'es2017',
    sourceType: 'module'
  },
	plugins: [ 'typescript' ],
  extends: [ ],
  env: {
		browser: true
  },
  rules: { }
};
