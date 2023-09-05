var e = require("../@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.request = exports.dateFormat = exports.uuid = exports.isPhone = exports.isLogin = exports.uploadImage = exports.uploadFile = void 0;

var t = require("../@babel/runtime/helpers/createForOfIteratorHelper"), a = e(require("../config/index"));

exports.uploadFile = function(e) {
    var r = [];
    return new Promise(function(n, o) {
        wx.showLoading({
            mask: !0,
            title: "上传中···"
        });
        var i, s = t(e);
        try {
            var u = function() {
                var t = i.value;
                wx.uploadFile({
                    url: "".concat(a.default.api_url[0], "/upload/image"),
                    filePath: t.path || t.url || t,
                    name: "file",
                    success: function(i) {
                        if (200 != i.statusCode) return wx.showToast({
                            icon: "none",
                            title: "服务器异常"
                        }), o(i);
                        var s = JSON.parse(i.data);
                        if (0 != s.code) return wx.showToast({
                            icon: "none",
                            title: s.msg
                        }), o(s);
                        r.push({
                            imageId: s.data.imageId,
                            url: a.default.cdn + s.data.src,
                            name: t.name || "",
                            size: t.size || ""
                        }), r.length >= e.length && (n(r), wx.hideLoading());
                    }
                });
            };
            for (s.s(); !(i = s.n()).done; ) u();
        } catch (e) {
            s.e(e);
        } finally {
            s.f();
        }
    });
};

exports.uploadImage = function(e, r) {
    var n = [];
    return new Promise(function(o, i) {
        wx.showLoading({
            mask: !0,
            title: "上传中···"
        });
        var s, u = t(e);
        try {
            var l = function() {
                var t = s.value;
                wx.uploadFile({
                    url: "".concat(a.default.api_url[0], "/upload/uploadImage"),
                    filePath: t.path || t.url || t,
                    name: "file",
                    formData: {
                        isFileNameSave: r,
                        fileNameAndSuffix: t.name
                    },
                    success: function(r) {
                        if (200 != r.statusCode) return wx.showToast({
                            icon: "none",
                            title: "服务器异常"
                        }), i(r);
                        var s = JSON.parse(r.data);
                        if (0 != s.code) return wx.showToast({
                            icon: "none",
                            title: s.msg
                        }), i(s);
                        n.push({
                            imageId: s.data.imageId,
                            url: a.default.cdn + s.data.src,
                            name: t.name || "",
                            size: t.size || ""
                        }), n.length >= e.length && (o(n), wx.hideLoading());
                    }
                });
            };
            for (u.s(); !(s = u.n()).done; ) l();
        } catch (e) {
            u.e(e);
        } finally {
            u.f();
        }
    });
};

exports.isLogin = function(e) {
    return !!wx.getStorageSync("userInfo").avatarUrl || (wx.navigateTo({
        url: "/pages/login/index"
    }), !1);
};

exports.isPhone = function(e) {
    return !!wx.getStorageSync("userInfo").userPhone || (wx.navigateTo({
        url: "/pages/login/index?type=phone"
    }), !1);
};

exports.uuid = function(e) {
    for (var t = [], a = 0; a < 36; a++) t[a] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
    t[14] = "4", t[19] = "0123456789abcdef".substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-";
    var r = t.join("");
    return r;
};

exports.dateFormat = function(e) {
    var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "".concat(new Date());
    a = (a = String(a)).replace(/-/g, "/");
    var r = {
        "Y+": (a = new Date(a)).getFullYear().toString(),
        "m+": (a.getMonth() + 1).toString(),
        "d+": a.getDate().toString(),
        "H+": a.getHours().toString(),
        "M+": a.getMinutes().toString(),
        "S+": a.getSeconds().toString()
    };
    for (var n in r) (t = new RegExp("(" + n + ")").exec(e)) && (e = e.replace(t[1], 1 == t[1].length ? r[n] : r[n].padStart(t[1].length, "0")));
    return e;
};

exports.request = function(e, t, r) {
    var n = wx.getStorageSync("userInfo");
    return new Promise(function(o, i) {
        wx.request({
            url: "".concat(e),
            data: t,
            header: {
                projectId: a.default.projectId,
                publicId: a.default.publicId,
                isSmallProgram: "Y",
                memberId: n.memberId || "",
                openId: n.openId || "",
                smallProgramUserId: n.userId || ""
            },
            method: r || "get",
            success: function(e) {
                if (200 === e.statusCode) o(e.data); else if (401 === e.statusCode) {
                    var t = getCurrentPages();
                    if (t[t.length - 1].route.indexOf("pages/login/index") > -1) return;
                    wx.navigateTo({
                        url: "/pages/login/index"
                    });
                } else wx.showToast({
                    icon: "none",
                    title: "服务器异常 ".concat(e.statusCode)
                });
            },
            fail: function(e) {
                i(e.errMsg), wx.showToast({
                    icon: "none",
                    title: e.errMsg
                });
            }
        });
    });
};