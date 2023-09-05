// pages/signIn/signIn.js
//获取应用实例
const app = getApp();
const util = require("../../utils/util");
var n = require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //img_url: config.imgUrl, //图片地址

    //签到模块
    signNum: 0,  //签到数 
    signState: false, //签到状态
    min: 1,  //默认值日期第一天1
    max: 7,  //默认值日期最后一天7
    be: 0,  //默认倍数
 
  },

  onLoad: function (options) {
    let _this = this;
    this.setData({
        signNum: wx.getStorageSync("signNum")
      })

  },

  onShow: function(){
    
  },

  //签到
  bindSignIn(e) {
    var that = this,
    num = e.currentTarget.dataset.num;

    wx.cloud.database().collection('userInfo').where({
        _openid: wx.getStorageSync('openid')
    }).get({
        success(ress){
            
            console.log(ress.data[0].lastTime)
            console.log(n.formatDate(new Date()))
            if(ress.data[0].lastTime == n.formatDate(new Date())){
                console.log('yes')
                wx.showToast({
                  title: '今日已完成打卡！',
                })
            }else{
                console.log('no')
                
                num++
                that.setData({
                    signNum: num,
                    // signState: false //点击后是否继续允许点击，true为不允许，false为允许，正式使用时应为true
                })
                var tmp1 = wx.getStorageSync('water')
                wx.cloud.database().collection('userInfo').where({
                    _openid: wx.getStorageSync('openid')
                }).update({
                    data:{
                        lastTime: n.formatDate(new Date()),
                        signNum: num,
                        water: tmp1*1 + 50*1
                    }
                })
                wx.setStorageSync('signNum', num)
                
                var be = e.currentTarget.dataset.be;
                if (num % 7 == 0) {
                    be += 1;
                    that.setData({
                        be: be
                    })
                }
                if (num == 7 * be + 1) {
                    that.setData({
                        min: 7 * be + 1,
                        max: 7 * be + 7
                    })
                }
                wx.setStorageSync('water', tmp1 + 50)
                var addSum = 50
                wx.showToast({
                  title: '获得水滴'+addSum+'g ',
                  icon: 'none'
                })
            }
        }
    })

    
    
},
})
