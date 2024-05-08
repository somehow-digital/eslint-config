import typescript from './configuration/typescript.js';

export default [
	...typescript,
	{
		ignores: ['**/.*/'],
	},
];
