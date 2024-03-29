import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/log',
    name: 'log',
    // lazy 懒加载。只有在真正访问到这个页面的时候才会加载相关代码Other
    component: () => import( /* webpackChunkName: "about" */ '../views/LogView.vue')
  },
  {
    path: '/log-detail/:id',
    name: 'log-detail',
    component: () => import( /* webpackChunkName: "about" */ '../views/LogDetailView.vue')
  },
  {
    path: '/ocr',
    name: 'ocr',
    component: () => import( /* webpackChunkName: "about" */ '../views/OCRView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import( /* webpackChunkName: "about" */ '../views/StoreView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router