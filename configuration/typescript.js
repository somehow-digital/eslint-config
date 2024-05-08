import javascript from '@eslint/js';
import typescript from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
	javascript.configs.recommended,
	...typescript.configs.strict,
	unicorn.configs['flat/recommended'],
	prettier,
];
