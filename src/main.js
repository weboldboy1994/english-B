//这个文件是根组件 new Vue，所有所需的模块和对象都要在new Vue之前配置好

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//手动引入
import axios from 'axios' //引入axios文件  
Vue.prototype.axios=axios //所有组件都是Vue.prototype的孩子
axios.defaults.withCredentials=true //让axios的请求携带验证信息到服务端（钥匙）


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
