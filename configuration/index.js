import antfu from '@antfu/eslint-config';
import defaults from './defaults.js';

export default function config(options, ...configurations) {
	return antfu({
		...defaults,
		...options,
	}, ...configurations);
}
