import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 在vue的原型对象里创建$bus 为vue实例  来作为事件总线  解决不相干组件的参数传递
Vue.prototype.$bus= new Vue()
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
