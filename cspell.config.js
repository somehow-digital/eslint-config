export default {
	dictionaries: [
		'en_US',
		'softwareTerms',
		'typescript',
		'node',
		'html',
		'css',
		'bash',
		'misc',
		'project',
	],
	dictionaryDefinitions: [
		{
			addWords: true,
			name: 'project',
			path: './dictionary.txt',
		},
	],
	ignorePaths: ['node_modules', 'package.json', '.gitignore'],
	language: 'en',
	version: '0.2',
};
