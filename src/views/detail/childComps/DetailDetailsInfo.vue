<template>
  <div class="detail-info">
    <div class="detail-list">
      <img
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDetailInfo",
  data() {
    return {
        counter:0,
        imageListlength:0
    };
  },
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
      goodsInfo(){
          this.imageListlength = this.goodsInfo.detailImage[0].list.length
      }
  },
  methods: {
      imgLoad(){
          if(++this.counter === this.imageListlength){
              this.$emit("imgLoad")
          }
      }
  },
};
</script>

<style scoped>
.detail-list img{
    width: 100%;
}
</style>