import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: '',
          component: () => import('./views/Home'),
      },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: () => import('./views/Home'),
    //     children:[
    //         {
    //             path: 'one',
    //             name: 'one',
    //             component: () => import('./components/one.vue'),
    //         },
    //         {
    //             path: 'two',
    //             name: 'two',
    //             component: () => import('./components/two.vue'),
    //         },
    //     ]
    // },
  ],

})
