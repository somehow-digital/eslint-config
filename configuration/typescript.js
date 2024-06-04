import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import typescript from 'typescript-eslint';

export default [
	javascript.configs.recommended,
	...typescript.configs.strictTypeChecked,
	...typescript.configs.stylisticTypeChecked,
	unicorn.configs['flat/recommended'],
	perfectionist,
	prettier,
	{
		...cspell,
		rules: {
			'@cspell/spellchecker': 'error',
		},
	},
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];
