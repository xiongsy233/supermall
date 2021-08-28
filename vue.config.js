module.exports = {
    configureWebpack:{
        resolve:{
            // 给文件名配置别名 @默认为src文件
            alias:{
                'asseets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}