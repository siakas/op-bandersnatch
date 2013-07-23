% Markdown to Reveal.js
% Sanshiroh Sakai
% 2013/07/23

# 大見出し

## 中見出し

ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト

## 中見出し

ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト

* this
* is
* cool

# 変数設定

The following variables can be defined from the command line:

* theme
* transition

```bash
pandoc -t html5 --template=template-revealjs.html \
	--standalone --section-divs \
  --variable theme="beige" \
  --variable transition="linear" \
  slides.md -o slides.html
```

# 大見出し

1. リスト
2. リスト
3. リスト
4. リスト

テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

    npm install && grunt

# 大見出し

テキストテキストテキストテキストテキストテキストテキストテキスト

* this
    * is
        * cool
    * is
        * hot
* OK
* Thank you