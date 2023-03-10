! function (e) {
    function a(n) {
        if (i[n]) return i[n].exports;
        var t = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(t.exports, t, t.exports, a), t.loaded = !0, t.exports
    }
    var i = {};
    return a.m = e, a.c = i, a.p = "//res.wx.qq.com/t/wx_fed/base/weixin_portal/res", a(0)
}({
    0: function (e, a, i) {
        e.exports = i(31) + i(267)
    },
    29: function (e, a) {},
    31: function (e, a) {},
    42: function (e, a) {
        var i = function (e) {
                "undefined" != typeof WeixinJSBridge && WeixinJSBridge.invoke ? e() : document.addEventListener && document.addEventListener("WeixinJSBridgeReady", e, !1)
            },
            n = function (e, a, n) {
                i(function () {
                    WeixinJSBridge.invoke(e, a, n)
                })
            };
        e.exports = {
            reportIDKey: function (e, a, i) {
                if (!(e < 0 || e > 127)) {
                    a = a || 1, i = i || "64692";
                    var n = new Image;
                    n.src = document.location.protocol + "//support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid=" + i + "&rkey=" + e + "&rvalue=" + a
                }
            },
            invoke: n,
            wxShare: function () {
                i(function () {
                    WeixinJSBridge.on("menu:share:appmessage", function (e) {
                        WeixinJSBridge.invoke("sendAppMessage", {
                            img_url: "https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",
                            img_width: "108",
                            img_height: "108",
                            link: location.href,
                            desc: "https://weixin.qq.com/",
                            title: document.title
                        }, function (e) {})
                    }), WeixinJSBridge.on("menu:share:timeline", function (e) {
                        WeixinJSBridge.invoke("shareTimeline", {
                            img_url: "https://res.wx.qq.com/t/fed_upload/009bdba1-2dff-4ca4-bb1d-61e2e9ef2763/logo.jpg",
                            img_width: "108",
                            img_height: "108",
                            link: location.href,
                            desc: "https://weixin.qq.com/",
                            title: document.title
                        }, function (e) {})
                    })
                })
            },
            reportCube: function (e) {
                setTimeout(function () {
                    (new Image).src = "https://support.weixin.qq.com/cgi-bin/mmsupportmeshnodelogicsvr-bin/cube?biz=3512&label=portal.main&moduleName=mmportal&action=" + e
                }, 500)
            }
        }
    },
    263: function (e, a) {},
    265: function (e, a) {},
    267: function (e, a, i) {
        function n(e, a) {
            navigator.userAgent.indexOf("Android") >= 0 ? navigator.userAgent.indexOf("MicroMessenger") >= 0 ? t(e, a) : location.href = "https://weixin.qq.com/d" : location.href = a
        }

        function t(e, a) {
            var i = "寰俊",
                e = /ABI\/arm64/gi.test(navigator.userAgent) ? a : e;
            o.invoke("addDownloadTask", {
                task_name: i,
                task_url: e,
                title: i,
                thumb_url: "https://res.wx.qq.com/a/fed_upload/e72dbd6f-6b1c-4bfe-aaae-2118488c0827/wehcat.png",
                download_type: 0,
                developer: "娣卞湷甯傝吘璁绠楁満绯荤粺鏈夐檺鍏徃",
                app_version: window.currentAndroidVersion || "8.0.16",
                privacy_agreement_url: "https://weixin.qq.com/agreement?lang=zh_CN&cc=CN&s=privacy",
                permission_url: "https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/Y51heRPcsqM5pqMh"
            }, function (e) {
                console.log("addDownloadTask", e), e && "system:access_denied" == e.err_msg && (location.href = "https://weixin.qq.com/d")
            })
        }
        var o = i(42);
        /iPhone|iPod|iPad|iOS|Android|webOS|BlackBerry/i.test(navigator.userAgent) ? (o.reportIDKey(1), o.reportIDKey(3), o.reportCube("load_mobile"), o.wxShare()) : (o.reportIDKey(2), o.reportCube("load_pc"));
        var d = navigator.userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
        if (d) {
            var s = document.getElementById("upgrade_notice");
            s && (s.style.display = "block")
        }
        document.getElementById("android_download").addEventListener("click", function () {
            document.getElementById("download_dialog").className = "download__dialog-wrp download__dialog-wrp_show", document.body.style.overflow = "hidden"
        }), document.getElementById("download_dialog_close").addEventListener("click", function () {
            document.getElementById("download_dialog").className = "download__dialog-wrp", document.body.style.overflow = "auto"
        }), document.getElementById("android_download_64").addEventListener("click", function () {
            var e = document.getElementById("android_download").getAttribute("data-download-arm64");
            n(e, e)
        }), document.getElementById("android_download_32").addEventListener("click", function () {
            var e = document.getElementById("android_download").getAttribute("data-download");
            n(e, e)
        })
    }
});