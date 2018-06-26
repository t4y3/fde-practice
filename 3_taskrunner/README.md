# npm-scriptsを試してみる

1. ディレクトリ移動
```sh
cd 3_taskrunner/
```

1. package.jsonファイルを作成
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

1. 必要なモジュールをインストール
```sh
npm i buble node-sass npm-run-all pug-cli -D
```

1. npm-scriptsにビルドタスクを記述
```json
"scripts": {
  "build": "run-s build:*",
  "build:html": "pug src/index.pug --out dist",
  "build:js": "buble src/js/app.js > dist/js/bundle.js",
  "build:css": "node-sass src/css/style.scss dist/css/style.css"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

1. ビルド実行
```sh
npm run build
```
  - dist/配下にhtml, js, cssが生成されているはず。

1. dist/index.htmlをブラウザで確認してみる
  - html, js, cssが変換されてブラウザで問題なく確認できる
