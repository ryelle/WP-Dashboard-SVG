/* jshint node:true */
module.exports = function(grunt) {

	// Load tasks.
	require('matchdep').filterDev('grunt-*').forEach( grunt.loadNpmTasks );

	// Project configuration.
	grunt.initConfig({

		// minifies SVGs
		svgmin: {
			options: {
				plugins: [
				{
					removeViewBox: false
				}, {
					removeUselessStrokeAndFill: false
				}
				]
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'icons/src',
					src: ['*.svg'],
					dest: 'icons/.tmp',

					// Adds color variables defined in Grunticon task
					ext: '.svg'
				}]
			},
			fallbacks: {
				files: [{
					expand: true,
					cwd: 'icons/src',
					src: ['*.svg'],
					dest: 'icons/.tmp-fallbacks',

					// Adds color variables defined in Grunticon task
					ext: '.colors-blue-white.svg'
				}]
			}
		},

		grunticon: {
			myIcons: {
				files: [{
					expand: true,
					cwd: 'icons/.tmp-fallbacks',
					src: ['*.svg'],
					dest: "icons/"
				}],
				options: {
					cssprefix: ".dashicons-",
					defaultWidth: "20px",
					defaultHeight: "20px",
					colors: {
						blue: "#0074a2",
						white: "#ffffff"
					},
					previewTemplate: "icons/preview-template.hbs"
				}
			}
		},

		svgstore: {
			options: {
				prefix: "dashicons-",
				cleanup: ['fill','stroke'],
				svg: {
					xmlns: 'http://www.w3.org/2000/svg',
					'xmlns:xlink': 'http://www.w3.org/1999/xlink',
					viewBox: '0 0 20 20'
				}
			},
			dev: {
				files: {
					'icons/dashicons.svg': [ 'icons/.tmp/*.svg' ]
				}
			}
		},

		watch: {
			svg: {
				files: ['icons/src/**'],
				tasks: ['svgmin', 'svgstore', 'grunticon']
			}
		}
	});

	// Default task.
	grunt.registerTask('default', ['svgmin', 'svgstore', 'grunticon']);

};
