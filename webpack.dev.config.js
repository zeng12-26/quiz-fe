const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config')

//mockServer,本地服务器请求数据
const express = require('express')
const app = express() //请求server
const mockData = require('./src/mockServer/mockData.json')
const apiRoutes = express.Router()
app.use('/quiz', apiRoutes)

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 9001,
    hot: true,
    host: 'localhost',
    compress: true,
    open: true,
    historyApiFallback: {
      index: '/index.html',
    },
    publicPath: '/',
    proxy: {
      '/quiz': {
        target: 'http://quiz.csst.cmburl.cn/',
        changeOrigin: true,
        secure: false,
      },
    },
    disableHostCheck: true,
    //mockserve setting
    // before(app) {
    //   app.get('/quiz/car-sticker/user-quiz/quiz-details', (req, res) => {
    //     res.json(mockData.welfareAmount)
    //   })
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
})
