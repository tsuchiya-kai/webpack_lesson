// nodemoduleのpathモジュールをrequire
const path = require('path');

//__dirnameはこのディレクトリのrootのパス、distという文字列と連結してパスを作っている
const outputPath = path.resolve(__dirname, 'dist');

//consoleはターミナルに出力される
console.log(`outputPathcは${outputPath}`);

module.exports = {
  entry: './src/index.js', //モジュールバンドルの対象
  output: {
    filename: 'main.js',
    path: outputPath, //パスというkeyで出力先の場所を指定、絶対パスで指定（nodemoduleのpathモジュールを使用する）
  },
  module: { //loaderの設定を記述
    rules: [
      //個々のloaderの詳細を記述
      {
        test: /\.css$/,//適用するファイルを指定
        use: [
          'style-loader','css-loader'
        ] //使うloaderを指定 css-loader:cssをバンドル　style-loader: styleの適用
      },
    ],
  },
  devServer: {
    contentBase:outputPath,
  }
};
