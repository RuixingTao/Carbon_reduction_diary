
var n = require("../../../utils/util");
Page({
    data:{
        starNum: 1,
        list:[],
        avg: 0,
        pingjiaSum: 0,
    },
    setStarNum(e){
        console.log("获得的评分为",e.detail.starNum)
        this.setData({
            starNum: e.detail.starNum
        })
    },
    setScore(){
        var that = this
        wx.cloud.database().collection('userInfo').where({_openid: wx.getStorageSync('openid')}).update({
            data:{
                lastPJTime: n.formatDate(new Date()),
                starNum: that.data.starNum
            },
        })
        wx.showToast({
          title: '评价完成！',
          duration: 600
        })

    },
    

    
      
    onLoad(){
        getListCount().then(res => {
            let count = res
            let list = []
            for (let i = 0; i < count ; i += 20) {
              getListIndexSkip(i).then(res => {
                console.log(res)
                  list = list.concat(res);
                  if (list.length == count ) {
                    wx.setStorageSync('list', list)
                  }
              })
              .catch(e => {
                  console.error(e)

              })
            }
            
        })
    },
    onShow(){
        this.setData({
            list: wx.getStorageSync('list')
        })
        var starSum = 0
        var pingjiaSum = 0
        for(let i = 0; i <this.data.list.length; i++){
            console.log(this.data.list[i].starNum)
            if(this.data.list[i].starNum){
                starSum += this.data.list[i].starNum
                pingjiaSum++
            }
                
        }
        var avg = (starSum/pingjiaSum).toFixed(1)
        this.setData({
            avg : avg,
            pingjiaSum: pingjiaSum
        })
    }
})


function getListCount() {
    return new Promise((resolve, reject) => {
        wx.cloud.database().collection('userInfo').count().then(res => {
            resolve(res.total);
        }).catch(e => {
        console.log(e)
            reject("查询失败")
        })
    })
}

function getListIndexSkip(skip) {
    return new Promise((resolve, reject) => {
      let statusList = []
      let selectPromise;	
      if (skip > 0) {
        selectPromise = wx.cloud.database().collection('userInfo').skip(skip).get()
      } else {
        //skip值为0时，会报错
        selectPromise = wx.cloud.database().collection('userInfo').get()
      }
      selectPromise.then(res => {
        resolve(res.data);
      }).catch(e => {
        console.error(e)
        reject("查询失败!")
      })
    })
}
