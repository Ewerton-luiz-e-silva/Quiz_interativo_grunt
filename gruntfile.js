module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Caminhos dos arquivos
        paths: {
            scss: 'src/scss/style.scss',
            css: 'dist/css/style.css',
            js: 'src/js/script.js',
            jsmin: 'dist/js/script.min.js',
            sassVariables: 'src/scss/variables.scss',
            additionalJs1: 'src/js/quiz_giga.js',
            additionalJs2: 'src/js/quiz.js',
            html: 'index.html',
            htmlDist: 'dist/index.html',
        },

        // Compilação do Sass
        sass: {
            options: {
                implementation: require('sass'),
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['style.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        // Minificação do CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['style.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        // Minificação do JavaScript
        uglify: {
            my_target: {
                files: {
                    '<%= paths.jsmin %>': ['<%= paths.js %>'],
                    'dist/js/quiz_giga.min.js': ['<%= paths.additionalJs1 %>'],
                    'dist/js/quiz.min.js': ['<%= paths.additionalJs2 %>']
                }
            }
        },

        // Minificação do HTML
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '<%= paths.htmlDist %>': '<%= paths.html %>'
                }
            }
        },

        // Observação de mudanças
        watch: {
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true
                }
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['<%= paths.html %>'],
                tasks: ['htmlmin'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Carregar os plugins do Grunt
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registrar as tarefas
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'htmlmin']);
};