import axios from 'axios'
export function request(config) {
   
        // 1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 1000
        })

        // 2.拦截
        // 请求拦截
        instance.interceptors.request.use(config => {
            return config
        }, err => {
            console.log(err);
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            console.log(err);
        })

        // 3.发送请求
        return instance(config)
    
}