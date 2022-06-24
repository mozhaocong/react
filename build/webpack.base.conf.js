/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 11:01:34
 * @LastEditTime: 2022-02-15 17:05:56
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //动态创建html 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'static/js/[name]_[contenthash].js',
    pathinfo: false,
    clean: true
  },
  devServer: {
    port: 3000,
    historyApiFallback: true, // 解决BrowserRouter路由跳转之后刷新浏览器按钮报404的情况
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: /src/,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[name]-[hash:5][ext]'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'), // 添加模版文件
      filename: 'index.html'
    }),
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(':percent')} (:elapsed s)`
    }) // 进度条
  ],
  resolve: {
    symlinks: false,
    alias: {
      '@': path.join(__dirname, '../src')
    },
    extensions: ['.tsx', '.ts', '.js', 'jsx'] //引入文件时无需加以上后缀
  }
}
