var t = require("../../../api/index");

Page({
    data: {
        list: [],
        openid: '',
        nums: 0
    },
    onLoad: function() {
        
        var a = this;
        wx.cloud.database().collection('userInfo').get({
            success: function(res){
                console.log(res)
            }
        })    
        wx.cloud.database().collection('form').orderBy('totalRed','desc').get({
            success: function(res){
                console.log(res.data)
                a.setData({
                    list: res.data,
                    openid: wx.getStorageSync('openid')
                })
        
            }
        })
        
    },
    onReachBottom: function () {
        wx.showLoading({
          title: '刷新中！',
          duration: 150
        })
        
        let x = this.data.nums + 20
        console.log(x)
        let old_data = this.data.list
        wx.cloud.database().collection('form').orderBy('totalRed','desc').skip(x) // 限制返回数量为 20 条
          .get()
          .then(res => {
          
          // 利用concat函数连接新数据与旧数据
          // 并更新nums  
            this.setData({
              list: old_data.concat(res.data),
              nums: x
            })
            console.log(res.data)
          })
          .catch(err => {
            console.error(err)
          })
        console.log('circle 下一页');
      
      },
});

// function getListCount() {
//     return new Promise((resolve, reject) => {
//         wx.cloud.database().collection('form').orderBy('totalRed','desc').count().then(res => {
//             resolve(res.total);
//         }).catch(e => {
//         console.log(e)
//             reject("查询失败")
//         })
//     })
// }

// function getListIndexSkip(skip) {
//     return new Promise((resolve, reject) => {
//       let statusList = []
//       let selectPromise;	
//       if (skip > 0) {
//         selectPromise = wx.cloud.database().collection('form').orderBy('totalRed','desc').skip(skip).get()
//       } else {
//         //skip值为0时，会报错
//         selectPromise = wx.cloud.database().collection('form').orderBy('totalRed','desc').get()
//       }
//       selectPromise.then(res => {
//         resolve(res.data);
//       }).catch(e => {
//         console.error(e)
//         reject("查询失败!")
//       })
//     })
// }
