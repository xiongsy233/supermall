<template>
  <div class="goods-list-item">
    <a :href="item.link">
      <img :src="item.show.img" alt="" />
      <span class="item-title">{{ item.title }}</span>
      <span class="price">{{ item.price }}</span>
      <span class="collect">{{ item.cfav }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  margin: 5px 0;
  font-size: 14px;
  text-align: center;
}
.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}
.item-title {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}
.price {
    margin-right: 20px;
 color: var( --color-tint);
}
.collect{
    position: relative;
}
.collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>