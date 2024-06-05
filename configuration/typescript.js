import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import typescript from 'typescript-eslint';

export default [
	{
		name: 'javascript',
		...javascript.configs.recommended,
	},
	{
		languageOptions: typescript.configs.base.languageOptions,
		name: 'typescript',
		plugins: typescript.configs.base.plugins,
		rules: {
			...typescript.configs.strictTypeChecked[1].rules,
			...typescript.configs.strictTypeChecked[2].rules,
			...typescript.configs.stylisticTypeChecked[2].rules,
			'@typescript-eslint/consistent-type-exports': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
		},
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
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		name: 'custom',
	},
];
