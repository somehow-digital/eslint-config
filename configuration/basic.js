import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import unicorn from 'eslint-plugin-unicorn';

const files = {
	js: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.cjsx', '**/*.mjsx'],
};

export default [
	{
		files: files.js,
		name: 'global',
	},
	{
		name: 'javascript',
		...javascript.configs.recommended,
	},
	{
		name: 'promise',
		...promise.configs['flat/recommended'],
	},
	{
		name: 'unicorn',
		...unicorn.configs['flat/recommended'],
	},
	{
		name: 'perfectionist',
		...perfectionist.configs['recommended-natural'],
	},
	{
		name: 'prettier',
		...prettier,
	},
	{
		name: 'cspell',
		...cspell,
		rules: {
			'@cspell/spellchecker': 'error',
		},
	},
];
