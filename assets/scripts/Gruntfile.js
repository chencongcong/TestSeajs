module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		/*处理依赖*/
		transport: {
			options: {
				paths: ['.']
			},
			testApp:  {
				options: {
					idleading: "dist/"
				},				                    
				files : [{
					cwd: "application",
					src: "**/*.js",
					filter: 'isFile',
					dest: ".build/"
				}]        
			}
		},
		concat: {
			options: {
				paths: ['.'],
				include: 'relative'
			},
			testApp: {
				options: {
					include: 'all'
				},
				files: [{
					expand: true,
					cwd: '.build/',
					src: ['**/*.js'],
					dest: 'dist/',
					ext: '.js'
				}]
			}
		},
		/*压缩*/
		uglify: {
			testApp: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
				},
				files: [{
					expand: true,
					cwd: "dist",
					src: ["**/*.js", '!**/*-debug.js'],
					dest: 'dist/',
					ext: '.js'
				}]
			}

		},
		/*清除.build文件*/
		clean: {
			build: ['.build']
		}
	});
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('build', ['transport', 'concat','uglify','clean']);
};