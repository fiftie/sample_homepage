// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/index.jsx',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'index.bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
      // {
      //   enforce: "pre",
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // },
      {
        // Babel を利用する
        loader: "babel-loader",
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES2019 を ES5 に変換
            "@babel/preset-env",
            // React の JSX を解釈
            "@babel/react"
          ]
        }
      },
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                "@babel/preset-env",
                // React の JSX を解釈
                "@babel/react"
              ]
            }
          }
        ]
      },
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "./src/js"),
      "node_modules",
    ],
    extensions: ['.js', '.jsx'],
  },
  // watchモードを有効にする
  watch: true,
};