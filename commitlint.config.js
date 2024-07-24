export default {
	plugins: ['@somehow-digital/commitlint-plugin-spellcheck'],
	rules: {
		'spellcheck/body': [2, 'always'],
		'spellcheck/footer': [2, 'always'],
		'spellcheck/header': [2, 'always'],
		'spellcheck/scope': [2, 'always'],
		'spellcheck/subject': [2, 'always'],
		'spellcheck/type': [2, 'always'],
	},
};
