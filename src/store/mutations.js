import {ADD_COUNTER,ADD_GOODS} from './mutations-type'
export default {
    [ADD_COUNTER](state, payLoad) {
        payLoad.count++
      },
      [ADD_GOODS](state, payLoad) {
        payLoad.checked = true
        state.cartlist.push(payLoad)
      }
}