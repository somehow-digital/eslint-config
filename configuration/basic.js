import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
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
		name: 'unicorn',
		...unicorn.configs['flat/recommended'],
	},
	{
		name: 'perfectionist',
		...perfectionist,
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
