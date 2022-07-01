/*
 * @Description:
 * @Author: wanghengzhen
 * @Date: 2022-02-09 11:01:19
 * @LastEditTime: 2022-02-10 16:31:52
 */
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.conf");
const target = 'http://mall-dev.app.htwig.com/'

const options = merge(webpackConfigBase, {
  mode: "development",
  devServer: { open: false, port: 3000, hot: true, historyApiFallback: true,
    proxy: {
      '/v3/': {
        target: target,
        // target: goodsUrl,
        changeOrigin: true,
      },
    },
  },
});
module.exports = options;
