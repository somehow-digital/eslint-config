import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import typescript from 'typescript-eslint';

export default [
	{
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		name: 'parser',
	},
	{
		name: 'javascript',
		...javascript.configs.recommended,
	},
	{
		name: 'typescript',
		...typescript.configs.strictTypeChecked,
		...typescript.configs.stylisticTypeChecked,
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
