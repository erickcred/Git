const { loadNpmTasks } = require("grunt");

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),
        less: { // Configuração less
            development: {
                files: { "dev/styles/main.css": "src/styles/main.less" }
            },
            production: {
                options: { compress: true },
                files: { "dist/styles/main.min.css": "src/styles/main.less" }
            }
        },
        watch: { // Processo para deixar o grunt escutando pasta/arquivos
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:development"]
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            },
            script: {
                files: ["src/scripts/*.js"],
                tasks: ["replace:dev"]
            }
        },
        replace: { // Processo que ira substituir algum dado no html
            dev: {
                options: {
                    patterns: [
                        { match: "CSS_PRINCIPAL", replacement: "./styles/main.css" },
                        { match: "JS_PRINCIPAL", replacement: "../src/scripts/main.js" }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["src/*.html"],
                        dest: "dev/"
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        { match: "CSS_PRINCIPAL", replacement: "./styles/main.min.css" },
                        { match: "JS_PRINCIPAL", replacement: "./scripts/main.min.js" }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ["prebuild/*.html"],
                        dest: "dist/"
                    }
                ]
            }
        },
        htmlmin: { // Processo para minificar o HTML
            dist: {
                options: { removeComments: true, collapseWhitespace: true },
                files: [
                    { "prebuild/index.html": "src/index.html" },
                    { "prebuild/processos.html": "src/processos.html" },
                    { "prebuild/contato.html": "src/contato.html" }
                ]
            }
        },
        clean: ["prebuild"],
        uglify: {
            target: {
                files: { "dist/scripts/main.min.js": "src/scripts/main.js" }
            }
        }
        
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", ["replace:dev"]);
    grunt.registerTask("build", ["less:production", "htmlmin:dist", "replace:dist", "clean", "uglify"]);
}