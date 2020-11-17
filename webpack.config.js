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
};
