module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375,//视窗的宽度，对应设计稿宽度
            viewportHeight: 667,//视窗的高度，对应的是设计稿高度，也可以不设置
            unitPrecision: 5,//指定‘px’转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw',//指定需要转换成的视窗单位，建议 vw
            selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],//指定不需要转换的类
            minPixelValue: 1,//小于或等于1px 不转换为视窗单位
            mediaQuery: false//允许在媒体查询中转换px
        },
    }
}