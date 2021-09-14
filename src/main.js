import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index'
import fastclick from 'fastclick'
import lazyload from 'vue-lazyload'

Vue.config.productionTip = false
// 在vue的原型对象里创建$bus 为vue实例  来作为事件总线  解决不相干组件的参数传递
Vue.prototype.$bus= new Vue()
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
fastclick.attach(document.body)
// 安装图片懒加载插件
Vue.use(lazyload)
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
