<template>
  <div class="detail-swiper">
    <swiper class="swiper-view">
      <swiper-item v-for="(item,index) in topImages" :key="index">
          <a href="">
              <img :src="item" alt="">
          </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "DetailSwiper",
  data() {
    return {};
  },
  components: { 
      Swiper, 
      SwiperItem 
      },
      props:{
          topImages:{
              type:Array,
              default(){
                  return []
              }
          }
      },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.swiper-view{
    height: 300px;
    overflow: hidden;
}

</style>