var e = require("../../api/index"), n = require("../../utils/util");
const app = getApp()
Page({
    data: {
        isPhone: !1,
        sessionKey: "",
        nickName:'',
        touxiang: ''
    },
    onLoad: function(e) {
        
    },
    login: function(){
        let that = this
        wx.getUserProfile({
          desc: "用于完善会员资料",
          success:  res => {
              let user = res.userInfo
              wx.cloud.database().collection("userInfo").add({
                data:{
                  user_avatarUrl: user.avatarUrl,
                  user_name: user.nickName,
                  user_carbonInt: 0,
                  user_carbonRed: 0,
                  user_days: 0,
                  user_grade: -1,
                  rigist_date: n.formatDate(new Date()),
                  lastTime: '',
                  lastDtTime:'',
                  water: 50,
                  waternum: 0,
                  signNum: 0,
                  remain1: 100,
                  remain2: 400,
                  remain3: 1600,
                },
                
                success(res){
                  
                  wx.showToast({
                    title: '登陆成功',
                  })
                  
                }
              })
            
              
              wx.cloud.callFunction({
                name: 'getOpenid',
                complete: res => {
                    console.log('云函数获取到的openid: ', res.result.openId)
                    var openid = res.result.openId;
                    app.globalData.userInfo = {
                        openid: openid,
                        user_name: user.nickName,
                        user_avatarUrl: user.avatarUrl,
                        user_carbonInt: 0,
                        user_carbonRed: 0,
                        user_days: 0,
                        user_grade: -1,
                        rigist_date: '',
                        lastTime: '',
                        water: 50,
                        waternum: 0,
                        signNum: 0,
                    }
                    this.setData({
                        userInfo: app.globalData.userInfo
                    })
                    wx.cloud.database().collection("form").where({_openid: res.result.openId}).get({
                        success: function(res){
                            if(res.data[0] == null){
                                wx.cloud.database().collection("form").add({
                                    data:{
                                      user_avatarUrl: user.avatarUrl,
                                      user_name: user.nickName,
                                      user_carbonRed: 0,
                                      lastFoodTime: '',
                                      foodRed: 0,
                                      lastTrafficTime:'',
                                      trafficRed: 0,
                                      totalRed: 0
                                    },
                                    
                                    success(res){
                                      
                                    }
                                })
                            }
                        }
                    })
                     
                    console.log("用户完整信息",app.globalData.userInfo)
                    console.log(app.globalData.userInfo.openid)
                    wx.setStorageSync('userInfo', app.globalData.userInfo),
                    wx.setStorageSync('water', app.globalData.userInfo.water),
                    wx.setStorageSync('waternum', app.globalData.userInfo.waternum),
                    wx.setStorageSync('grade', app.globalData.userInfo.user_grade),
                    wx.setStorageSync('carbonInt', app.globalData.userInfo.user_carbonInt),
                    wx.setStorageSync('openid',app.globalData.userInfo.openid)
                    wx.setStorageSync('remain1', 100)
                    wx.setStorageSync('remain2', 400)
                    wx.setStorageSync('remain3', 1600)
                    wx.setStorageSync('signNum', 0)
                    wx.navigateBack()
                }
               })
          } ,
          
      });
      
      },

});