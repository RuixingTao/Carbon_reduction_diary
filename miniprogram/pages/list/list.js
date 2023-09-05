
const { goToLogin } = require("../../utils/util");
var n = require("../../utils/util");
const app = getApp()
let that = this
var ui = app.globalData.userInfo

// index/pages/tree/tree.js
Page({

  /**
   * 页面的初始数据
  */
  data: {
    djshu:4,//树的等级1，2，3，4
    tree:false,
    waternum:0,
    water: 0,
    remain1: 100,
    remain2: 400,
    remain3: 1600,
    waterbool:false,
    animation:true,
    shutree:false,
    bottle:false
  },
  treeend(){//树动画结束
    this.setData({
      tree:false,
      shutree:false,
      animation:true,
    })
    var num=this.data.waternum
    var r=this.data.water
    var c=this.data.carbonInt
    if(num==2000){
      wx.showToast({
        title: '你已完成任务',
      })
      return false
    }
     this.setData({
      waternum:num+=10,
      water: r-=10,
      remain1: 90 - this.data.waternum,
      remain2: 390 - this.data.waternum,
      remain3: 1590 - this.data.waternum,
      carbonInt: c+=10
     })
     wx.cloud.database().collection('userInfo').where({
         _openid : wx.getStorageSync('openid')
     }).update({
         data:{
             user_carbonInt: this.data.carbonInt,
             water: this.data.water,
             waternum : this.data.waternum,
             remain1: this.data.remain1,
             remain2: this.data.remain2,
             remain3: this.data.remain3,
         }
     })
     wx.setStorageSync('carbonInt', this.data.carbonInt),
     wx.setStorageSync('waternum', this.data.waternum),
     wx.setStorageSync('water', this.data.water),
     wx.setStorageSync('remain1', this.data.remain1)
     wx.setStorageSync('remain2', this.data.remain2)
     wx.setStorageSync('remain3', this.data.remain3)
     if(this.data.waternum >= 50 && this.data.waternum < 100){
       wx.setStorageSync('grade', 0)
       if(this.data.waternum <= 50){
        wx.showToast({
          icon: 'none',
          title: '恭喜解锁“累计碳积分50分”',
        })
       }
       
     }
     if(this.data.waternum >= 100 && this.data.waternum < 200){
      wx.setStorageSync('grade', 1)
      if(this.data.waternum <= 100){
        wx.showToast({
        icon: 'none',
        title: '恭喜解锁“累计碳积分100分”',
      })}
      
     }
     if(this.data.waternum >= 200 && this.data.waternum < 400){
      wx.setStorageSync('grade', 2)
      if(this.data.waternum <= 200){
        wx.showToast({
          icon: 'none',
          title: '恭喜解锁“累计碳积分200分”',
        })
      }
      
     }
     if(this.data.waternum >= 400 && this.data.waternum < 800){
      wx.setStorageSync('grade', 3)
      if(this.data.waternum <= 400){
        wx.showToast({
        icon: 'none',
        title: '恭喜解锁“累计碳积分400分”',
        })
      }
      
     }
     if(this.data.waternum >= 800 && this.data.waternum < 1600){
      wx.setStorageSync('grade', 4)
      if(this.data.waternum <= 800){
        wx.showToast({
          icon: 'none',
          title: '恭喜解锁“累计碳积分800分”',
        })
      }
      
     }
     if(this.data.waternum >= 1600 && this.data.waternum < 2400){
      wx.setStorageSync('grade', 6)
      if(this.data.waternum <= 1600){
        wx.showToast({
          icon: 'none',
          title: '恭喜解锁“累计碳积分1600分”',
        })
      }
      
     }
     if(this.data.waternum >= 2400 && this.data.waternum < 3600){
        wx.setStorageSync('grade', 7)
        if(this.data.waternum <= 2400){
          wx.showToast({
            icon: 'none',
            title: '恭喜解锁“累计碳积分2400分”',
          })
        }
        
     }
     if(this.data.waternum >= 3600 && this.data.waternum < 4800){
        wx.setStorageSync('grade', 8)
        if(this.data.waternum <= 3600){
          wx.showToast({
            icon: 'none',
            title: '恭喜解锁“累计碳积分3600分”',
          })
        }
     }
     if(this.data.waternum >= 4800 ){
        wx.setStorageSync('grade', 9)
        if(this.data.waternum <= 4800){
          wx.showToast({
            icon: 'none',
            title: '恭喜解锁“累计碳积分4800分”',
          })
        }
     }
     wx.cloud.database().collection('userInfo').where({
        _openid : wx.getStorageSync('openid')
     }).update({
         data:{
            user_grade: wx.getStorageSync('grade')
         }
     })
  },
  before(){
    wx.navigateBack({
      delta: 1,
    })
  },
  bottlestart(){//水滴动画开始前
    this.setData({
      bottle:true
    })
  },
  bottleend(){//水滴动画结束
    this.setData({
      bottle:false,
      tree:false,
      waterbool:true,
    })
    setTimeout(()=>{
      this.setData({
        shutree:true,
        waterbool:false,
      })
    },500)
  },
  animation(){//动画事件启动
    var animation=this.data.animation
    if(animation && this.data.water >=10){
      this.setData({
        animation:false,
        tree:true
      })
    }else {
        
      if(animation && wx.getStorageSync('userInfo')){
        wx.showToast({
          icon:'none',
          title: '水滴不足,快去答题收集水滴吧！'
        })
      }
      else if(!wx.getStorageSync('userInfo'))
        goToLogin()
      return false
    }
    
  },

  //登录
  goTologin: function(){
    n.goToLogin()
    },

  //答题
  answer: function(e){
      
    if(wx.getStorageSync('userInfo')){

        wx.cloud.database().collection('userInfo').where({
            _openid: wx.getStorageSync('openid')
        }).get({
            success(ress){
                console.log(ress.data[0].lastDtTime)
                console.log(n.formatDate(new Date()))
                if(ress.data[0].lastDtTime == n.formatDate(new Date())){
                    console.log('yes')
                    wx.showToast({
                      title: '今日已完成答题！',
                    })
                }else{

                    let testId = e.currentTarget.dataset['testid'];
                    wx.navigateTo({
                    url: '../list/dt?testId='+testId})
                }
            }
        })
    }
    else
        goToLogin()
  },
  tosign(){
    if(wx.getStorageSync('userInfo')){
        wx.navigateTo({
            url: '/pages/list/qd',
          })
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
  onLoad: function(){
    

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    wx.cloud.database().collection('userInfo').where({_openid: wx.getStorageSync('openid')}).get({
        success: function(res){
            wx.setStorageSync('signNum', res.data[0].signNum)
        }
    })
    
    if(wx.getStorageSync('userInfo')){
        wx.cloud.database().collection("userInfo").where({
            _openid : wx.getStorageSync('openid')
        }).get({
            success: function(res){

                wx.setStorageSync('water', res.data[0].water)
                wx.setStorageSync('waternum', res.data[0].waternum)
                wx.setStorageSync('remain1', res.data[0].remain1)
                wx.setStorageSync('remain2', res.data[0].remain2)
                wx.setStorageSync('remain3', res.data[0].remain3)
            }
        })
        let userInfo = wx.getStorageSync('userInfo')
        let w = wx.getStorageSync('water')
        let wn = wx.getStorageSync('waternum')
        let r1 = wx.getStorageSync('remain1')
        let r2 = wx.getStorageSync('remain2')
        let r3 = wx.getStorageSync('remain3')
        let carbonInt = wx.getStorageSync('carbonInt')
        this.setData({
            userInfo: userInfo,
            water: w,
            waternum: wn,
            remain1: r1,
            remain2: r2,
            remain3: r3,
            carbonInt: carbonInt
        })
    }
    
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
