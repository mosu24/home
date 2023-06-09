const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  //publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  outputDir: 'docs',
  transpileDependencies: ["vuetify"],
  filenameHashing: false, //ビルドのたびにファイルリネーム扱いになるのが気持ち悪いので false に設定する。
});
