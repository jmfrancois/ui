module.exports = {
	plugins: [
		'import',
		'react-hooks',
		'prettier',
		'testing-library',
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/react',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		// Required for certain syntax usages
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true
	},

	rules: {
		'prettier/prettier': 2
	},
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-var-requires': 0
			}
		}
	]
}
