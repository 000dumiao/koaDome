import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import content from '../views/content/content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: content,
      children: [
        {
          path: '',
          component: Home,
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: content,
    //   children: [
    //     {
    //       path: '',
    //       component: () => import('../views/About.vue')
    //     }
    //   ]
    // },
    {
      path: '/register',
      name: 'register',
      component: content,
      children: [
        {
          path: '',
          component: () => import('../views/register/register.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: content,
      children: [
        {
          path: '',
          component: () => import('../views/login/login.vue')
        }
      ]
    },
    // {
    //   path: '/register',  //注册
    //   name: 'register',
    //   component: () => import('../views/register/register.vue')
    // },
    // {
    //   path: '/login',  //登录
    //   name: 'login',
    //   component: () => import('../views/login/login.vue')
    // }
  ]
})
