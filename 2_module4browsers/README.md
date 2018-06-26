# npmのモジュールをブラウザでも使用できるようにしてみる

## moment.jsをNode.jsで使う

### ディレクトリ移動（Terminalでコマンド実行）
```sh
cd 2_module4browsers/
```

### package.jsonファイルを作成（Terminalでコマンド実行）
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

### 必要なモジュールをインストール（Terminalでコマンド実行）
```sh
npm i moment -S
```

### Node.jsで実行（Terminalでコマンド実行）
```sh
# 現在日付がconsoleに表示されればOK
node main.js
```

### index.htmlをブラウザで確認してみる
  - `Uncaught ReferenceError: require is not defined`が出ることを確認！

### まとめ
- requireはブラウザでエラー

---

## moment.jsをブラウザで使う(rollup.js)

### 必要なモジュールをインストール（Terminalでコマンド実行）
```sh
npm i rollup rollup-plugin-commonjs rollup-plugin-node-resolve -D
```
  - モジュールをインストールすると`node_modules/`フォルダに格納されます。  
  `node_modules/`がない場合はフォルダ毎生成されます。
  - `-D`は依存関係に関するオプションで必須ではないです。

### npm-scriptsにビルドタスクを記述（package.jsonを修正）
```json
"scripts": {
  "build:js": "rollup -c"
},
```
  - `package.json`の`scripts`に記述したコマンドは、`npm run {コマンド名}`で実行できます。

### ビルド実行（Terminalでコマンド実行）
```sh
npm run build:js
```
  - bundle.jsが生成されているはず

### index.htmlをブラウザで確認してみる
  - index.htmlのscriptのファイル名を`main.js`->`bundle.js`に変更
  - `console`で現在時刻が表示されていればOK

### まとめ
- モジュールバンドラーを使用することで、requireなどをまとめてファイルを生成をしてくれる。
- requireが展開されている状態になるため、ブラウザでも問題なく動作する。