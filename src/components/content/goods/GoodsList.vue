<template>
  <div class="goods-list">
  
      <goods-list-item v-for="(item, index) in goods" :item='item' :key="index">
    
    </goods-list-item>

  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default: {
        return: [],
      },
    },
  },
};
</script>

<style scoped>
.goods-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content:space-around;
}
</style>