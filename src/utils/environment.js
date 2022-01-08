export const isDev = process.env.NODE_ENV === 'development'

export const isProd = process.env.NODE_ENV === 'production'

export const pathname = window.location.pathname

export const search = window.location.search

const userAgent = navigator.userAgent
export const isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1 //android终端
export const isIos = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
