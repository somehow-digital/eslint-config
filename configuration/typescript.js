import cspell from '@cspell/eslint-plugin/recommended';
import javascript from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist/configs/recommended-natural';
import prettier from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import typescript from 'typescript-eslint';

const files = {
	js: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx', '**/*.cjsx', '**/*.mjsx'],
	ts: ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx', '**/*.ctsx', '**/*.mtsx'],
};

export default [
	{
		files: [...files.js, ...files.ts],
		name: 'global',
	},
	{
		name: 'javascript',
		...javascript.configs.recommended,
	},
	{
		languageOptions: {
			...typescript.configs.strict[0].languageOptions,
			parserOptions: {
				projectService: true,
			},
		},
		name: 'typescript',
		plugins: typescript.configs.strict[0].plugins,
		rules: {
			...typescript.configs.strict[1].rules,
			...typescript.configs.strict[2].rules,
			...typescript.configs.stylistic[1].rules,
			...typescript.configs.stylistic[2].rules,
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
];
