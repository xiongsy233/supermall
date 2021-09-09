<template>
  <div class="shop-info">
    <div class="shop-name-info">
      <img :src="shop.logo" alt="" /><span>{{ shop.name }}</span>
    </div>
    <div class="shop-descript-info">
      <div class="shop-all">
        <div class="shop-sells">
          <div class="count">{{ shop.sells > 9999 ?  (shop.sells/10000).toFixed(1)+"万" : shop.sells}}</div>
          <p>总销量</p>
        </div>
        <div class="shop-goods-count">
          <div class="count">{{ shop.goodsCount }}</div>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-about">
          <div class="about" v-for="(item,index) in shop.score" :key="index">
              <span class="shop-about-item">{{item.name}}</span>
              <span class="shop-about-score" :class="{'active-score': item.isBetter}">{{item.score}}</span>
              <span class="shop-about-isbetter" :class="{'active-isbetter': item.isBetter}" >{{item.isBetter ? "高":"低"}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.shop-info{
  margin-bottom: 30px;
}
.shop-name-info {
  width: 100%;
  padding: 20px 10px;
}
.shop-name-info img {
  width: 15%;
  border-radius: 50%;
  vertical-align: middle;
}
.shop-name-info span {
  margin: 0 20px;
  font-size: 20px;
}
.shop-descript-info{
    display: flex;
    margin: 0 10px;
}
.shop-all{
    display: flex;
}
.shop-all,.shop-about,.shop-goods-count,.shop-sells{
    flex: 1;
    text-align: center;
}
.shop-all .count{
    margin: 10px 0;
    font-size: 25px;
    color: #000;
}
.shop-all p{
    font-size: 16px;
    color: #000;
}
.shop-about{
    position: relative;
}
.about{
    width: 100%;
    padding: 5px 0;
}
.about span{
    display: inline-block;
    margin: 0 10px;
}
.shop-about-item{
    color: #333;
}
.shop-about-score{
    width: 30px;
}
.shop-about-score{
    color: green;
}
.shop-about-isbetter{
    background: green;
    color: #fff;
}
.active-score{
    color: var(--color-tint);
}
.active-isbetter{
   background: var(--color-tint); 
}
.shop-about::before{
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 1px;
    height: 80%;
    border: 1px solid #ccc;
}
</style>