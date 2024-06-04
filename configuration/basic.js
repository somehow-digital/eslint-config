import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';

export default [
	javascript.configs.recommended,
	unicorn.configs['flat/recommended'],
	perfectionist,
	prettier,
	{
		...cspell,
		rules: {
			'@cspell/spellchecker': 'error',
		},
	},
];
