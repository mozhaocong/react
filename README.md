<!--
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 11:15:18
 * @LastEditTime: 2022-02-10 16:09:49
-->

# 项目为 webpack 打包项目

# 问题 1

Module parse failed: Unexpected token (10:9)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

# 原因：

说 webpack 不认识 这样的 jsx 语法。
所以需要有一个工具， 来将 JSX 的语法转为 JS 的语法。 因此 我们就有了 Babel 的这样一个工具。

# 解决 安装 babel，在 webpack 配置

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
{ rules: [ { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } } ]}

# 问题 2

构建报错
{ test: /\.css$/, use: ["css-loader", "style-loader"] },

# 原因：

顺序得从又到左
正确：{ test: /\.css$/, use: ["style-loader","css-loader"] },
