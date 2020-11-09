import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: '',
          component: () => import('./views/home'),
      },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home'),
        children:[
            {
                path: 'English',
                name: 'English',
                component: () => import('./views/English.vue'),
            },
        ]
    },
  ],

})
