
const path = require('path')   
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 导入html-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //插件 可以覆盖旧的打包文件

module.exports = {

  mode: 'development',    //开发环境（程序员看） ,production(生产环境)
  
  
  
  entry: "./src/index.js",     // 入口

  // 出口
  output: {
    path: path.resolve(__dirname, "dist"),  //出口文件路径
    filename: 'bundle.js'    //  出口文件名
  },


  plugins: [
      new CleanWebpackPlugin(),   //清除旧的打包文件

      //生成html
      new HtmlWebpackPlugin({
            // 指定模板文件路径
            template: path.join(__dirname, 'index.html'),
            title:'给index.html起一个标题名'
          })
    ],



  devServer: {
    // 自动打开浏览器
    open: true,
    // 修改端口号
    port: 3000,
    // 热更新: 只将修改过得内容加载到页面中, 而不是刷新整个页面
    // 第一步:02
    // hot: true
  },

  // 配置loader
  module: {
    rules: [
      { test: /\.(png|jpg|gif)$/, 
        use: ['style-loader', 'css-loader'] 
      }
    ]
  },

}