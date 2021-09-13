<template>
    <div class="bottom-bar">
        <div class="bottom-bar-item">
            <div class="kefu">
                <i class="kefu-img"></i>
                <span>客服</span>
            </div>
            <div class="dianpu">
                <i class="dianpu-img"></i>
                <span>店铺</span>
            </div>
            <div class="shoucang">
                <i class="shoucang-img"></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="addshopcar" @click="addToCar">
            加入购物车
        </div>
        <div class="buy">
            购买
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBottomBar',
    data() {
        return {
        }
    },
    watch:{
    },
    created() {
    },
    methods:{
        addToCar(){
            this.$emit('addCar')
        }
    },
}
</script>

<style scoped>
.bottom-bar{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    background:#fff;
}
.bottom-bar-item{
    display: flex;
    flex: 2;
    font-size: 14px;
    text-align: center;
}
.kefu,.dianpu,.shoucang{
    flex: 1;
}
.kefu-img{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 0;
    background: url('~assets/img/detail/detail_bottom.png') 0 97px/100%;
}
.dianpu-img{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 0;
    background: url('~assets/img/detail/detail_bottom.png') 0 200px/100%;
}
.shoucang-img{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 0;
    background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.addshopcar{
    flex: 1;
    background: yellow;
    color: #333;
    line-height: 49px;
    text-align: center;
}
.buy{
    flex: 1;
    background: var(--color-tint);
    color: #fff;
    line-height: 49px;
    text-align: center;
}
</style>