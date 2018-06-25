# npmのモジュールをブラウザでも使用できるようにしてみる

## moment.jsをNode.jsで使う

1. ディレクトリ移動
```sh
cd 2_module4browsers/
```
1. package.jsonファイルを作成
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。
1. 必要なモジュールをインストール
```sh
npm i moment -S
```
1. Node.jsで実行
```sh
# 現在日付がconsoleに表示されればOK
ndoe main.js
```
1. index.htmlをブラウザで確認してみる
  - `Uncaught ReferenceError: require is not defined`が出ることを確認！

### まとめ
- requireはブラウザでエラー

---

## moment.jsをブラウザで使う(rollup.js)

1. ディレクトリ移動
```sh
cd 2_module4browsers/
```
1. 必要なモジュールをインストール
```sh
npm i rollup rollup-plugin-commonjs rollup-plugin-node-resolve -D
```
  - モジュールをインストールすると`node_modules/`フォルダに格納されます。  
  `node_modules/`がない場合はフォルダ毎生成されます。
  - `-D`は依存関係に関するオプションで必須ではないです。

1. npm-scriptsにビルドタスクを記述
```json
"scripts": {
  "build:js": "rollup -c"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

1. ビルド実行
```sh
npm run build:js
```
  - bundle.jsが生成されているはず

1. index.htmlをブラウザで確認してみる
  - index.htmlのscriptのファイル名を`main.js`->`bundle.js`に変更
  - `console`で現在時刻が表示されていればOK

### まとめ
- モジュールバンドラーを使用することで、requireなどをまとめてファイルを生成をしてくれる。
- requireが展開されている状態になるため、ブラウザでも問題なく動作する。