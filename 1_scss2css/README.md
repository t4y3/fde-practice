# scssをcssに変換してみる

### ディレクトリ移動（Terminalでコマンド実行）
```sh
cd 1_scss2css/
```

### package.jsonファイルを作成（Terminalでコマンド実行）
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

### 必要なモジュールをインストール（Terminalでコマンド実行）
```sh
npm i node-sass -D
```
  - モジュールをインストールすると`node_modules/`フォルダに格納されます。  
  `node_modules/`がない場合はフォルダ毎生成されます。
  - `-D`は依存関係に関するオプションで必須ではないです。

### npm-scriptsにビルドタスクを記述（package.jsonを修正）
```json
"scripts": {
  "build:css": "node-sass style.scss style.css"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

### ビルド実行（Terminalでコマンド実行）
```sh
npm run build:css
```
  - style.cssが生成されているはず
