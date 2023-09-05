require("../../../api/index");

var t = require("../../../utils/index");

Page({
    data: {
        showPopup: !1,
        todayVal: 0,
        val: 0,
    },
    onLoad: function(t) {
        wx.showModal({
            title:'温馨提示！',
            content: '绿色区域内为您当日减碳量，橙色文字为您今年的减碳量~',
          })
        let that = this
        var form = wx.cloud.database().collection("form").where({
            _openid: wx.getStorageSync('openid')
        }).get({
            success: function(res){
                var foodRed = res.data[0].foodRed
                var trafficRed = res.data[0].trafficRed
                var totalRed = res.data[0].totalRed*1 + t.sum*1
                that.setData({
                    todayVal: t.sum,
                    val: totalRed,
                    type: '今日'
                });
                wx.cloud.database().collection("form").where({
                    _openid: wx.getStorageSync('openid')
                }).update({
                    data:{
                        totalRed: totalRed
                    }
                })
            }
        })


        
    }
});