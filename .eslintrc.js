module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
	excludeFiles: "*.ts",
  extends: 'eslint:recommended',
  env: {
		node: true
  },
	globals: {
		loader: true
	},
  rules: {
		//'no-console': 0
	}
};
