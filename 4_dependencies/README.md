# dependenciesについて

### はじめに
- `is-leap-year`モジュールはサンプル用に作成したモジュールです
- npmには登録していません。(`npm i is-leap-year`ではinstallできません)
- `4_dependencies/is-leap-year`に実態があります

### ディレクトリ移動（Terminalでコマンド実行）
```sh
cd 4_dependencies/is-leap-year
```

### package.jsonファイルを作成（Terminalでコマンド実行）
```sh
npm init -y
```
  - カレントディレクトリに`package.json`を作成します
  - `-y`はオプションなので必須ではないです。

### [テスト用モジュール側]必要なモジュールをインストール（Terminalでコマンド実行）
```sh
npm i moment -S

npm i eslint -D
```
- momentはpackage.jsonの`dependencies`に追加される
- eslintはpackage.jsonの`devDependencies`に追加される
  - `.eslintrc`は追加済みです
  - 補足: `eslint index.js`をnpm scriptsに追加して、実行するとlintがかかります

### 必要なモジュールをインストール（Terminalでコマンド実行）
```sh
# 4_dependencies/ 直下に移動
cd ../

# 4_dependencies/package.jsonを元にモジュールをインストール
npm i
```
- `4_dependencies/node_modules`に`is-leap-year`と`moment`がインストールされている
- `4_dependencies/node_modules`に`eslint`はインストールされていない

### 実行（Terminalでコマンド実行）
```
# 2018年がうるう年か判定

node main.js 2018
```

### まとめ
- 開発時にしか使わないモジュールなどは`devDependencies`
  - eslintは開発時のlintツールなので、モジュールとしての機能には必要ない
- モジュールとして動作する時に必要なものは`dependencies`
  - is-leap-yearの場合は年の判定で`moment`を仕様しているため、
  is-leap-yearは`moment`に依存している。
