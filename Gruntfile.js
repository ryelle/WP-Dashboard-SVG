/* jshint node:true */
module.exports = function(grunt) {

	// Load tasks.
	require('matchdep').filterDev('grunt-*').forEach( grunt.loadNpmTasks );

	// Project configuration.
	grunt.initConfig({

		svgstore: {
			options: {
				prefix : 'dashicons-',
				cleanup: ['fill','stroke'],
				includedemo: true,
				svg: {
					xmlns: 'http://www.w3.org/2000/svg',
					'xmlns:xlink': 'http://www.w3.org/1999/xlink',
					viewBox : '0 0 0 0'
				}
			},
			dev: {
				src: [ 'svg/*.svg' ],
				dest: 'about.svg'
			}
		},

		watch: {
			svg: {
				files: ['icons/src/**'],
				tasks: ['svgstore:dev']
			}
		}
	});

	// Default task.
	grunt.registerTask('default', ['svgstore:dev']);

};
