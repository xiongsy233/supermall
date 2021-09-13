import {ADD_COUNTER,ADD_GOODS} from './mutations-type'
export default{
    addCart(context, payLoad) {
        // 判断商品是否为新添加
        let oldProduct = null
        for (let item of context.state.cartlist) {
          if (item.iid === payLoad.iid) {
            oldProduct = item;
          }
        }
        // 判断oldProduct
        if (oldProduct) {
          context.commit(ADD_COUNTER, oldProduct)
        } else {
          payLoad.count = 1
          context.commit(ADD_GOODS, payLoad)
        }
      }
}