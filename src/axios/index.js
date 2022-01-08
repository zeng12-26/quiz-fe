import axios from 'axios'
import { Toast } from 'vant'
import { isDev } from '../utils/environment'
import _ from 'lodash'

const baseUrl = {
  prod: window.location.origin + '/quiz',
  local: '/quiz',
}
const host = isDev ? baseUrl.local : baseUrl.prod
axios.defaults.crossDomain = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const httpInstance = axios.create({
  baseURL: host,
  timeout: 20000,
})

//请求拦截器K
httpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    Toast('请求超时!')
    return Promise.reject(err)
  }
)
//响应拦截器
httpInstance.interceptors.response.use(
  (data) => {
    return data
  },
  (err) => {
    // 当响应异常时做一些处理
    if (err && err.response) {
      switch (err.response.status) {
        case 401:
          err.message = '用户信息校验失败，请重新登录'
          Toast('您的账号已在其他设备登录，请重新登录')
          break
        case 404:
          err.message = '请求不存在'
          break
        default:
          err.message = _.get(err, ['response', 'data', 'message']) || '服务异常，请稍后再试'
      }
    }
    Toast(err.message)
    return Promise.reject(err)
  }
)

export default httpInstance
