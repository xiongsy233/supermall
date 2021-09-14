<template>
  <div id="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </navbar>
    <b-scroll class="b-scroll" ref="scroll">
      <cart-list></cart-list>
    </b-scroll>
    <cart-bottom-bar :isShow="isSelectAll"></cart-bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "components/common/navbar/Navbar.vue";
import CartList from "./childComps/CartList.vue";
import BScroll from "components/common/scroll/BScroll.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

export default {
  components: {
    Navbar,
    CartList,
    BScroll,
    CartBottomBar,
  },
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    //   mapGetters 可以直接将vuex 里的getters里的cartLength函数映射到computed
    //   mapActions  可以将vuex 里的actions里的函数映射到methods
    ...mapGetters(["cartLength"]),
    isSelectAll() {
      if (this.$store.getters.cartlist.length === 0) {
        return false;
      }
      {
        return this.$store.getters.cartlist.every((item) => item.checked);
      }
    },
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {},
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
  background: #fff;
}
.b-scroll {
  height: calc(100vh - 93px - 40px);
  overflow: hidden;
}
.nav-bar {
  background: #ff8198;
  color: #fff;
}
</style>