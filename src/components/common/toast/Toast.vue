<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "请添加信息", duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%);
  z-index: 9999;
}
</style>