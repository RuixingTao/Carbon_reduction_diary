
var  n = require("../../utils/util");

Page({
    data: {
        grade: -1,
        medal:[{
          image: '/images/medal/medal1_active.png',
          integral: 50
        },{
          image: '/images/medal/medal2_active.png',
          integral: 100
        },{
          image: '/images/medal/medal3_active.png',
          integral: 200
        },{
          image: '/images/medal/medal4_active.png',
          integral: 400
        },{
          image: '/images/medal/medal5_active.png',
          integral: 800
        },{
          image: '/images/medal/medal6_active.png',
          integral: 1600
        },{
          image: '/images/medal/medal7_active.png',
          integral: 2400
        },{
          image: '/images/medal/medal8_active.png',
          integral: 3600
        },{
          image: '/images/medal/medal9_active.png',
          integral: 4800
        }],
        openid: null,
        isLogin: !1,
        swiperHeight: "",
        signNum: 0,
        carbonInt: 0,
        totalRed: 0
    },
    onLoad: function() {
      
    },
    onShow: function() {
      let that = this
      if(wx.getStorageSync('userInfo')){
        let userInfo = wx.getStorageSync('userInfo')
        wx.cloud.database().collection("form").where({
            _openid : wx.getStorageSync('openid')
        }).get({
            success: function(res){
                that.setData({
                    
                    totalRed: res.data[0].totalRed
                })
            }
        })
        wx.cloud.database().collection("userInfo").where({
            _openid : wx.getStorageSync('openid')
        }).get({
            success: function(res){

                that.setData({
                    userInfo: userInfo,
                    signNum: res.data[0].signNum,
                    grade: res.data[0].user_grade,
                    carbonInt: res.data[0].user_carbonInt,
                })
            }
        })
        
      }
    },

    goToLogin: function(){
        n.goToLogin()
    },
    
    goToAppraise:function(){
        
                    wx.navigateTo({
                        url: '../personal/pingjia/pingjia'
                    })
     
        
    },
     /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '减碳日记',    //自定义标题   string
      path: `/pages/list/list.wxml`  //这个地址需要把页面路径拼接的参数发送出去,直写页面地址的话，别人进入会是空的页面
    }
  },
  onShareTimeline: function(res){
    let img = "../../images/personal/xiugai.png"  //取得是每个店铺的图和店铺名称
    console.log(img)
    return {
      title: '减碳日记', //字符串  自定义标题
      query: `id=${this.data.shop.shop_id}`,  //页面携带参数
      imageUrl:img   //图片地址
    }
  },
});

