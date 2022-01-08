require('@babel/polyfill')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const pxtorem = require('postcss-pxtorem')

//postcss-pxtorem  是PostCss的一个插件，用来将 px 转换为 rem
//PostCss : 是一个用 JavaScript 工具和插件转换 CSS 代码的工具


module.exports = {
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.vue','.js', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', //放在这'style-loader','css-loader'后面，sass-loader前面
            options: {
              ident: 'postcss', //当引入外部的依赖包作为组件配置项时需要定义一个唯一的标识符，推荐这样写
              plugins: [
                pxtorem({
                  rootValue: 16, //表示根元素html的fontSize值,也可以是100,获取任意其他值
                  propList: ['*'], //设置px转换成rem的属性值，*表示全匹配，
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|jpe?g|png)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      chunksSortMode: 'none',
    }),
  ],
}
