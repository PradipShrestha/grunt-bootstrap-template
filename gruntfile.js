var config = {
    bootstrapPath: './node_modules/bootstrap-sass',
    sassPath: './sass'
};

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        appSetting: config,

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: true,
                    loadPath: ['<%= appSetting.bootstrapPath %>/assets/stylesheets']
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        watch: {
            scripts: {
                files: [
                    '<%= appSetting.sassPath %>/**/*.scss'
                ],
                tasks: ['sass', 'postcss', 'cssmin']
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('watch', ['watch']);
    grunt.registerTask('default', ['sass', 'postcss', 'cssmin']);
};

