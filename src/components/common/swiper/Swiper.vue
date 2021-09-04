<template>
  <div id="banner-swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator">
        <div
          class="cycle-item"
          v-for="(item, index) in slideCount"
          :class="{ active: index === slideIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  porps: {},
  data() {
    return {
      slideCount: 0, //实体（图片）数量
      swiperWidth: 0, //swiper的宽度
      swiperStyle: {}, //swiper的样式
      slideIndex: 1, //当前index
      scrolling: false, //当前是否滚动
    };
  },
  //生命周期函数，挂载，渲染结束后，开始
  mounted() {
    setTimeout(() => {
      // 执行handleDom 在轮播图首尾添加上尾首照片，为了衔接
      this.handleDom();

      //   开始轮播
      this.startTimer();
    }, 100);
  },
  methods: {
    // 轮播设置
    startTimer() {
      this.playTimer = setInterval(() => {
        this.slideIndex++;
        this.scrollContent(-this.slideIndex * this.swiperWidth);
      }, 3000);
    },
    // 停止轮播
    stopTimer() {
      clearInterval(this.playTimer);
    },
    // 滚动到正确位置
    scrollContent(distance) {
      // 开始滚动
      this.scrolling = true;

      this.swiperStyle.transition = `transform 1s`;
      this.setSlide(distance);
      // 检测滚动后的位置是否正确，主要是将最后一页直接拉回到第一页
      this.chenckPosition();
      // 滚动结束
      this.scrolling = false;
    },
    // 检查滚动位置
    chenckPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = `transform 0s`;
        if (this.slideIndex > this.slideCount) {
          this.slideIndex = 1;
          this.setSlide(-this.slideIndex * this.swiperWidth);
        } else if (this.slideIndex <= 0) {
          this.slideIndex = this.slideCount;
          this.setSlide(-this.slideIndex * this.swiperWidth);
        }
      }, 1000);
    },
    //  设置显示的位置
    setSlide(distance) {
      this.swiperStyle.transform = `translateX(${distance}px)`;
    },
    //
    //前后添加DOM元素
    handleDom() {
      // 1.获取DOM元素
      const swiperEl = document.querySelector(".swiper");
      const slidesEls = document.getElementsByClassName("slide");
      // 2.确认照片个数
      this.slideCount = slidesEls.length;
      // 3.照片大于1时，才有轮播效果。所以大于1开始首尾添加元素照片
      if (this.slideCount > 1) {
        let firstClone = slidesEls[0].cloneNode(true);
        let lastClone = slidesEls[slidesEls.length - 1].cloneNode(true);
        swiperEl.appendChild(firstClone);
        swiperEl.insertBefore(lastClone, slidesEls[0]);
        this.swiperWidth = swiperEl.offsetWidth; //设置宽度
        this.swiperStyle = swiperEl.style; //设置样式
      }
      // 让照片回滚到第一张照片
      this.setSlide(-this.swiperWidth);
    },
    // 手指触摸屏幕事件
    touchStart(e) {
      // 判断是否在滚动中，滚动中不可拖动
      if (this.scrolling) {
        return;
      } else {
        // 停止定时器滚动
        this.stopTimer();
        // 读取当前手指触点位置x距离
        this.startX = e.touches[0].pageX;
        // console.log(this.startX);
      }
    },
    // 手指移动屏幕事件
    touchMove(e) {
      // 读取移动后的距离
      this.currentX = e.touches[0].pageX;
      this.moveX = this.currentX - this.startX;
      let currentPosition = -this.slideIndex * this.swiperWidth;
      let currentDistance = currentPosition + this.moveX;

      this.setSlide(currentDistance);
    },
    // 手指离开屏幕事件
    touchEnd(e) {
      // 获取移动距离
      let moveDistance = Math.abs(this.moveX);
      // 判断向左还是向右移，移动超过四分之一，直接下一张
      if (this.moveX === 0) {
        return;
      } else if (this.moveX > 0 && moveDistance > this.swiperWidth * 0.25) {
        this.slideIndex--;
      } else if (this.moveX < 0 && moveDistance > this.swiperWidth * 0.25) {
        this.slideIndex++;
      }
      this.scrollContent(-this.slideIndex * this.swiperWidth);

      // 开启定时器
      this.startTimer();
    },
  },
};
</script>

<style scoped>
#banner-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  height: 8px;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 8px;
}
.cycle-item {
  width: 8px;
  height: 8px;
  margin: 0 3px;
  border-radius: 50%;
  background: #fff;
}
.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>