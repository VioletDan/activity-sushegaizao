import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'

Vue.use(Router)

function loadView (view, view2) {
  return () =>
    import(/* webpackChunkName: "view" */ `./views/${view}/${view2 ||
      view}.vue`)
}

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/refresh',
      name: 'refresh',
      component: loadView('refresh')
    },
    {
      path: '/index',
      name: 'index',
      component: resolve =>
        require(['./views/index.vue'], resolve)
    },
    {
      path: '*',
      component: loadView('notFound')
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.toast = Toast.loading({
    duration: 0,
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner'
  })
  next()
  // if (to.fullPath === '/refresh') {
  //   next(from.fullPath)
  // } else {
  //   next()
  // }
})

router.afterEach((to, form) => {
  window.toast.clear()
})

export default router
