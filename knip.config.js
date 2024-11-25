export default {
	entry: ['configuration/*.js'],
	ignoreDependencies: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/github',
		'@semantic-release/npm',
		'@semantic-release/release-notes-generator',
	],
	project: ['configuration/**'],
};
