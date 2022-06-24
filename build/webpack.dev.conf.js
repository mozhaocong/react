/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 11:01:19
 * @LastEditTime: 2022-02-10 16:31:52
 */
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.conf");
const options = merge(webpackConfigBase, {
  mode: "development",
  devServer: { open: true, port: 3000, hot: true },
});
module.exports = options;
