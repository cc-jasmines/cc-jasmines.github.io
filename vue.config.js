var path = require('path')

module.exports = {
  publicPath: './',
  //   当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  //   放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  //   是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  //   生产环境是否生成 sourceMap 文件,sourceMap的详解请看末尾
  productionSourceMap: true
}
