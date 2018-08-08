import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('./views/Axios.vue')
    },
    {
      path: '/muse-ui',
      name: 'muse-ui',
      component: () => import('./views/Muse-UI.vue'),
      children:[
        {
          path:'page1',
          component: () => import('./components/Ui1.vue')
        },
        {
          path:'page2',
          component: () => import('./components/Ui2.vue')
        }
      ]
    }
  ]
})
