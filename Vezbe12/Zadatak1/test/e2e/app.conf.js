exports.config = {

	framework: 'jasmine',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
		'specs/login.test.js',
	],
	baseUrl: 'http://localhost:8000/'
}