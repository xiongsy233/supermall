<template>
    <div class="goods-info" v-if="Object.keys(goods).length !== 0" >
        <h3 class="title-info">{{goods.title}}</h3>
        <div class="price-info">
            <span class="newPrice">{{goods.newPrice}}</span>
            <del class="oldPrice">{{goods.oldPrice}}</del>
            <span class="discount">{{this.goods.discount}}</span>
        </div>
        <div class="service-info">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.services[goods.services.length -1].name}}</span>
        </div>
        <div class="descript">
            <span v-for="(index) in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span class="descript-item">{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailGoodsInfo',
    data() {
        return {
        }
    },
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    
    created() {
        
    },
    mounted() {
    },
    methods:{
        
    },
}
</script>

<style scoped>
.goods-info{
    width: 100%;
    margin: 20px auto;
    padding-bottom: 30px;
    border-bottom: 5px solid #eee;
}
.title-info{
    width: 100%;
    color: #000;
    padding: 0 5px;
    font-size: 20px;
    line-height: 1.2;
}
.price-info{
    position: relative;
    margin: 10px 0;
}
.newPrice{
    margin: 0 5px;
    color:var(--color-tint) ;
    font-size: 30px;
}
.oldPrice{
    margin: 0 5px;
    color: #999;
}
.discount{
    position: absolute;
    top: 0;
    font-size: 14px;
    color: #fff;
    background:var(--color-tint);
    padding:4px;
    border-radius:11px;

}
.service-info{
    display: flex;
    width: 95%;
    margin:20px auto;
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    justify-content: space-between;
}
.descript{
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    padding: 0 5px;
}
.descript img{
    width: 14px;
    vertical-align: middle;

}
.descript-item{
    vertical-align: middle;

}
</style>