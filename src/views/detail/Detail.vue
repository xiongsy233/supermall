<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <b-scroll class="b-scroll" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-details-info :goodsInfo="goodsInfo" @imgLoad="imgLoad"></detail-details-info>
      <detail-goods-param :goodsParam="goodsParam"></detail-goods-param>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
    </b-scroll>
    <!-- <back-top @click.native="backClick" v-show="isShowBack"></back-top> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailDetailsInfo from './childComps/DetailDetailsInfo.vue';
import DetailGoodsParam from './childComps/DetailGoodsParam.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';

import BScroll from "components/common/scroll/BScroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";

// 请求详情页数据
import { getDetailData, Goods, Shop,GoodsParam } from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    BScroll,
    BackTop,
    DetailDetailsInfo,
    DetailGoodsParam,
    DetailCommentInfo
  },

  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      isShowBack: false,
      goodsInfo:{},
      goodsParam:{},
      commentInfo:[]
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
      // 请求detailInfo
      this.goodsInfo = data.detailInfo
      // 请求商品参数
      this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 请求评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list
      }
    });
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    imgLoad(){
      this.$refs.scroll.refresh()
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  background: #fff;
  z-index: 999;
}
.b-scroll{
   height: calc(100vh - 93px);
   overflow: hidden;
}
</style>