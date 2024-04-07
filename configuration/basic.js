import eslint from '@eslint/js';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
	eslint.configs.recommended,
	unicorn.configs['flat/recommended'],
	prettier,
];
