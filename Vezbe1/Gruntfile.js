// Generated on 2015-01-21 using generator-angular 0.9.2
'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	//require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app: 'app',
		dist: 'dist'
	};



	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: appConfig,

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			less: {
				files: ['app/styles/less/**/*.less'],
				tasks: ['less:development']
			}
		},
		less: {
			development: {
				options: {
					sourceMap: true,
					sourceMapRootpath: '/',
					sourceMapBasepath: 'app'
				},
				files: {
					'app/styles/css/bpk-main.css': 'app/styles/less/main/main.less',
					'app/styles/css/bpk-light.css': 'app/styles/less/light/main.less'
				}
			}
		},
		jshint: {
			options: {
				jshintrc: 'lint/.jshintrc',
				reporterOutput: ''
			},
			files: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**', '!app/libs/**']
		},
		jscs: {
			files: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**', '!app/libs/**'],
			options: {
				config: "lint/.jscsrc"
			}
		},
		ngdocs: {
			options: {
				dest: 'app/docs',
				scripts: ['app/bower_components/angular/angular.js'],
				html5Mode: false
			},
			all: ['app/features/**/*.js']
		}
	});

	grunt.registerTask('docs', [
		'ngdocs'
	]);

	grunt.registerTask('dev', [
		'less:development',
		'watch'
	]);

	grunt.registerTask('assets', [
		'less:development'
	]);

};
