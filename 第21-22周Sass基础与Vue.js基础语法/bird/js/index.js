// author: 
$(function ($) {


    $("#cate0").click(function () {
        $(".codelist-desktop").show();
        _scrollFLag = true;
        $('html,body').animate({
            scrollTop: 0
        }, 'fast');
        $(".home-left-column").css({
            "width": "16%"
        });
    })
    $(".design").click(function () {
        id = $(this).prop("id");
        $("." + id).show();
        $("." + id).siblings().hide();
        _scrollFLag = false;
        if ($(".left-column").hasClass('site-fix')) {
            $(".left-column").removeClass('site-fix');
            $(".home-left-column").css({
                "width": "16%"
            });
            $(".middle-column-home").css({
                "float": ""
            });

            $('html,body').animate({
                scrollTop: 0
            }, 'fast');
        }
    })
    //移动设备点击链接    
    $('a').on('click touchend', function (e) {
        if (screen.availHeight == 548 && screen.availHeight == 320) {
            var el = $(this);
            var link = el.attr('href');
            window.location = link;
        }
    });

    $("#pull").click(function () {
        if ($(".runoob-col-md2").length) {
            $(".runoob-col-md2").slideToggle("400", function () {});
        } else if ($(".left-column").length) {
            $(".left-column").slideToggle("400", function () {});
        }

    })

    if ($("#main-left-cloumn").length) {
        var _scrollFLag = true;
        $(window).on('resize', function () {
            var win = $(this); //this = window
            if (win.width() <= 1025) {
                if ($(".left-column").hasClass('site-fix')) {
                    $(".left-column").removeClass('site-fix');
                    $(".home-left-column").css({
                        "width": "16%"
                    });
                    $(".middle-column-home").css({
                        "float": ""
                    });
                }
            }
        });
    }
    //IE 、Edge浏览器 fixed 背景抖动处理
    if (navigator.userAgent.match(/Trident\/7\./)) {
        document.body.addEventListener && document.body.addEventListener("mousewheel", function (event) {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }

    $(window).scroll(function () {
        var _stop = $(window).scrollTop();
        bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        top_of_screen = $(window).scrollTop();
        // 检测移动设备

        if ($("#pull").is(":visible")) {
            _mobileFlag = true;
        } else {
            _mobileFlag = false;
        }
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            _mobileFlag = true;
        }
        //左侧滚动部分代码
        if (($("#leftcolumn").length || $("#main-left-cloumn").length) && !_mobileFlag) {

            if ($("#main-left-cloumn").length) {
                _wtop = $(".middle-column-home").offset().top + $(".middle-column-home").height();
            } else {
                _wtop = $(".middle-column").offset().top + $(".middle-column").height();
            }

            var _footerHeight = $("#footer").offset().top;
            if (_leftaTop >= _endArticle) {
                _wtop = _wtop - _stop;
            } else if (_wheight < (_footerHeight - _stop)) {
                _wtop = _wheight;
            } else {
                _wtop = _footerHeight - _stop - 10;
            }

            if (_scrollFLag && _stop >= 120 && $(window).width() > 768) {
                if ($("#main-left-cloumn").length) {
                    $(".middle-column-home").css({
                        "float": "right"
                    });
                    //$(".home-left-column").css({"width":"14%"});  

                }

                if (!$(".left-column").hasClass("site-fix")) {
                    _widthFix = $(".runoob-col-md2").width();
                    if ($("#main-left-cloumn").length) {
                        _widthFix = $(".home-left-column").width();

                    }
                    $(".left-column").addClass("site-fix");
                    $(".left-column").css({
                        "width": _widthFix + "px"
                    });
                }
            } else if (_scrollFLag) {
                _scrollFLag = true;
                if ($(".left-column").hasClass("site-fix")) {
                    $(".left-column").removeClass("site-fix");
                    $(".left-column").css("width", "");
                }
            }
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {

                _bottom = bottom_of_screen - top_of_element;
                $(".left-column").css({
                    "bottom": _bottom + "px"
                });
            } else {
                $(".left-column").css({
                    "bottom": ""
                });
            }

        }

        if (_stop >= 100) {
            $(".go-top").fadeIn();
            if ($('#htmlfeedback-container').length) {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

                } else {
                    $("#htmlfeedback-container").show();
                }
            }
        } else {
            $(".go-top").fadeOut();
        }
    });


    $(".go-top").click(function (event) {
        $('html,body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (window.location.href.indexOf("w3cnote") != -1) {
            //console.log('href', window.location.href);
        } else {
            if (viewportWidth > 768) {
                $(".runoob-col-md2").show();
            }
        }
        if (viewportWidth < 568) {
            $("#index-nav li").each(function (index) {
                if (index > 2) {
                    $(this).hide();
                }
            });
        } else {
            $("#index-nav li").show();
        }

    });

});



