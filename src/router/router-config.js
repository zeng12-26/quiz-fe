const homePage = () => import('../page/home/index.vue');
const detailPage = () => import('../page/detail/index.vue');
const resultPage = () => import('../page/result/index.vue');

const routerConfig = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: 'home',
  },
  {
    path: '/detail',
    name: 'detail',
    component: detailPage,
    meta: 'detail',
  },
  {
    path: '/result',
    name: 'result',
    component: resultPage,
    meta: 'result',
  }
]

export default routerConfig
