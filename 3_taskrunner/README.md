# npm-scriptsを試してみる

### ディレクトリ移動（Terminalでコマンド実行）
```sh
cd 3_taskrunner/
```

### package.jsonファイルを作成（Terminalでコマンド実行）
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

### 必要なモジュールをインストール（Terminalでコマンド実行）
```sh
npm i buble node-sass npm-run-all pug-cli -D
```

### npm-scriptsにビルドタスクを記述（package.jsonを修正）
```json
"scripts": {
  "build": "run-s build:*",
  "build:html": "pug src/index.pug --out dist",
  "build:js": "buble src/js/app.js > dist/js/bundle.js",
  "build:css": "node-sass src/css/style.scss dist/css/style.css"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

### ビルド実行（Terminalでコマンド実行）
```sh
npm run build
```
  - dist/配下にhtml, js, cssが生成されているはず。

### dist/index.htmlをブラウザで確認してみる
  - html, js, cssが変換されてブラウザで問題なく確認できる
