// ==UserScript==
// @name         问卷星(定制比例)模板（2023最新版！！！）
// @namespace    http://tampermonkey.net/
// @version      3.5
// @description  可定制每个选项比例概率，刷问卷前需要改代码，目前模板支持单选,多选,填空,量表，下拉框题，如有其它高级题型可进群定制脚本，使用需要一定js知识，不懂的可以加QQ群交流，QQ1群：865248256 QQ2群：487872111，本群也提供定制脚本刷问卷服务，服务快捷，价格优惠。https://www.wjx.cn/vj/QvfxoEU.aspx 是测试脚本问卷。如遇问题可加QQ 835573228  B站教程：https://www.bilibili.com/video/BV1Mw411R7yp
// @author       ZYY
// @include     https://www.wjx.cn/*
// ==/UserScript==

(function () {
    'use strict';

    //===========================开始==============================
    clearCookie();


    //填写刷问卷的网址  注意，如果问卷中的网址中间是vm,一定要改成vj!!!,像这样 https://www.wjx.cn/vj/QvfxoEU.aspx
    // var wenjuan_url = 'https://www.wjx.cn/vj/QvfxoEU.aspx';
    var wenjuan_url = 'https://www.wjx.cn/vj/exDeQA9.aspx# ';

    //------------------------------下边的网址不要改！！！！！！！！！！！！！！！！！！！！
    if (window.location.href.indexOf('https://www.wjx.cn/wjx/join/complete.aspx') != -1) {
        window.location.href = wenjuan_url;
    } else if (window.location.href == wenjuan_url) {} else {
        return
    }

    //滚动到末尾
    window.scrollTo(0, document.body.scrollHeight)

    //获取题块列表
    var lists = document.querySelectorAll('.ulradiocheck')
    var ccc = 0;
    var liangbiao_index = 0;
    var xiala_index = 0;
    var ops;
    var bili;
    var temp_flag;
    var tiankong_list;
    var liangbiao_lists;
    var min_options;

    //1 1.您是否到广州长隆野生动物园旅游过?
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [98, 2];
    ops[danxuan(bili)].click()

    //2 您的性别? 男女
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [47, 53];
    ops[danxuan(bili)].click()

    //3  您的年龄? A.18岁以下  B.18-30岁 C.31-40岁  D.41岁及以上
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [9, 60, 20, 11];
    ops[danxuan(bili)].click()


    //4  您的职业? A.学生B.退休人员C.自由职业者D.公务员/事业单位人员E.企业管理者/职员/工人H.其他
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [24, 6, 10, 8, 48, 4];
    ops[danxuan(bili)].click()


    //5. 您的文化程度是: * A.初中及以下B.高中及中专C.大专及本科D.研究生及以上
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [17, 20, 53, 10];
    ops[danxuan(bili)].click()


    //6. 您的月收入情况是: * A .3000 元以下B .3001 - 5000 元C .5001 - 7000 元D .7001 元以上
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [15, 25, 35, 25];
    ops[danxuan(bili)].click()

    //7.您到广州长隆野生动物园旅游的目的是:*A.参观旅游B.看看动物们C.休闲度假 D.其他
    ops = lists[ccc].querySelectorAll('li')
    ccc += 1
    bili = [8, 80, 8, 4];
    ops[danxuan(bili)].click()


    //8. 您对广州长隆野生动物园的旅游交通的满意程度是：
    /**
     * 非常不满意 不满意 一般 满意 非常满意
     * A1.景区外交通到达的便利程度
     * A2.景区内游览的交通便利程度
     * A3.景区内步行线路设计的合理程度
     */
    //多选的量表题模板
    liangbiao_lists = document.querySelectorAll('#div8 tbody tr')
    liangbiao_index = 0
    //题号-1
    ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
    liangbiao_index += 1
    bili = [5, 5, 20, 60, 10];
    temp_flag = false
    while (!temp_flag) {
        for (let count = 0; count < bili.length; count++) {
            if (duoxuan(bili[count])) {
                ops[count].click();
                temp_flag = true;
            }
        }
    }

    //9. 您对广州长隆野生动物园的旅游交通的重要程度是：
    /**
     * 非常不满意 不满意 一般 满意 非常满意
     * A1.景区外交通到达的便利程度
     * A2.景区内游览的交通便利程度
     * A3.景区内步行线路设计的合理程度
     */
    liangbiao_lists = document.querySelectorAll('#div9 tbody tr')
    liangbiao_index = 0
    //题号-1
    ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
    liangbiao_index += 1
    bili = [5, 5, 20, 60, 10];
    temp_flag = false
    while (!temp_flag) {
        for (let count = 0; count < bili.length; count++) {
            if (duoxuan(bili[count])) {
                ops[count].click();
                temp_flag = true;
            }
        }
    }

    //10. 您对广州长隆野生动物园的旅游设施的满意程度是：
    /**
     * 非常不满意 不满意 一般 满意 非常满意
        B1.旅游标识、指示牌的醒目程度
        B2.住宿、餐饮设施的卫生便利舒适程度
        B3.休憩、环卫设施的卫生便利舒适程度
        B4.安全保障设施的配套程度B5.停车场管理
        B5.停车场管理
     */
    //多选的量表题模板
    liangbiao_lists = document.querySelectorAll('#div8 tbody tr')
    liangbiao_index = 0
    //题号-1
    ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
    liangbiao_index += 1
    bili = [5, 5, 20, 60, 10];
    temp_flag = false
    while (!temp_flag) {
        for (let count = 0; count < bili.length; count++) {
            if (duoxuan(bili[count])) {
                ops[count].click();
                temp_flag = true;
            }
        }
    }

    //8. 您对广州长隆野生动物园的旅游交通的满意程度是：
    /**
     * 非常不满意 不满意 一般 满意 非常满意
     * A1.景区外交通到达的便利程度
     * A2.景区内游览的交通便利程度
     * A3.景区内步行线路设计的合理程度
     */
    //多选的量表题模板
    liangbiao_lists = document.querySelectorAll('#div8 tbody tr')
    liangbiao_index = 0
    //题号-1
    ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
    liangbiao_index += 1
    bili = [5, 5, 20, 60, 10];
    temp_flag = false
    while (!temp_flag) {
        for (let count = 0; count < bili.length; count++) {
            if (duoxuan(bili[count])) {
                ops[count].click();
                temp_flag = true;
            }
        }
    }

    //4
    // ops = lists[ccc].querySelectorAll('li')
    // ccc += 1
    // bili = [20, 20, 20, 20, 20];
    // ops[danxuan(bili)].click()

    //5
    // ops = lists[ccc].querySelectorAll('li')
    // ccc += 1
    // bili = [20, 20, 20, 20, 20];
    // ops[danxuan(bili)].click()

    //6
    // ops = lists[ccc].querySelectorAll('li')
    // ccc += 1
    // bili = [70, 30];
    // ops[danxuan(bili)].click()

    //7
    // ops = lists[ccc].querySelectorAll('li');
    // ccc += 1;
    // bili = [5, 5, 5, 5];
    // temp_flag = false;
    // while (!temp_flag) {
    //     for (let count = 0; count < bili.length; count++) {
    //         if (duoxuan(bili[count])) {
    //             ops[count].click();
    //             temp_flag = true;
    //         }
    //     }
    // }

    //8
    // ops = lists[ccc].querySelectorAll('li')
    // ccc += 1
    // bili = [50, 50, 50, 50];
    // temp_flag = false

    // while (!temp_flag) {
    //     for (let count = 0; count < bili.length; count++) {
    //         if (duoxuan(bili[count])) {
    //             ops[count].click();
    //             temp_flag = true;
    //         }
    //     }
    // }

    //9
    // tiankong_list = ['王翠花', '小明', '小红'];
    // bili = [33, 33, 34];
    // document.querySelector('#q9').value = tiankong_list[danxuan(bili)]

    let count = 0
    //提交函数
    setTimeout(function () {
        document.querySelector('#submit_button').click()
        setTimeout(function () {
            document.querySelector('#SM_BTN_1').click()
            setInterval(function () {
                try {
                    //点击刷新验证框
                    //noCaptcha.reset(1)
                    yanzhen();
                    count += 1;
                } catch (err) {
                    if (count >= 6) {
                        location.reload()
                    }
                }
            }, 500);
        }, 0.1 * 1000);
    }, 0.1 * 1000);

    /*
        //---------------------------------------------------------------------------------------------------

        //单选题模板
        ops = lists[ccc].querySelectorAll('li')
        ccc+=1
        bili = [];
        ops[danxuan(bili)].click()

        //---------------------------------------------------------------------------------------------------

        //多选题模板（至少选一个选项）
        ops = lists[ccc].querySelectorAll('li')
        ccc+=1
        bili = [];
        temp_flag = false

        while(!temp_flag){
            for(let count = 0;count<bili.length;count++){
                if(duoxuan(bili[count])){
                    ops[count].click();
                    temp_flag = true;
                }
            }
        }

        //---------------------------------------------------------------------------------------------------

        //多选题模板（可自定义至少选一个选项）
        ops = lists[ccc].querySelectorAll('li');
        ccc+=1;
        bili = [];
        min_options = 3  //设置最少选择的项数
        temp_flag = 0;
        while(temp_flag<min_options){
            let temp_answer = []
            for(let count = 0;count<bili.length;count++){
                if(duoxuan(bili[count])){
                    temp_answer.push(count)
                    temp_flag+=1
                }
                if(count==bili.length-1){
                    if(temp_flag<min_options){
                        temp_flag = 0
                    }
                    else{
                        for(let count = 0;count<temp_answer.length;count++){
                            ops[temp_answer[count]].click();
                        }
                    }
                }
            }
        }

        //---------------------------------------------------------------------------------------------------

        //填空题模板（固定答案）
        document.querySelector('#q题号').value='自定义答案'

        //---------------------------------------------------------------------------------------------------

        //填空题模板（多个答案，可定制比例）
        tiankong_list = ['王翠花','小明','小红'];
        bili = [33,33,34];
        document.querySelector('#q题号').value=tiankong_list[danxuan(bili)]

        //---------------------------------------------------------------------------------------------------

        //单选的量表题模板
        liangbiao_lists = document.querySelectorAll('#div题号 tbody tr')
        liangbiao_index=0
        //题号-1
        ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
        liangbiao_index+=1
        bili = [20,20,20,20,20];
        ops[danxuan(bili)].click()

        //---------------------------------------------------------------------------------------------------

        //多选的量表题模板
        liangbiao_lists = document.querySelectorAll('#div题号 tbody tr')
        liangbiao_index=0
        //题号-1
        ops = liangbiao_lists[liangbiao_index].querySelectorAll('td')
        liangbiao_index+=1
        bili = [50,50,50,50];
        temp_flag = false
        while(!temp_flag){
            for(let count = 0;count<bili.length;count++){
                if(duoxuan(bili[count])){
                    ops[count].click();
                    temp_flag = true;
                }
            }
        }

        //---------------------------------------------------------------------------------------------------

        //下拉框题模板
        xiala_click(document.querySelectorAll('.select2-selection.select2-selection--single')[xiala_index])
        xiala_index+=1
        ops = document.querySelectorAll('#select2-q题号-results li')
        ops = Array.prototype.slice.call(ops); //非ie浏览器正常
        ops = ops.slice(1,ops.length);
        bili = randomBili(ops.length-1);//默认所有选项平均分配
        xialaElement_click(ops[danxuan(bili)])

        //---------------------------------------------------------------------------------------------------

        /*
        //点击提交按钮
        setTimeout( function(){
            //document.querySelector('#submit_button').click()
            var ev = document.createEvent('HTMLEvents');
            ev.clientX = 20
            ev.clientY = 20
            ev.initEvent('click', false, true);
            document.querySelector('#submit_button').dispatchEvent(ev)
        }, 3 * 1000 );
    */
    //===========================结束==============================
    //返回随机bili 参数为随机个数
    function randomBili(num) {
        let a = Math.floor(100 / num);
        let yu = 100 - a * num;
        let list = [];
        for (let i = 0; i < num; i++) {
            list.push(a)
        }
        for (let i = 0; i < yu; i++) {
            list[i] = list[i] + 1
        }
        return list;
    }
    //累加list前num数的和
    function leijia(list, num) {
        var sum = 0
        for (var i = 0; i < num; i++) {
            sum += list[i];
        }
        return sum;
    }

    //生成从minNum到maxNum的随机数
    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
    //判断num是否在指定区间内
    function isInRange(num, start, end) {
        if (num >= start && num <= end) {
            return true;
        } else {
            return false;
        }
    }
    //单选题执行函数
    function danxuan(bili) {
        var pp = randomNum(1, 100)
        for (var i = 1; i <= bili.length; i++) {
            var start = 0;
            if (i != 1) {
                start = leijia(bili, i - 1)
            }
            var end = leijia(bili, i);
            if (isInRange(pp, start, end)) {
                return i - 1;
                break;
            }
        }
    }
    //多选题执行函数
    function duoxuan(probability) {
        var flag = false;
        var i = randomNum(1, 100);
        if (isInRange(i, 1, probability)) {
            flag = true;
        }
        return flag;
    }

    //清楚cookie
    function clearCookie() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString(); //清除当前域名下的,例如：m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString(); //清除当前域名下的，例如 .m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString(); //清除一级域名下的或指定的，例如 .kevis.com
            }
        }
    }
    //滑动验证函数
    // function yanzhen() {
    //     var event = document.createEvent('MouseEvents');
    //     event.initEvent('mousedown', true, false);
    //     document.querySelector("#nc_1_n1z").dispatchEvent(event);
    //     event = document.createEvent('MouseEvents');
    //     event.initEvent('mousemove', true, false);
    //     Object.defineProperty(event, 'clientX', {
    //         get() {
    //             return 260;
    //         }
    //     })
    //     document.querySelector("#nc_1_n1z").dispatchEvent(event);
    // }

    //滚动到末尾函数
    function scrollToBottom() {
        (function () {
            var y = document.body.scrollTop;
            var step = 500;
            window.scroll(0, y);

            function f() {
                if (y < document.body.scrollHeight) {
                    y += step;
                    window.scroll(0, y);
                    setTimeout(f, 50);
                } else {
                    window.scroll(0, y);
                    document.title += "scroll-done";
                }
            }
            setTimeout(f, 1000);
        })();
    }

    //点击下拉框方法
    function xiala_click(e) {
        let fireOnThis = e
        let evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('mousedown', true, true, this, 1, 12, 345, 7, 220, false, false, true, false, 0, null);
        fireOnThis.dispatchEvent(evObj);

    }

    //点击下拉框中的选项方法
    function xialaElement_click(e) {
        let fireOnThis = e
        let evObj = document.createEvent('MouseEvents');
        evObj.initMouseEvent('mouseup', true, true, this, 1, 12, 345, 7, 220, false, false, true, false, 0, null);
        fireOnThis.dispatchEvent(evObj);
    }
})();