var  util = require("../../../utils/util");

Page({
    data: {
        type: "",
        list: [],
        carbonInfo: "",
        electricTotal: 0
    },
    onLoad: function(t) {
        this.setData({
            type: t.type,
            title: t.title
        });
    },
    onShow: function() {
        this.createData();
    },
    
    bindInput: function(o) {
        
    },
    createData: function() {
        var t = this, n = this.data.type, a = [];
        "FOOD" === n && (a = [ {
            code: "farina",
            name: "面粉",
            icon: "../../../images/form/mf.png"
        }, {
            code: "rice",
            name: "大米",
            icon: "../../../images/form/dm.png"
        }, {
            code: "bean",
            name: "豆制品",
            icon: "../../../images/form/dzp.png"
        }, {
            code: "vegetable",
            name: "蔬菜净菜",
            icon: "../../../images/form/sc.png"
        }, {
            code: "pork",
            name: "生净猪肉",
            icon: "../../../images/form/zr.png"
        }, {
            code: "beef",
            name: "鲜牛肉",
            icon: "../../../images/form/nr.png"
        }, {
            code: "poultry",
            name: "禽肉",
            icon: "../../../images/form/qr.png"
        }, {
            code: "fish",
            name: "水产品",
            icon: "../../../images/form/yu.png"
        }, {
            code: "fruits",
            name: "水果类",
            icon: "../../../images/form/sg.png"
        }, {
            code: "egg",
            name: "蛋类",
            icon: "../../../images/form/dan.png"
        }, {
            code: "milk",
            name: "奶类",
            icon: "../../../images/form/nai.png"
        } ]), "TRAFFIC" === n && (a = [ {
            code: "drive",
            name: "汽车/出租车",
            icon: "../../../images/form/car.png"
        }, {
            code: "bus",
            name: "公交车",
            icon: "../../../images/form/bus.png"
        }, {
            code: "byc",
            name: "自行车",
            icon: "../../../images/form/byc.png"
        }, {
            code: "subway",
            name: "地铁",
            icon: "../../../images/form/sub.png"
        }, {
            code: "ebyc",
            name: "电动车",
            icon: "../../../images/form/ebyc.png"
        }, {
            code: "walk",
            name: "步行",
            icon: "../../../images/form/walk.png"
        } ]),t.setData({
            list: a
        })
    },
    formSubmit: function(t) {
        var n = this, a = t.detail.value, c = this.data, e = c.type, i = c.list, s = !1,sum = 0 ,h = {
            baseType: e,
            list: []
        };
        if (i.forEach(function(t) {
            h.list.push({
                type: t.code,
                cost: a[t.code]
            }), a[t.code] && (s = !0);
        }), !s) return wx.showToast({
            icon: "none",
            title: "请至少输入一项"
        });
        else {
            wx.cloud.database().collection('form').where({
                _openid: wx.getStorageSync('openid')
            }).get({
                success(ress){
                    
                    if(e == "FOOD"){

                        if(ress.data[0].lastFoodTime == util.formatDate(new Date())){
                            console.log('yes')
                            wx.showToast({
                                title: '今日已经填报',
                            })
                        }else{
                            console.log('no')
                            wx.cloud.database().collection('form').where({
                                _openid: wx.getStorageSync('openid')
                            }).update({
                                data:{
                                    lastFoodTime: util.formatDate(new Date())
                                }
                            })
                            var len = h.list.length
                            var sum = 0
                            h.list.forEach(function(t){
                                if(t.type == "farina")
                                    sum = sum - t.cost*0.004
                                if(t.type == "rice")
                                    sum = sum - t.cost*0.0035
                                if(t.type == "bean")
                                    sum = sum - t.cost*0.0055    
                                if(t.type == "vegetable")
                                    sum = sum + t.cost*0.0025 
                                if(t.type == "pork")
                                    sum = sum - t.cost*0.006 
                                if(t.type == "beef")
                                    sum = sum - t.cost*0.007 
                                if(t.type == "poultry")
                                    sum = sum - t.cost*0.005 
                                if(t.type == "fish")
                                    sum = sum - t.cost*0.004 
                                if(t.type == "fruits")
                                    sum = sum + t.cost*0.001 
                                if(t.type == "egg")
                                    sum = sum - t.cost*0.003 
                                if(t.type == "milk")
                                    sum = sum - t.cost*0.004 
                            })
                            var foodsum = sum
                            wx.cloud.database().collection("form").where({
                                _openid: wx.getStorageSync('openid')
                            }).update({
                                data:{
                                    foodRed: foodsum
                                }
                            })
                            wx.navigateTo({
                                url: "../calculate/calculate?sum="+foodsum
                            });
                        }
                    }else{
                        console.log(ress.data[0].lastTrafficTime)
                        console.log(util.formatDate(new Date()))
                        
                        if(ress.data[0].lastTrafficTime == util.formatDate(new Date())){
                            console.log('yes')
                            wx.showToast({
                            title: '今日已经填报',
                            })
                        }else{
                            
                            console.log('no')
                            wx.cloud.database().collection('form').where({
                                _openid: wx.getStorageSync('openid')
                            }).update({
                                data:{
                                    lastTrafficTime: util.formatDate(new Date())
                                }
                            })
                            var len = h.list.length
                            var sum = 0
                            console.log(len)
                            console.log(h.list)
                            h.list.forEach(function(t){
                                if(t.type == "drive")
                                    sum = sum - t.cost*0.297 
                                if(t.type == "bus")
                                    sum = sum - t.cost*0.13 
                                if(t.type == "byc")
                                    sum = sum + t.cost*0.05 
                                if(t.type == "subway")
                                    sum = sum + t.cost*0.05 
                                if(t.type == "ebyc")
                                    sum = sum + t.cost*0.02 
                                if(t.type == "walk")
                                    sum = sum + t.cost*0.04 
                            })
                            var trafficsum = sum
                            wx.cloud.database().collection("form").where({
                                _openid: wx.getStorageSync('openid')
                            }).update({
                                data:{
                                    trafficRed: trafficsum
                                }
                            })
                            wx.navigateTo({
                                url: '../calculate/calculate?sum='+trafficsum
                            });
                        }
                    }
                    
                }
            })
            
        };
    }
});