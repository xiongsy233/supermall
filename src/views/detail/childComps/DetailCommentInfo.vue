<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="detail-comment">
        <div class="comment-title">
            <div class="comment">用户评价</div>
            <div class="comment-more">更多</div>
        </div>
        <div class="comment-list">
            <div class="comment-name">
                <img :src="commentInfo[0].user.avatar" alt="">
                <span>{{commentInfo[0].user.uname}}</span>
            </div>
            <p class="content">{{commentInfo[0].content}}</p>
            <div class="comment-other">
                <span>{{commentInfo[0].created}}</span>
                <span>{{commentInfo[0].style}}</span>
            </div>
            <div class="comment-img">
                <img :src="item" alt="" v-for="(item,index) in commentInfo[0].images" :key="index">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailCommentInfo',
    data() {
        return {
        }
    },
    props:{
        commentInfo:{
            type:Array
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
.detail-comment{
    width: 100%;
    padding: 5px 10px;
}
.comment-title{
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    border-bottom: 2px solid #ccc;
}
.comment{
    position: absolute;
    left: 0;
    font-size: 16px;
}
.comment-more{
    position: absolute;
    right: 0;
    font-size: 12px;
}
.comment-list{
    padding: 10px 0 ;
}
.comment-name{
    margin: 10px 0;
}
.comment-name img{
    width: 12%;
    border-radius: 50%;
    vertical-align:middle;
}
.comment-name span{
    margin: 0 10px;
    color: #333;
}
.content{
    margin: 10px 0;
    font-size: 14px;
}
.comment-other{
    font-size: 12px;
}
.comment-other span{
    margin-right:10px;
}
.comment-img{
    margin: 10px 0;
}
.comment-img img{
    width: 25%;
}
</style>