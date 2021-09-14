<template>
  <div id="detail">
    <detail-nav-bar @tabClick="tabClick" ref="navbar"></detail-nav-bar>
    <b-scroll
      class="b-scroll"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
      :pull-up-Load="true"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-goods-info :goods="goods"></detail-goods-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-details-info
        :goodsInfo="goodsInfo"
        @imgLoad="imgLoad"
      ></detail-details-info>
      <detail-goods-param
        ref="param"
        :goodsParam="goodsParam"
      ></detail-goods-param>
      <detail-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommend"></goods-list>
    </b-scroll>
    <detail-bottom-bar @addCar="addCar"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailDetailsInfo from "./childComps/DetailDetailsInfo.vue";
import DetailGoodsParam from "./childComps/DetailGoodsParam.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import BScroll from "components/common/scroll/BScroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

// 请求详情页数据
import {
  getDetailData,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail.js";

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
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      isShowBack: false,
      goodsInfo: {},
      goodsParam: {},
      commentInfo: [],
      recommend: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBack: false,
    };
  },

  created() {
    this.id = this.$route.params.id;
    getDetailData(this.id).then((res) => {
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
      this.goodsInfo = data.detailInfo;
      // 请求商品参数
      this.goodsParam = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 请求评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list;
      }
      this.$nextTick(() => {});
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      // 获取组件里的属性，要加$el
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    contentScroll(position) {
      let contentY = -position.y;
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // if (
        //   contentY > this.themeTopYs[i] &&
        //   contentY < this.themeTopYs[i*1 + 1]
        // ) {
        //   console.log(i);
        // }
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            contentY > this.themeTopYs[i] &&
            contentY < this.themeTopYs[i * 1 + 1]) ||
            (i === length - 1 && contentY > this.themeTopYs[i]))
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      // 计算显示位置
      this.isShowBack = position.y < -1000;
    },
    addCar() {
      let product = {};
      product.imag = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.id;
      // 将商品添加到购物车 将数据product传到vuex
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res, 2000);
      });
    },
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
.b-scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>