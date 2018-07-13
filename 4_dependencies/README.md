# dependenciesについて(-S, -D)

### はじめに
- `is-leap-year`モジュールはサンプル用に作成したモジュールです
- npmには登録していません。(`npm i is-leap-year`ではinstallできません)
- `4_dependencies/is-leap-year`に実態があります

## テスト用モジュール側

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

### モジュール側で必要なパッケージをインストール（Terminalでコマンド実行）
```sh
# npm i moment --saveと同じ
npm i moment -S
```
```sh
# npm i eslint --save-devと同じ
npm i eslint -D
```
- momentはpackage.jsonの`dependencies`に追加される
- eslintはpackage.jsonの`devDependencies`に追加される

### 確認用にモジュール側のnode_modules/を削除しておく（Terminalでコマンド実行）
```sh
rm -rf node_modules/
```
---

## プロジェクト側

### ディレクトリ移動（Terminalでコマンド実行）
```sh
# 4_dependencies/ 直下に移動
cd ../
```

### package.jsonファイルを作成（Terminalでコマンド実行）
```sh
npm init -y
```
### プロジェクトにテスト用モジュールをインストール（Terminalでコマンド実行）
```sh
# テスト用モジュールをプロジェクトにインストール
npm i ./is-leap-year -S
```
- `4_dependencies/node_modules`に`is-leap-year`と`moment`がインストールされている
- `4_dependencies/node_modules`に`eslint`はインストールされていない
- 補足: [npmはローカルのパス指定も可能](https://docs.npmjs.com/files/package.json#local-paths)

### 実行（Terminalでコマンド実行）
```
# 2018年がうるう年か判定

node main.js 2018
```

### まとめ
- -S, -Dの使い分けはpackageとして公開する場合は意識する必要がある
  - プロジェクトでの場合はそこまで意識しなくてもそこまで問題はない
- 開発時にしか使わないモジュールなどは`devDependencies`
  - eslintは開発時のツールなので、モジュールとしての機能には必要ない
- モジュールとして動作する時に必要なものは`dependencies`
  - is-leap-yearの場合は年の判定で`moment`を仕様しているため、
  is-leap-yearは`moment`に依存している。
