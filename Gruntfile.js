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
        dist: 'index.html',
        // テーマ
        theme: 'jp', // default, beige, moon, night, serif, simple, sky, jp
        // トランジション
        transition: 'default', // default, cube, page, concave, zoom, linear, fade, none

        // ソースディレクトリ
        src: 'source',
        // テンプレートファイル
        template: 'template-revealjs.html',
        // 原稿ファイル
        md: 'slides.md'
    };

    grunt.initConfig({

        // パス設定のロード
        // ---------------------------------------------------
        path: pathConfig,

        // Pandoc 変換
        // ---------------------------------------------------
        exec: {
            pandoc: {
                cmd: 'pandoc --section-divs -t html5 -s --template <%= path.src %>/<%= path.template %> --variable theme="<%= path.theme %>" --variable transition="<%= path.transition %>" -o <%= path.app %>/<%= path.dist %> <%= path.src %>/<%= path.md %>'
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
                    '<%= path.app %>/<%= path.dist %>': '<%= path.app %>/<%= path.dist %>'
                }
            }
        }

    });

    // デフォルトタスク
    grunt.registerTask('default', [
        'exec:pandoc',
        'htmlmin:dist'
    ]);
};