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
            additionalJs2: 'src/js/quiz.js'
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
                    'dist/js/script.min.js': ['src/js/script.js'],
                    'dist/js/quiz_giga.min.js': ['src/js/quiz_giga.js'],
                    'dist/js/quiz.min.js': ['src/js/quiz.js']
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
            }
        }
    });

    // Carregar os plugins do Grunt
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registrar as tarefas
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
};