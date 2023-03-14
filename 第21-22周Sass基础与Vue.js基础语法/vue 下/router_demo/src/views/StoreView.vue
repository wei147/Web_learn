<template>
  <div class="flag">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="2">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/log">生成二维码</router-link>
      </el-menu-item>
      <el-menu-item index="1">友人A Store</el-menu-item>
    </el-menu>
  </div>
  <!-- 内容区 -->

  <div class="container main">

    <div class="row">
      <div class="col home-left-column left-column" id="main-left-cloumn">

        <div class="tab" id="cate0"><i class="fa fa-reorder"></i> All Store</div>
        <!-- 修改右侧的导航条 -->
        <div class="sidebar-box gallery-list">
          <div class="design" id="cate1">
            <div class="navto-nav"><i class="fa fa-external-link"></i> &nbsp; 软件推荐</div>
          </div>
          <div class="design" id="cate2">
            <div class="navto-nav"><i class="fa fa-external-link"></i> &nbsp; 浏览器插件</div>
          </div>
          <div class="design" id="cate3">
            <div class="navto-nav"><i class="fa fa-external-link"></i> &nbsp; 网课资源</div>
          </div>
          <div class="design" id="cate4">
            <div class="navto-nav"><i class="fa fa-external-link"></i> &nbsp; 特色网站</div>
          </div>
          <div class="design" id="cate5">
            <div class="navto-nav"><i class="fa fa-external-link"></i> &nbsp; 其他</div>
          </div>
        </div>

      </div>
      <!-- 正常pc端的适配 -->
      <div class="col middle-column-home">
        <div class="codelist codelist-desktop cate1">

          <h2><i class="fa fa-list"></i> 软件推荐</h2>


          <a class="item-top item-1" href="">
            <h4>JetBrains</h4>
            <img class="codeicon codeicon-36" alt="html5" height="36" width="36"
              src="../assets/img/store/software/jetbrains.png">
            <strong>包含IDEA、pycharm开发工具</strong>
          </a>

          <a class="item-top item-1" href="">
            <h4>Adobe</h4>
            <img class="codeicon codeicon-36" alt="css" height="32" width="32"
              src="../assets/img/store/software/adobeX.svg">
            <strong>包含像PS、AI、AE、PR等</strong>
          </a>

          <a class="item-top item-1" @click="handle($event)" id="typora">
            <h4>Typora</h4>
            <img class="codeicon codeicon-36" alt="css3" height="36" width="36"
              src="../assets/img/store/software/Typora.png">
            <strong>一款 Markdown 编辑器和阅读器</strong>
          </a>

          <a class="item-top item-1" href="www.voidtools.com/zh-cn/">
            <h4>Everything</h4>
            <img class="codeicon codeicon-36" alt="html5" height="36" width="36"
              src="../assets/img/store/software/Everything.jpg">
            <strong>基于名称快速定位文件/夹</strong>
          </a>

          <a class="item-top item-1" href="https://zh.snipaste.com/
          ">
            <h4>Snipaste</h4>
            <img class="codeicon codeicon-36" alt="css" height="36" width="36"
              src="../assets/img/store/software/Snipaste.jpg">
            <strong>最强截图工具。用过都说好</strong>
          </a>

          <a class="item-top item-1" href="https://apps.microsoft.com/store/detail/quicklook/9NV4BS3L1H4S">
            <h4>Quicklook</h4>
            <img class="codeicon codeicon-36" alt="css3" height="36" width="36"
              src="../assets/img/store/software/QuickLook.png">
            <strong>桌面快速预览工具,开源、免费</strong>
          </a>

          <a class="item-top item-1" href="www.bandisoft.com">
            <h4>Bandizip</h4>
            <img class="codeicon codeicon-36" alt="css" height="36" width="36"
              src="../assets/img/store/software/Bandizip.jpg">
            <strong>免费、无广告的压缩文件管理工具</strong>
          </a>

          <a class="item-top item-1" href="https://potplayer.org/gengxin/709.html">
            <h4>PotPlayer</h4>
            <img class="codeicon codeicon-36" alt="css" height="36" width="36"
              src="../assets/img/store/software/PotPlayer.jpg">
            <strong>简洁、功能强的视频播放软件</strong>
          </a>

          <a class="item-top item-1" @click="handle($event)" id="bandicam">
            <h4>Bandicam</h4>
            <img class="codeicon codeicon-36" alt="css3" height="36" width="36"
              src="../assets/img/store/software/bandicam.jpg">
            <strong>简单好用的电脑屏幕录制软件</strong>
          </a>

          <a class="item-top item-1" href="https://www.u.tools/ ">
            <h4>uTools</h4>
            <img class="codeicon codeicon-36" alt="css3" height="36" width="36"
              src="../assets/img/store/software/utool2.jpg">
            <strong>生产力工具集,现代桌面软件</strong>
          </a>

        </div>
        <div class="codelist codelist-desktop cate2">

          <h2><i class="fa fa-list"></i> 浏览器插件</h2>


          <a class="item-top item-1" href="">
            <h4>TamperMonkey</h4>
            <img class="codeicon codeicon-36" alt="TamperMonkey" height="36" width="36"
              src="../assets/img/store/plug-in/TamperMonkey.jpg">
            <strong>最受欢迎的浏览器扩展。提供免费看会员视频的教程</strong>
          </a>

          <a class="item-top item-1" href="">
            <h4>Adblock Plus</h4>
            <img class="codeicon codeicon-36" alt="Adblock Plus" height="36" width="36"
              src="../assets/img/store/plug-in/AdblockPlus.jpg">
            <strong>享受没有恼人广告的网络世界</strong>
          </a>

          <a class="item-top item-1" href="">
            <h4>Infinity</h4>
            <img class="codeicon codeicon-36" alt="Infinity" height="36" width="36"
              src="../assets/img/store/plug-in/Infinity.jpg">
            <strong>自定义你的浏览器桌面,美化</strong>
          </a>

        </div>
        <div class="codelist codelist-desktop cate3">

          <h2><i class="fa fa-list"></i> 网课资源</h2>


          <a class="item-top item-1" href="">
            <h4>【学习 Python】</h4>
            <img class="codeicon codeicon-36" alt="python3" height="36" width="36"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHyElEQVR42pVXeVTUVRQmK0XTjEyPbWqdlqOdU1ZaKm5Z5BIZLi1oKIP7rqQZigkqiVrhUTOF0ELAJE1RKwSOggYim4PswwwgAgM4MywKgiBf9z7ej34MVPTHd34z/Jj3ffe+7953n42Njc19El0I3Qg9CQ8THiHYER4l9CE8JtH3f0D5TR+5Dq/ZQ/I8SHjARkXOXx4nvEwYRhhOGEEYSRhFsCeM/p+wlxgl1+F1BxEeItgSuioC7id0J4ytrKpCxU0TTCYzTGYzzBYLLJWVqGTQuypGdbVAdU0NahTcuiVwqyPcvi2edXV1IA4HmY2eUkRr9Jyad2+aTCgpNeJcZCQuxMTS51J6xiD24kUY8vORkpqKhCtXUFxSAouVOGuBrUIlWAhxOBH6E3rLTIjoeT96ESZx1MayMkI5yisqKBs3BVgYvysrLxewqEnVRJSNNplRoba2lgV8SHha+qKXIqCbVDTFbLYIAoX8ckKCgDYtDUnJySgsLEQafY6Lj0dWVhZKKBPl9P8sjgXUWKdeBbkFzoRnCP2kKUX6u8kvjhwZk3PEStSKDzjthyMSsTrgPFx2R8DJ9yycvgqH885wLN/3G8JjksV23Cay2xQto1aFO3fusIBPCc9Jwz+qCLCVJfc+p1QhVpOb6bPfyQTM3nsBO35NgsPWs3hrczjGev6K0Rt+waj1P2Pk2mD8Ep0oiDlaa9TX17OAuYQXCU/KbRACuks177OJmDg6OhpxcXHic2xsrEj54v1ROBChhdFopAycw7hNf5OPWBuCN9YEYfHuk2K/OdpWEDE/GxoaWIArYTDhKdkjhAG7SzVT2UxmdflJZ7MfFu2PxtQdEVgZcIHIT2LMhuOw/+IYRqwjcvcgDFt1GC7bjwkBHC0TqnH37l0WoCEMkUbs204AO1gh5wzEUPTxFH1UVBTWfRuEBduDsO77cKz97hQ0WwIxcl0okR8R5K+t+AFOHgHid+fPnxdmZZMyMaOxsZEFuBFeIgzoUACrF3tOIv5MzcbawzFw9ovEzF2/Y7rvGTj5nMLUrSfg6BUGB48jePOzIxi++kciD8TQpf742CsIZbl7UXfdE5Y8L9zQnxPp77wAKh9Oe3qOAdO+icLE7ZFw2PYHJnifxfjNp8h0JzDaIwwjPz9K5MGC/HUmX+aPoUsOYLL7PhSnewMlq4DiZWi6vhR6XYqogs4I+IDrlzOw/8wVTPQlcp8/8PYWJpeOJ/JRTE6OH77mJ7y+8hBeXRYgyBlzfYJh0XkBN5YA1+cDhXNRYQgRHmhqauqEAKphE5Whe+AFIo8g8t9EubV3fHvyoUu+h9fuvWgsXErkbkCBC2D4BGVpG0Sz6pQAruEKakSavZF4eyuRe52Wjm8hd9gYCtcdYZi/8xjcfI9C81UI3LaHYPHOUPj/fAzmHA+K2hXInw3oPwLypuFW1jKxBffu3ftvAfyPXHKaPef+Jt/YUm7Omw/hcswelGVvRaV+GywCW2DK2YRq3XrcK1xAUc8hcmcinwnonICc92BOdREdsnMCqGOxB9wDojDuy1Ot5A4bjyIt8RBgdJdY02o0FC2kqDVE/iml/GOKejqQO5XIJwNZ76Ayw11UQnNz838L4JbJlXDgdDzGbjwBe+H4UMzaFoqCq5tayEuZfEUboyF/FkX9IUU9jcgdgeyJQOYEIGMMynMPqU34r41ICGAfZOsLMXHz8dZyc9sZRun2IfLVFPVyinpRG6MhbwaRf0BRT6GoHYh8PJGPRsO1STCW5Fu34iH/1IqFAPYBn2iXqBGt/O4sHD0CserrYJjzqL5vkMOLFgijNZPRCuLdYMlYgfKUBTBp58OidYMx4ROUxs9AUdwcXIoKhMFgwE3ylZwH2h1GbQSwUuXoZLAQnnzYRNUGEnB9XovRDM5oppSXpLij7OpnKIhbCGPycty46osyGmgUlNJExU8uQ1qjSR7HLxCeUI7jdgI4Cwp5SkoKrl27hoyMDJiz1ndotGZKeS1VRGOmIyxXNeK0ZNLi4mIUFBQgT69HXl4ePD09T8qZcJAcy+zatWI+OhUBygnG4L9V6bZIozm1MVp9lmvLEJK/B+Wpy4XYi5cuITExEZmZmQK7du26SOvPlBWgGLB3OwH1UoBynDI5L6SnKFIvh6Eha0Y7ozVn2KMuZxXq0x2Rqz2NGBpiueb5YMvNzcXBgwe1MvVD5TimpL9XhwI4erUA5SDh7xWl2dR4vkVNugZ30qYIVGnnoDTNB/qcBOTT5MzHMZ8pOp0OwcHBOltb23nynvGcjL6fjL6HeiQTE5EiID09Hck0hPKTh00WwHXMUETxoCKGFx7f6Pxgo3HEPAfwnoeEhOjs7OyW0LpvSuMNlHvf5l7QZiZUZ0A9SCgCOLUM7mr85KwolcLm02rTxLTs7++vlZEr5IPkINpHXv26KzejNlOxtYCkpCSx/5zOoqIiETmTscs5amsBbDg/P79YWmu2vIop5E/IxtNbdT98QLkXdJWqJqlnOI6aCZXUqzPApPyeRbJgNhw1myZvb+/jtM50wityzwfKyDsi76K+GfWQLXIKYZq8wfAlwkV2L1fZx92soJHvXGXUE+Q6z0jD9Zdptya/X95LW++GytW8j1TMP36W8LxsnYPlwi9ZYYjEYFW6B8iU95OGe/gfyO/7C+YSnLnRj6EAAAAAAElFTkSuQmCC">
            <strong>Python3.x 版本，未来主流版本。</strong>
          </a>
        </div>
        <div class="codelist codelist-desktop cate4">

          <h2><i class="fa fa-list"></i> 特色网站</h2>


          <a class="item-top item-1" href="www.iconfont.cn">
            <h4>iconfont</h4>
            <img class="codeicon codeicon-36" alt="iconfont" height="36" width="36"
              src="../assets/img/store/website/iconfont.png">
            <strong>阿里巴巴矢量图标库</strong>
          </a>
          <a class="item-top item-1" href="http://zhongguose.com/">
            <h4>中国色</h4>
            <img class="codeicon codeicon-36" alt="中国传统颜色" height="36" width="36"
              src="../assets/img/store/website/中国色.png">
            <strong>中国传统颜色</strong>
          </a>

          <a class="item-top item-1" href="wallhaven.cc/">
            <h4>wallhaven</h4>
            <img class="codeicon codeicon-36" alt="wallhaven" height="36" width="36"
              src="../assets/img/store/website/wallhaven.png">
            <strong>最强的壁纸网站之一</strong>
          </a>
        </div>
        <div class="codelist codelist-desktop cate5">

          <h2><i class="fa fa-list"></i> 其他</h2>


          <a class="item-top item-1" @click="handle($event)" id="clash">
            <h4>Clash</h4>
            <img class="codeicon codeicon-36" alt="clash" height="36" width="36"
              src="../assets/img/store/software/clash.png">
            <strong>一款支持多平台的代理软件</strong>
          </a>
        </div>

        <!-- 手机端的适配 -->
        <div class="codelist codelist-mobile">

          <h2><i class="fa fa-list"></i> HTML / CSS</h2>

          <a class="item-top item-1" href="//www.runoob.com/html/html5-intro.html">
            <h4>HTML5</h4>
          </a>

          <a class="item-top item-1" href="//www.runoob.com/css/css-tutorial.html">
            <h4>CSS</h4>
          </a>

        </div>
        <div class="codelist codelist-mobile">

          <h2><i class="fa fa-list"></i> JavaScript</h2>


          <a class="item-top item-1" href="//www.runoob.com/js/js-tutorial.html">
            <h4>JavaScript</h4>
          </a>

          <a class="item-top item-1" href="//www.runoob.com/htmldom/htmldom-tutorial.html">
            <h4>HTML DOM</h4>
          </a>

          <a class="item-top item-1" href="//www.runoob.com/jquery/jquery-tutorial.html">
            <h4>jQuery</h4>
          </a>

        </div>
        <div class="codelist codelist-mobile">

          <h2><i class="fa fa-list"></i> 服务端</h2>


          <a class="item-top item-1" href="//www.runoob.com/python3/python3-tutorial.html">
            <h4>Python</h4>
          </a>

          <a class="item-top item-1" href="//www.runoob.com/python/python-tutorial.html">
            <h4>Python2.x</h4>
          </a>
        </div>

        <div class="codelist codelist-mobile">

          <h2><i class="fa fa-list"></i> 数据库</h2>


          <a class="item-top item-1" href="//www.runoob.com/sql/sql-tutorial.html">
            <h4>SQL</h4>
          </a>

          <a class="item-top item-1" href="//www.runoob.com/mysql/mysql-tutorial.html">
            <h4>MySQL</h4>
          </a>
        </div>

        <div class="codelist codelist-mobile">

          <h2><i class="fa fa-list"></i> 数据分析</h2>


          <a class="item-top item-1" href="//www.runoob.com/python3/python3-tutorial.html">
            <h4>Python</h4>
          </a>
        </div>

      </div>
    </div>
  </div>

  <div class="fixed-btn">
    <!-- 回到顶部 -->
    <a class="go-top" href="javascript:void(0)" title="返回顶部"> <i class="fa fa-angle-up"></i></a>
  </div>

  <!-- 对话框 -->
  <el-dialog title="提示" v-model="dialogShow" width="30%" :show-close="false" :before-close="handleClose">
    <span>{{message}}</span>
    <el-button @click="dialogShow = false">取 消</el-button>
    <el-button type="primary" @click="dialogShow = false">复制</el-button>
  </el-dialog>

