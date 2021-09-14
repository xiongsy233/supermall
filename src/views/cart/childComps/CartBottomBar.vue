<template>
  <div class="bottom-bar">
    <div class="checked">
      <img
        src="~assets/img/cart/tick.svg"
        alt=""
        @click="isCheck"
        :class="{ active:isShow}"
      />
      <span>全选</span>
      <span>合计:￥{{ totalPrice }}</span>
    </div>
    <div class="buy" @click="bottomClick">去购买({{ totalCount }})</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  data() {
    return {
    };
  },
  props:{
      isShow:{
          type:Boolean,
          default:false
      }
  },
  computed: {
    totalPrice() {
      return this.$store.getters.cartlist
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.$store.getters.cartLength;
    }, 
  },
  methods: {
    isCheck() {
        if(this.isShow){
           this.$store.getters.cartlist.forEach(ele => {
               ele.checked = false
           }); 
        }else{
            this.$store.getters.cartlist.forEach(ele => {
               ele.checked = true
           }); 
        }
    },
    bottomClick(){
      if(!this.isShow){
        this.$toast.show('请先选择商品',2000)
      }
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid #ccc;
}
.checked {
  margin: 0 10px;
}
.checked img {
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid #ccc;
  vertical-align: middle;
}
.active {
  background: var(--color-tint);
}
.checked span {
  font-size: 14px;
  margin-right: 10px;
  vertical-align: middle;
}
.buy {
  position: absolute;
  right: 0;
  width: 30%;
  background: chocolate;
  color: #fff;
  text-align: center;
}
</style>