/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 15:19:46
 * @LastEditTime: 2022-02-09 15:21:44
 */
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.conf");
const options = merge(webpackConfigBase, {
  mode: "production",
});
module.exports = options;
