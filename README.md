# バージョン

0.1.0

# 使い方

Node.js と Pandoc のインストールが必要です。それぞれのインストールについては、公式サイトを参照してください。

* [Node.js](http://nodejs.org/)
* [Pandoc](http://johnmacfarlane.net/pandoc/)

また、タスクの実行に Grunt を利用しているので、Grunt が入っていない場合はインストールしてください（バージョン４系）。

    npm install -g grunt-cli

## プロジェクトを作成する

任意のディレクトリに bandersnatch を適当なディレクトリ名で clone します。

    git clone https://github.com/siakas/bandersnatch.git sample

ファイル一式が取得できたら、Grunt タスクを実行する node_modules をインストールします。

    cd sample && npm install

これで準備完了です。

## 原稿の作成

`source` ディレクトリの slides.md が原稿ファイルになります。

## Pandoc による変換

Pandoc による変換は Grunt を通じて実行します。

    cd sample
    grunt

※sample ディレクトリにいる場合は、cd の実行は不要です。

## 公開用ファイルの生成

不要ファイルを除いた公開用ディレクトリ（デフォルト名：`presentation`）を作成し、同時にアーカイブも作成します。

    grunt dist
