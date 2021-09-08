<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-goods-info :goods="goods"></detail-goods-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

// 请求详情页数据
import { getDetailData, Goods, Shop } from "network/detail.js";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailShopInfo from './childComps/DetailShopInfo.vue';
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
  },

  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
    };
  },

  created() {
    this.id = this.$route.params.id;
    getDetailData(this.id).then((res) => {
      console.log(res);
      const data = res.result;
      // 请求详情页图片数据
      this.topImages = data.itemInfo.topImages;
      // 请求商品标题价格数据
      this.goods = new Goods(
        data.columns,
        data.itemInfo,
        data.shopInfo.services
      );
      // 请求商品店铺数据
      this.shop = new Shop(data.shopInfo);
    });
  },
  methods: {},
};
</script>

<style scoped>
</style>