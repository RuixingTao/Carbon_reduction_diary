const { goToLogin } = require("../../utils/util");

const app = getApp()

Page({
    data: {
        list: [ {
            title: "食",
            text: "水循环 多果蔬",
            icon: "http://ct-tph.oss-cn-hangzhou.aliyuncs.com/tanzuji/footmark/%E9%A3%9F%E7%89%A9%402x.png",
            iconStyle: "width:144rpx;height:144rpx;",
            code: "FOOD"
        },  {
            title: "行",
            text: "小排量 多骑行",
            icon: "http://ct-tph.oss-cn-hangzhou.aliyuncs.com/tanzuji/footmark/%E8%A1%8C%402x.png",
            iconStyle: "width:190rpx;height:128rpx;",
            code: "TRAFFIC"
        } ]
    },
    goToDeatils: function(o) {
        var i = o.currentTarget.dataset.item;
        if(wx.getStorageSync('userInfo')){
            return ( void ("DRESS" !== i.code && wx.navigateTo({
                url: "../footprints/form/form?type=".concat(i.code)
            })));
        }
        else
            goToLogin()
    },
     /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.shop.name,    //自定义标题   string
      path: `/pages/list/list.wxml`  //这个地址需要把页面路径拼接的参数发送出去,直写页面地址的话，别人进入会是空的页面
    }
  },
  onShareTimeline: function(res){
    let img = "../../images/personal/xiugai.png"  //取得是每个店铺的图和店铺名称
    console.log(img)
    return {
      title: this.data.shop.name, //字符串  自定义标题
      query: `id=${this.data.shop.shop_id}`,  //页面携带参数
      imageUrl:img   //图片地址
    }
  },
});