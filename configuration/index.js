import antfu from '@antfu/eslint-config';
import defaults from './defaults.js';

export default function config(options, ...configurations) {
	return antfu({
		...defaults,
		...options,
	}, {
		rules: {
			'toml/indent': ['error', 2],
		},
	}, ...configurations);
}
