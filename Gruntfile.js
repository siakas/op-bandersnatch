module.exports = function(grunt) {

    // パッケージファイルの指定
    var pkg = grunt.file.readJSON('package.json');

    // タスクのロード
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // パスの設定
    var pathConfig = {
        // プレゼンテーション
        app: 'reveal.js',
        // 出力ファイル名
        html: 'index.html',
        // テーマ
        theme: 'jp', // default, beige, moon, night, serif, simple, sky, jp
        // トランジション
        transition: 'default', // default, cube, page, concave, zoom, linear, fade, none

        // ソースディレクトリ
        src: 'source',
        // 変換用テンプレートファイル
        template: 'template-revealjs.html',
        // 原稿ファイル
        md: 'slides.md',

        // 公開用
        dist: 'presentation'
    };

    grunt.initConfig({

        // パス設定のロード
        // ---------------------------------------------------
        path: pathConfig,

        // Pandoc 変換
        // ---------------------------------------------------
        exec: {
            pandoc: {
                cmd: 'pandoc --section-divs -t html5 -s --template <%= path.src %>/<%= path.template %> --variable theme="<%= path.theme %>" --variable transition="<%= path.transition %>" -o <%= path.app %>/<%= path.html %> <%= path.src %>/<%= path.md %>'
            }
        },

        // HTML 圧縮
        // ---------------------------------------------------
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: false,
                },
                files: {
                    '<%= path.app %>/<%= path.html %>': '<%= path.app %>/<%= path.html %>'
                }
            }
        },

        // 公開用ファイルの生成
        // ---------------------------------------------------
        copy: {
            dist: {
                files: [
                    { expand: true, cwd: '<%= path.app %>/', src: ['**'], dest: '<%= path.dist %>/' }
                ]
            }
        },
        clean: {
            dist: {
                src: [
                    '<%= path.dist %>/node_modules',
                    '<%= path.dist %>/examples',
                    '<%= path.dist %>/Gruntfile.js',
                    '<%= path.dist %>/package.json',
                    '<%= path.dist %>/README.md'
                ]
            }
        },
        compress: {
            dist: {
                options: {
                    archive: '<%= path.dist %>.zip'
                },
                files: '<%= path.dist %>'
            }
        }

    });

    // デフォルトタスク
    grunt.registerTask('default', [
        'exec:pandoc',
        'htmlmin:dist'
    ]);

    // 公開用ファイルの出力
    grunt.registerTask('dist', [
        'exec:pandoc',
        'htmlmin:dist',
        'copy:dist',
        'clean:dist',
        'compress:dist'
    ]);
};