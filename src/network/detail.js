import { request } from "./request";

// 获取商品详情页数据

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

// 将详情页的数据封装成一个类，便于获取
export  class Goods {
    constructor(columns, itemInfo, services) {
        this.columns = columns
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.realPrice = itemInfo.lowNowPrice
        this.services = services
    }
}

// 获取商品店铺信息
export class Shop {
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells= shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}