<template>
  <navbar class="detail-nav">
    <div slot="left" class="nav-back" @click="navBack">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div class="detail-nav-center" slot="center">
      <nav
        class="detail-nav-item"
        v-for="(item, index) in this.titles"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="navClick(index)"
      >
        {{ item }}
      </nav>
    </div>
  </navbar>
</template>

<script>
import Navbar from "components/common/navbar/Navbar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    Navbar,
  },
  created() {},
  methods: {
    navBack() {
      this.$router.back();
    },
    navClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>

<style scoped>
.detail-nav {
  background: #fff;
  color: #999;
}
.detail-nav-center {
  display: flex;
  font-weight: normal;
}
.detail-nav-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.nav-back {
  width: 100%;
  height: 100%;
}
.nav-back img {
  margin: 10px 25px;
}
</style>