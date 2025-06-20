export default {
	'**/*.{js,jsx,ts,tsx}': ['eslint'],
	'**/*.{md,json,yml,yaml}': ['prettier --check', 'cspell --no-progress --no-must-find-files'],
};
