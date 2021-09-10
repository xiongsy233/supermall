<template>
    <div class="detail-param" v-if="Object.keys(goodsParam).length !== 0">
        <table class="goods-size">
            <tr v-for="(item,index) in goodsParam.sizes[0]" :key="index">
                <td v-for="(items,id) in item" :key="id">{{items}}</td>
            </tr>
        </table>
         <table class="goods-info">
            <tr v-for="(item,index) in goodsParam.infos" :key="index">
                <td class="goods-info-key">{{item.key}}</td>
                <td class="goods-info-value">{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DetailGoodsParam',
    data() {
        return {
        }
    },
    props:{
        goodsParam:{
            type:Object
        }
    },
    watch:{
    },
    created() {
    },
    methods:{
    },
}
</script>

<style scoped>
.detail-param{
    width: 100%;
    font-size: 16px;
    padding: 20px 10px;
    color: #999;
    border-bottom: 5px solid #bbb;
}
.goods-size{
    width: 100%;
    border-collapse: collapse;
}
tr{
    height: 42px;
    line-height: 42px;
}
td{
    border-bottom: 1px solid #999;

}
.goods-info{
    width: 100%;
    border-collapse: collapse;
}
.goods-info-key{
    width: 25%;
}
.goods-info-value{
    color: var(--color-tint);
}
</style>