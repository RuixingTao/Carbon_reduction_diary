//app.js

var jsonList = require('data/json.js'); 

App({
    

    onLaunch: function(){
        wx.cloud.init({
            evn:'cloud1-9gvab8j9b272b0b8',
            traceUser: true
          })

        wx.showModal({
            title:'温馨提示！',
            content: '1.碳贴士：提供用户时下最新最热碳资讯！\n2.碳乐园：赶快每日参与答题、签到获得水滴，使用水滴浇灌小树令其茁壮成长变成参天大树吧！\n3.碳足迹：记录打卡您每一天的碳足迹，统计计算您的碳排放量并可以看到您的全国碳排放排名。\n4.我的：统计您获得的每一项成就',
        })
    },
   
    globalData:{
      dicts: [],
      userInfo:null,
      questionList: jsonList.questionList  // 拿到答题数据
    }

    
  })

  