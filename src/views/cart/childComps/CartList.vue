<template>
  <ul class="cart-list">
    <li v-for="(item, index) in cartlist" :key="index" class="goods-info">
      <div class="checkbox">
        <img src="~assets/img/cart/tick.svg" alt="" @click="isChecked(item)" :class="{active: item.checked}">
      </div>
      <div class="image">
        <img :src="item.imag" alt="" />
      </div>
      <div class="item">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <div class="price-cpunt">
          <div class="price">{{'￥'+item.price}}</div>
          <div class="count">{{'×'+item.count}}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  name: "CartList",
  data() {
    return {
    };
  },
  computed: {
    // 接收添加购物车的数据，从vuex里的getters里获取
    ...mapGetters(["cartlist"]),
  },
  methods: {
      isChecked(item){
        item.checked = !item.checked
      }
  },
};
</script>

<style scoped>
.goods-info {
  display: flex;
  width: 100%;
  height: 120px;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.checkbox {
  display: flex;
  width: 20px;
  height: 100%;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
}
.checkbox img{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
}
.active{
  background: var(--color-tint);

}
.image {
  width: 80px;
}
.image img {
  height: 100%;
  border-radius: 10px;
}
.item {
    width: 0;
  flex: 1;
}
h3,
p {
  margin-bottom: 10px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
p {
  font-size: 14px;
}
.price-cpunt{
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
}
.price{
  color: var(--color-tint);
}
</style>