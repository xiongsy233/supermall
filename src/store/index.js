import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'
Vue.use(Vuex)

let state = {
  cartlist: []
}
export default new Vuex.Store({
  state,
  mutations,
    // mutations唯一的目的就是修改state中的状态
  actions,
  getters,
  modules: {
  }
})
