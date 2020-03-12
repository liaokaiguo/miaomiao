import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path:'/*',
      redirect:'/movie'
    }/*路由重定向，当找不到路由时，默认地址页面*/
  ]
})
