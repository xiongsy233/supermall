<template>
    <div id="recommend-nav">
        <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="recommend-title">{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
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
#recommend-nav{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    margin-bottom: 10px;
}

</style>