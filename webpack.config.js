const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            // Moduleの名
            name: 'micro_frontend_1', 
            // Moduleの仕様書ファイルの名、あとは　アドレスの後に、Moduleの仕様書ファイルの名を書いたら、アクセスできる。
            filename: 'remoteEntry.js', 
            exposes: {
                // 左側はファイルの出力名 (Container側 import 'A/B' を書く時のBとなる)
                // 右側は実際に導入されるファイルのパス
                './MyName': './src/index' 
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}