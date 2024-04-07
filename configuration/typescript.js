import eslint from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import unicorn from 'eslint-plugin-unicorn';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
	eslint.configs.recommended,
	typescript.configs.recommended,
	unicorn.configs['flat/recommended'],
	prettier,
];