</template>
<script>
  export default {
    data() {
      return {
        id: '',
        // 对话框的显示与隐藏
        dialogShow: false,
        message: '',
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handle(e) {
        this.id = e.currentTarget.getAttributeNode("id").value;
        console.log(this.id);
        if (this.id === "typora") {
          this.message = "https://wei1.lanzoub.com/b00wrkm6d 密码:dg9e"
          this.dialogShow = true
        }
        if (this.id === "bandicam") {
          this.message = "https://wei1.lanzoub.com/b00wrkmeb 密码:hebq"
          this.dialogShow = true
        }
        if (this.id === "clash") {
          this.message = "https://wei1.lanzoub.com/b00wrklde 密码:f29r"
          this.dialogShow = true
        } 
        // else {
        //   this.message = "发生未知的错误"
        // }
      },
      handleClose(done) {
        console.log(done);
        this.$confirm('确认关闭？')
          .then(() => {
            console.log();
            done();
          })
          .catch(() => {});
      }
    }
  }
</script>
<style>
  .flag {
    position: sticky;
    /* 新属性sticky */
    top: 0;
    /* 距离页面顶部距离 */
    z-index: 100
  }

  /*  */

  .home-left-column {
    width: 16%;
  }

  @media screen and (max-width: 768px) {
    .home-left-column {
      display: none;
    }
  }

  /*
Tags: 绿色,三栏
*/
  a,
  abbr,
  address,
  body,
  caption,
  cite,
  dd,
  del,
  dfn,
  div,
  dl,
  dt,
  em,
  fieldset,
  h2,
  h3,
  h4,
  h5,
  h6,
  html,
  iframe,
  img,
  ins,
  label,
  legend,
  li,
  object,
  ol,
  p,
  pre,
  q,
  small,
  strong,
  sub,
  sup,
  tbody,
  td,
  tfoot,
  th,
  thead,
  tr,
  ul {
    border: 0;
    margin: 0;
    padding: 0
  }

  article,
  aside,
  figcaption,
  footer,
  header,
  hgroup,
  nav,
  object,
  section,
  video {
    display: block
  }

  div#htmlfeedback-container * {
    margin: 0;
    padding: 0
  }

  div#htmlfeedback-container {
    font-size: 12px;
    background-color: #fff;
    border-left: 1px solid #96b97d;
    border-top: 1px solid #96b97d;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 5500;
    display: none
  }

  div#htmlfeedback-container.expanded {
    width: 400px
  }

  div#htmlfeedback-container-more {
    padding: 5px
  }

  div#htmlfeedback-container span {
    display: block;
    max-width: 200px
  }

  div#htmlfeedback-container p {
    display: block;
    margin-bottom: 5px;
    max-width: 400px
  }

  div#htmlfeedback-container h3 {
    font-size: 1.2em;
    margin-bottom: 10px
  }


  div#htmlfeedback-container textarea {
    width: 350px;
    height: 140px;
    line-height: 24px;
    float: left;
    padding: 0 3% 0 3%;
    background-color: #fff;
    text-align: initial;
    border: 1px solid #c8c8c8;
    border-radius: 3px;
    overflow: hidden;
    font-size: 1.2em;
    color: #000;
    margin-bottom: 10px
  }

  div#htmlfeedback-container .fb-guide {
    padding-top: 10px;
    background-color: #f7f7f7;
    color: #9a9a9a;
    margin-left: -20px;
    padding-left: 20px;
    border-right-width: 0;
    margin-right: -20px;
    padding-right: 25px;
    margin-bottom: -20px;
    padding-bottom: 15px;
    margin-top: 10px
  }

  div#htmlfeedback-container .fb-email {
    line-height: 34px;
    left: 9px;
    top: 0;
    text-align: initial;
    white-space: nowrap;
    right: 9px;
    height: 35px;
    width: 90%;
    padding: 0 3% 0 3%;
    background-color: #fff;
    border: 1px solid #c8c8c8;
    border-radius: 3px;
    color: #000;
    font-weight: 400;
    font-size: 1.2em
  }

  div#htmlfeedback-container div#htmlfeedback-more {
    display: block;
    background-color: #96b97d;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
    cursor: pointer
  }

  div#htmlfeedback-container div#htmlfeedback-more div#htmlfeedback-close {
    padding-right: 5px;
    float: right
  }

  div#htmlfeedback-container div#htmlfeedback-more div#htmlfeedback-close:hover {
    text-decoration: underline
  }

  a img {
    border: 0
  }

  .row {
    width: 100%;
    max-width: 1260px;
    min-width: 755px;
    margin: 0 auto;
    overflow: hidden
  }

  .col,
  .eightcol,
  .elevencol,
  .fifteencol,
  .fourteencol,
  .ninecol,
  .onecol,
  .sevencol,
  .sixcol,
  .tencol,
  .thirteencol,
  .threecol,
  .twelvecol,
  .twocol {
    margin-right: 1%;
    float: left
  }

  .onecol {
    width: 4%
  }

  .twocol {
    width: 10.4%
  }

  .threecol {
    width: 16.8%
  }

  .site-fix {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 666;
    min-height: 0;
    overflow: hidden;
    background-color: #fff;
    border-color: #eee;
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden
  }

  .site-fix-bottom {
    bottom: 325px
  }


  .listcol {
    width: 27.6%;
    float: left
  }

  .mediatemple {
    width: 29.6%
  }


  .middle-column-home {
    width: 78%;
    margin-right: 0;
    padding: 12px 20px;
    border: 1px solid #eaeaea;
    background-color: #fff;
    border-radius: 4px
  }

  .eightcol {
    width: 48.8%
  }

  .ninecol {
    width: 55.2%
  }


  .elevencol,
  .middle-column {
    width: 68%;
    box-sizing: border-box;
    float: left
  }

  .twelvecol {
    width: 74.4%;
    float: left
  }

  .thirteencol {
    width: 80.8%
  }

  .fourteencol {
    width: 87.2%
  }

  .fifteencol {
    width: 93.6%
  }

  .nav,
  .nav-sub,
  .row-login-desktop,
  .row-login-mobile,
  .sixteencol {
    width: 100%;
    float: left
  }

  .last {
    margin-right: 0
  }

  embed,
  img,
  object {
    max-width: 100%
  }

  img {
    height: auto
  }

  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none
  }

  .right-list button {
    top: 24px !important;
    margin-top: 12px;
    display: none;
    background-color: #96b97d;
    float: right
  }


  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    font-size: 1.2em;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    /* background: #f6f6f6 url(./assets/img/bg.gif) no-repeat; */
    color: #333
  }

  button,
  select,
  textarea {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased
  }

  h2,
  h3,
  h4 {
    font-size: 1em
  }

  .mobile-nav {
    display: none
  }

  button,
  select,
  td,
  textarea,
  th {
    font-size: 13px
  }

  button,
  select,
  textarea {
    outline: 0
  }

  a {
    color: #ffd04b;
    text-decoration: none;
    -o-transition-duration: .2s;
    -o-transition-property: opacity;
    -webkit-transition-duration: .2s;
    -webkit-transition-property: opacity
  }


  a:hover {
    opacity: .8;
    color: #799961
  }

  li,
  ol,
  p,
  ul {
    line-height: 1.5em
  }

  .container {
    padding-left: 10px;
    padding-right: 10px
  }

  .main {
    margin-top: 20px
  }


  .navigation {
    background: #96b97d
  }

  .sub-navigation {
    background: #fff;
    -moz-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    margin-bottom: 20px
  }

  .sub-navigation-mobile {
    display: none
  }

  .nav .current {
    background-repeat: no-repeat;
    background-position: center bottom
  }

  .nav,
  .nav-sub {
    padding: 10px 0 0 20px;
    height: 28px;
    font-size: 1.2em;
    font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif
  }

  .nav {
    text-transform: uppercase
  }

  .nav ul,
  .nav-sub ul {
    list-style: none;
    white-space: nowrap
  }

  .nav li,
  .nav-sub li {
    display: inline;
    margin: 0 20px 0 0
  }

  .nav li a,
  .nav-sub li a {
    padding: 10px 0 10px 0;
    text-decoration: none
  }

  .nav li a {
    color: #fff
  }

  .nav li a:hover {
    color: #e3efd9
  }

  .nav-sub li a {
    color: #333;
    font-weight: 500
  }

  .nav-sub li a:hover {
    color: #777
  }

  hr {
    background-color: #d4d4d4;
    color: #d4d4d4;
    height: 1px;
    border: 0;
    clear: both
  }


  .welcome {
    margin: 12px 10px 0 0;
    color: #fff;
    opacity: .5
  }



  /* 控制 所有资源 */
  .tab {
    padding-left: 4px;
    font-weight: bold;
    display: block;
    font-size: 1.2em;
    line-height: 2.6em;
    font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #545c64;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .15);
    border: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 0;
    -moz-border-top-left-radius: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-top-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    background-color: #f2f2f2;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0iaGF0MCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHgxPSI1MCUiIHkxPSIxMTclIiB4Mj0iNTAlIiB5Mj0iLTE3JSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMDAiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgogICA8L2xpbmVhckdyYWRpZW50PgoKPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjaGF0MCkiIC8+Cjwvc3ZnPg==);
    background-image: -moz-linear-gradient(bottom, rgba(0, 0, 0, .05) -17%, rgba(255, 255, 255, .05) 117%);
    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .05) -17%, rgba(255, 255, 255, .05) 117%);
    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .05) -17%, rgba(255, 255, 255, .05) 117%);
    background-image: linear-gradient(bottom, rgba(0, 0, 0, .05) -17%, rgba(255, 255, 255, .05) 117%)
  }

  .sidebar-box {
    background: #fff;
    margin: 0 0 20px 0;
    padding: 4px;
    -moz-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1)
  }

  .sidebar-box.cate-list {
    padding: 0
  }

  .sidebar-box .cate-items {
    overflow: hidden;
    padding-left: 14px;
    text-align: center;
    padding-bottom: 16px
  }

  .sidebar-box .cate-items a {
    color: #999;
    background-color: #f6f6f6;
    float: left;
    width: 31.3333%;
    margin: 0 1% 1% 0;
    padding: 0;
    font-size: 12px;
    height: 29px;
    line-height: 29px;
    overflow: hidden
  }

  .sidebar-box.about-author .article-body {
    padding: 0
  }

  .design a {
    line-height: 24px;
    background-color: #f6f4f0;
    text-decoration: none;
    display: block;
    padding: 4px;
    border-bottom: 1px solid #efefef;
    color: #000;
    font-size: 13px
  }

  .design a:hover {
    font-weight: bold
  }

  .codelist {
    overflow: hidden
  }

  .codelist-mobile {
    display: none
  }

  .codelist a {
    width: 72px;
    margin: 0 5px 8px 5px;
    float: left;
    text-align: center;
    color: #999;
    font-size: 12px;
    height: 65px;
    overflow: hidden;
    text-decoration: none
  }

  .codelist a:hover {
    color: #ffd04b
  }

  .codelist .codeicon {
    border-radius: 5px;
    margin: 0 auto;
    display: block;
    margin-bottom: 5px
  }

  .codelist a.item-top {
    width: 28%;
    margin: 0 8px 10px 0;
    text-align: left;
    height: 80px;
    color: #bbb;
    background-color: #f6f6f6;
    border-radius: 5px;
    padding: 6px 16px
  }

  .codelist a.item-top .codeicon {
    float: left;
    margin-left: 10px;
    margin-right: 10px
  }

  /* 控制title颜色 */
  .codelist a.item-top h4 {
    color: #545c64;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 1.1;
    text-align: left
  }

  .codelist a.item-top strong {
    display: block;
    color: #666;
    text-align: left
  }

  .codelist a.item-top:hover {
    background-color: #f1f1f1
  }

  .codelist a.item-2 h4 {
    color: #7ccd38
  }

  .codelist a.item-3 h4 {
    color: #52baf5
  }

  .codelist h2 {
    font-size: 18px;
    font-weight: 700;
    margin: 12px 0;
    border-bottom: 1px solid #eaeaea
  }

  .navto-nav {
    cursor: pointer;
    margin: 8px 2px;
    padding: 0;
    font-size: 14px
  }



  h2.left {
    color: #404040;
    background-color: #fff;
    font-size: 120%;
    margin-bottom: 4px;
    padding-bottom: 0;
    margin-top: 0;
    padding-top: 0;
    font-weight: 700
  }


  .marked {
    padding: 0.2em;
    margin: 0;
    background-color: #eceae6;
    border-radius: 3px;
    font-weight: bold;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace
  }

  h2.home {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 120%;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
    color: #900b09;
    background-color: #fff
  }

  h2.tutheader {
    margin: 0;
    padding-top: 5px;
    border-top: 1px solid #d4d4d4;
    clear: both
  }

  .previous-next-links {
    line-height: 24px;
    overflow: hidden;
    padding: 10px 30px 10px 30px;
    background: #fbfbfb;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
    color: #8590a6;
    font-size: 15px;
    border: 1px solid #e7eaf1;
    box-shadow: 0 1px 3px rgba(0, 37, 55, .05);
    box-sizing: border-box
  }

  .previous-next-links a {
    color: grey
  }

  .previous-design-link {
    float: left
  }

  .next-design-link {
    float: right
  }


  .big-middle-column {
    font-size: 13px
  }

  .sidebar-box.sidebar-cate {
    padding: 0;
    margin: 0;
    background-color: #f6f4f0
  }

  .content-ad-728 {
    padding: 1em 0 1em 0;
    margin: 1em 0 2em 0;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1
  }

  .lower-ad-block {
    float: none !important;
    margin: 0 !important
  }

  .field-info {
    margin: 10px 0 5px 15px;
    float: left;
    color: #111;
    opacity: .5
  }

  .home_feature_thumbnail {
    margin: 0 0 20px 0
  }


  .left-column .gallery-list .design img {
    margin-bottom: 10px
  }


  .design-image img,
  .design-image-detail img,
  .gallery-image {
    -webkit-box-shadow: rgba(0, 0, 0, .246094) 0 1px 2px 0, transparent 0 0 0 0, transparent 0 0 0 0;
    border-radius: 3px;
    border-style: solid;
    border-width: 3px;
    border-color: #fff;
    box-shadow: rgba(0, 0, 0, .246094) 0 1px 2px 0, transparent 0 0 0 0, transparent 0 0 0 0;
    box-sizing: border-box;
    outline-color: #585652;
    outline-width: 0
  }

  .design-image {
    background: #fbfbfb;
    padding: 20px 0 20px 0;
    width: 100%;
    text-align: center;
    border-bottom: 0
  }

  .design-image img {
    width: 94%
  }

  .design-image-detail {
    overflow: hidden;
    background: #fdfdfd;
    margin: 0 0 20px 0;
    padding: 20px 0 20px 0;
    width: 100%;
    text-align: center
  }

  .design-image-detail img {
    width: 44%;
    margin: 0 3% 0 3%;
    float: left
  }

  .design-details {
    overflow: hidden
  }

  .design-description {
    width: 45%;
    margin: 0 5% 0 0;
    float: left;
    min-width: 198px
  }

  .design-meta {
    width: 45%;
    float: left;
    min-width: 198px
  }

  .design-page .author,
  .design-page .categories,
  .design-page .design-colors,
  .design-page .rating {
    border-bottom: 1px solid #efefef;
    width: 100%;
    padding: 10px 0 10px 25px;
    margin: 0;
    display: block
  }

  span.new {
    float: right;
    color: #fff;
    background-color: #90b575;
    font-weight: 700;
    padding-left: 1px;
    padding-right: 1px;
    border: 1px solid #fff;
    outline: 1px solid #90b575;
    line-height: 16px
  }

  .sidebar-box table {
    width: 100%;
    margin-top: 10px
  }

  .sidebar-box td,
  .sidebar-box td.key {
    padding: 5px 20px 5px 0;
    vertical-align: middle;
    font-size: 1em;
    color: grey
  }

  .sidebar-box td.key {
    color: #000
  }

  .sidebar-box tr {
    border-bottom: 1px solid #efefef;
    display: block
  }

  .sidebar-box table td:nth-child(odd) {
    width: 30px
  }

  .sidebar-box td.step {
    width: 40px !important
  }



  .gallery-list {
    padding: 0
  }

  .design {
    padding: 4px;
    margin: 0;
    overflow: hidden
  }

  .design img {
    margin: 0 0 5px 0
  }

  .design:nth-child(even) {
    background: #fbfbfb;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef
  }

  .design .author {
    margin: 2px 0 0 0
  }

  .swatch {
    background: #e9e9e9;
    float: right;
    padding: 0 2px 0 2px
  }

  .swatch a {
    width: 11px;
    height: 11px;
    text-indent: -9999px;
    float: left;
    margin: 4px 3px 4px 3px
  }

  .re-box {
    margin: 0;
    padding: 0;
    text-align: center
  }

  .re-box-large {
    background-color: #fff
  }

  .re-box-premium {
    background-color: #efefef
  }

  .ad-336280 {
    width: 360px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    padding: 8px
  }

  .re-600160 {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
    padding: 2px
  }

  .ad-premium {
    width: 260px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden
  }


  .imgset {
    float: left;
    border: 0;
    margin-right: 6px
  }



  .fade.in {
    opacity: 1
  }


  .fixed-btn .modal.fade.in {
    top: auto;
    bottom: 0;
    height: 188px;
    width: 128px;
    padding: 10px;
    margin: 0;
    right: 65px;
    left: auto;
    text-align: center
  }

  .fixed-btn .modal.fade.in h4 {
    margin: 0 0 10px;
    font-size: 14px
  }

  .fixed-btn .modal.fade.in:after,
  .fixed-btn .modal.fade.in:before {
    position: absolute;
    top: 109px;
    right: -8px;
    content: '';
    display: inline-block;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 9px solid white
  }

  .fixed-btn .modal.fade.in:before {
    right: -9px;
    border-left: 9px solid #d9d9d9
  }

  .fixed-btn {
    position: fixed;
    right: 1%;
    bottom: 5%;
    width: 40px;
    border: 1px solid #eee;
    background-color: white;
    font-size: 24px;
    z-index: 1040;
    -webkit-backface-visibility: hidden
  }

  .fixed-btn a {
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center
  }

  .fixed-btn a:after {
    content: ".";
    font-size: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle
  }

  .fixed-btn a i {
    vertical-align: middle
  }

  .fixed-btn .go-top {
    border-bottom: 1px solid #eee
  }

  .fixed-btn .writer {
    background-color: #96b97d;
    font-size: 18px;
    color: white
  }

  .fixed-btn .hide-go-top {
    display: none;
    opacity: 0;
    filter: alpha(opacity=0)
  }


  .hide {
    display: none
  }

  @media handheld,
  only screen and (max-width:1024px) {
    .right-column {
      display: none
    }

    .pc-nav {
      display: none
    }

    .mobile-nav {
      display: inline-block;
      width: 100%
    }

    .middle-column-home {
      width: 76%;
      margin-right: 0
    }

    .middle-column {
      width: 76%;
      box-sizing: border-box;
      float: left
    }

    .big-middle-column {
      width: 100%
    }

    .swatch {
      display: none
    }

    .home_feature_thumbnail {
      width: 43%;
      float: right;
      margin: 0 0 20px 20px
    }

    .sub-navigation-articles {
      display: none
    }


    .codelist a.item-top h4 {
      font-size: 14px;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis
    }

    .codelist a.item-top {
      width: 40%
    }
  }

  @media handheld,
  only screen and (max-width:768px) {
    body {
      -webkit-text-size-adjust: none;
      -webkit-appearance: none
    }

    .right-list button {
      display: block
    }

    .container,
    .row,
    body {
      min-width: 0;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0
    }

    .col,
    .eightcol,
    .elevencol,
    .fifteencol,
    .fourteencol,
    .ninecol,
    .onecol,
    .sevencol,
    .sixcol,
    .sixteencol,
    .tencol,
    .thirteencol,
    .threecol,
    .twelvecol,
    .twocol {
      width: auto;
      float: none;
      margin-left: 0;
      margin-right: 0
    }

    .ad-336280 {
      display: none
    }

    .right-column {
      display: none
    }

    .middle-column,
    .middle-column-home {
      width: 100%;
      box-sizing: border-box;
      float: left
    }

    .codelist a.item-top strong {
      text-align: left
    }

    .right-column {
      display: none
    }
  }

  @media handheld,
  only screen and (max-width:480px) {

    .ad-336280 {
      width: 100%;
      padding: 0
    }

    .codelist-desktop {
      display: none
    }

    .codelist-mobile {
      display: block
    }

    .sub-navigation {
      display: none
    }

    .sub-navigation-mobile {
      display: block;
      width: 90%;
      margin: 0 auto
    }

    .nav-sub-mobile {
      font-size: 1.1em;
      font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      padding: 0
    }

    .mobile-nav-hidden {
      display: none;
      padding: 10px 0 0 0;
      background: #fff;
      border-right: 1px solid #efefef;
      border-left: 1px solid #efefef
    }

    .nav-sub-mobile ul {
      list-style: none
    }

    .nav-sub-mobile li a {
      padding: 5px 0 5px 20px;
      display: block;
      text-decoration: none
    }

    .nav-sub-mobile li a:hover,
    .nav-sub-mobile a {
      background: #f1f1f1
    }

    .nav-sub-mobile li a {
      color: #333
    }

    .nav-sub-mobile li a:hover {
      color: #777
    }


    .nav-submit {
      display: none
    }

    .right-column {
      display: none
    }

    .nav li,
    .nav-sub li {
      margin: 0 10px 0 0
    }


    .row-search-mobile {
      margin: 0 0 10px 0
    }

    .search-desktop {
      display: none
    }


    .tab {
      margin: 0 auto
    }


    .image-alternative {
      display: none
    }

    .middle-column-home {
      width: 100% !important
    }

    .gallery-filter-color h3 {
      margin-top: 0
    }


    .design-description {
      width: 100%;
      margin: 0
    }

    .design-meta {
      width: 100%
    }

    .content-ad-728 {
      display: none
    }

    .lower-ad-block {
      display: none
    }

    .codelist a.item-top .codeicon {
      display: none
    }

    .codelist a.item-top strong {
      display: none
    }

    .codelist a.item-top {
      width: 28%;
      height: 40px;
      color: #bbb;
      background-color: #f6f6f6;
      border-radius: 5px;
      padding: 0
    }

    .codelist a.item-top h4 {
      font-size: 14px;
      text-align: center
    }
  }


  @media handheld,
  only screen and (max-width:1260px) {
    .runoob-block {
      display: none
    }

  }

  .important {
    color: red;
    font-weight: bold
  }

  .hide_box {
    z-index: 999;
    filter: alpha(opacity=50);
    background: #666;
    opacity: 0.5;
    -moz-opacity: 0.5;
    left: 0;
    top: 0;
    height: 99%;
    width: 100%;
    position: fixed;
    display: none
  }



  .note-body p,
  .note-body ul li {
    font-size: 14px;
    line-height: 2em
  }


  @-webkit-keyframes fadeIn {
    from {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }


  .question-container p {
    font-size: 16px;
    font-weight: bold
  }
</style>