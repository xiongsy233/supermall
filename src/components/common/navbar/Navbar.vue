<template>
    <div class="navbar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
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
    .navbar{
        display: flex;
        height: 44px;
        background: var( --color-tint); 
        line-height: 44px;
        box-shadow: 0 2px 2px rgba(100, 100, 100, 0.1);
    }
    .left,.right{
        width: 60px;
        height: 44px;
    }
    .center{
        flex: 1;
        line-height: 44px;
        text-align: center; 
        font-size: 16px;
        font-weight: bold;
        color: #fff;
    }
</style>