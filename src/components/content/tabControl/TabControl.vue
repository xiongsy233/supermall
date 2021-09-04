<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)" :class="{active: index===activecount}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            activecount:0
        }
    },
    watch:{
    },
    created() {
    },
    methods:{
        itemClick(index){
            this.activecount=index
            // 子组件传父组件
            this.$emit('tabClick',index)
        }
    },
}
</script>

<style scoped>
.tab-control{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 9;
}
.tab-control div{
    flex: 1;
}
.tab-control div span{
    padding: 0 5px 5px;
}
.active{
    color: pink;
}
.active span{
 border-bottom: 3px solid pink;
}

</style>