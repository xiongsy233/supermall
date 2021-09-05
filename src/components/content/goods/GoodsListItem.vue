<template>
  <div class="goods-list-item">
    <a :href="item.link">
      <img :src="item.show.img" alt=""   @load="imgLoad"/>
      <div class="goods-info">
        <p class="item-title">{{ item.title }}</p>
        <span class="price">{{ item.price }}</span>
        <span class="collect">{{ item.cfav }}</span>
      </div>
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
  methods: {
    // 照片加载完执行
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    }
  },
};
</script>

<style scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  margin: 5px 0;
  padding-bottom:30px ;
  font-size: 12px;
  text-align: center;
}
.goods-list-item img {
  width: 100%;
  border-radius: 10px;
}
.goods-info{
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 5px;
}
.item-title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
}
.price {
  margin-right: 20px;
  color: var(--color-tint);
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>