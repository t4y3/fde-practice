# scssをcssに変換してみる

1. ディレクトリ移動
```sh
cd 1_scss2css/
```

1. package.jsonファイルを作成
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

1. 必要なモジュールをインストール
```sh
npm i node-sass -D
```
  - モジュールをインストールすると`node_modules/`フォルダに格納されます。  
  `node_modules/`がない場合はフォルダ毎生成されます。
  - `-D`は依存関係に関するオプションで必須ではないです。

1. npm-scriptsにビルドタスクを記述
```json
"scripts": {
  "build:css": "node-sass style.scss style.css"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

1. ビルド実行
```sh
npm run build:css
```
  - style.cssが生成されているはず
