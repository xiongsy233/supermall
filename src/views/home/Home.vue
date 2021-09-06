<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <b-scroll
      class="b-scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </b-scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import BScroll from "components/common/scroll/BScroll.vue";
import Navbar from "components/common/navbar/Navbar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

export default {
  name: "Home",
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBack: false,
      tabOffsetTop:null,
      leaveY:0
    };
  },
  created() {
    this.getMultidata(),
      this.getGoods("pop"),
      this.getGoods("new"),
      this.getGoods("sell");
  },
  mounted() {
    // 1.监听图片加载完事件
    let refresh = this.debounce(this.$refs.scroll.refresh, 100);
    // 监听照片加载完成后，执行better-scroll里面的refersh()
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
    // 2.获取tab-control组件里元素的offsetTop高度
    // $el 可以获取组件里的元素
    // 延时获取，等其他图片加载完再获取高度，更准确
    // setTimeout(()=>{
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
    // },500)
   
  },
  // 周期函数 活跃时
  activated() {
    this.$refs.scroll.scrollTo(0,this.leaveY ,0)
    this.$refs.scroll.refresh()
  },
  // 周期函数，离开时
  deactivated() {
    this.leaveY= this.$refs.scroll.scroll.y
  },
  components: {
    BScroll,
    Navbar,
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /* 
    防抖动函数
     */
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this,args);
        }, delay);
      };
    },
    /* 
    事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 计算位置
    contentScroll(position) {
      this.isShowBack = position.y < -1000;
    },
    // 开始加载更多
    loadMore() {
      this.getGoods(this.currentType);
    },

    // 请求首页数据
    getMultidata() {
      getHomeMultidata().then((res) => {
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据
    getGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 完成加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

    
<style scoped>
#home {
  padding-top: 44px;
  /* vh  视口高度 */
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-tint);
  color:#fff;
  z-index: 1000;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
.b-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 55px;
  z-index: 0;
}
/* .b-scroll{
  height: calc(100vh - 93px);
  overflow: hidden;
} */
</style>