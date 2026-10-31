import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.*': [
			'eslint --fix',
			'cspell --no-progress --no-must-find-files',
		],
	},
});
