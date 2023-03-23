<template>
  <div class="store">
    <div class="NavigationBbar">
      <el-menu :default-active="activeIndex2" class="my-menu" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="2">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/ocr">OCR文字识别</router-link>
        </el-menu-item>
        <el-menu-item index="1">友人A Store</el-menu-item>
        <el-menu-item index="4">
          <a href="http://120.78.161.175/flie/README.pdf">个人文档</a>
        </el-menu-item>

      </el-menu>

    </div>

    <!-- 手机端提示区 -->
    <!-- 手机端的适配 -->
    <div class="whereUsePhone">
      <h2>为了更好的体验。请换成pc端浏览</h2>
    </div>
    <!-- 内容区 -->

    <div class="container main">

      <div class="row">
        <div class="col home-left-column left-column" id="main-left-cloumn">

          <div class="nav-tab" id="cate0"><i class="fa fa-reorder"></i> &nbsp;All Store</div>
          <!-- 修改右侧的导航条 -->
          <div class="sidebar-box gallery-list">
            <div class="design" id="cate1">
              <div class="navto-nav"><i></i> &nbsp; 软件推荐</div>
            </div>
            <div class="design" id="cate2">
              <div class="navto-nav"><i></i> &nbsp; 浏览器插件</div>
            </div>
            <div class="design" id="cate3">
              <div class="navto-nav"><i></i> &nbsp; 网课影视</div>
            </div>
            <div class="design" id="cate4">
              <div class="navto-nav"><i></i> &nbsp; 特色网站</div>
            </div>
            <div class="design" id="cate5">
              <div class="navto-nav"><i></i> &nbsp; 其他</div>
            </div>
          </div>

        </div>
        <!-- 正常pc端的适配 -->
        <div class="col middle-column-home">
          <div class="codelist codelist-desktop cate1">

            <h2><i class="fa fa-list"></i> 软件推荐</h2>


            <a class="item-top item-1" href="https://pan.baidu.com/s/1IUcYkZ6lRw_BJi143-L2bQ?pwd=52eu">
              <h4>JetBrains</h4>
              <img class="codeicon codeicon-36" alt="html5" height="36" width="36"
                src="../assets/img/store/software/jetbrains.png">
              <strong>包含IDEA、pycharm开发工具</strong>
            </a>

            <a class="item-top item-1" href="https://www.aliyundrive.com/s/LMdWXE67Gna">
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


            <a class="item-top item-1" href="https://www.aliyundrive.com/s/66kzwu6sa1v">
              <h4>TamperMonkey</h4>
              <img class="codeicon codeicon-36" alt="TamperMonkey" height="36" width="36"
                src="../assets/img/store/plug-in/TamperMonkey.jpg">
              <strong>最受欢迎的浏览器扩展。提供免费看会员视频的教程</strong>
            </a>

            <a class="item-top item-1" href="https://chrome.zzzmh.cn/info/cfhdojbkjhnklbpkdaibdccddilifddb">
              <h4>Adblock Plus</h4>
              <img class="codeicon codeicon-36" alt="Adblock Plus" height="36" width="36"
                src="../assets/img/store/plug-in/AdblockPlus.jpg">
              <strong>享受没有恼人广告的网络世界</strong>
            </a>

            <a class="item-top item-1" href="https://chrome.zzzmh.cn/info/dbfmnekepjoapopniengjbcpnbljalfg">
              <h4>Infinity</h4>
              <img class="codeicon codeicon-36" alt="Infinity" height="36" width="36"
                src="../assets/img/store/plug-in/Infinity.jpg">
              <strong>自定义你的浏览器桌面,美化</strong>
            </a>

          </div>
          <div class="codelist codelist-desktop cate3">

            <h2><i class="fa fa-list"></i> 网课影视</h2>


            <a class="item-top item-1" href="https://www.aliyundrive.com/s/KfaEorqYy6z">
              <h4>Python爬虫</h4>
              <img class="codeicon codeicon-36" alt="iconfont" height="36" width="36"
                src="../assets/img/store/video-resources/spider.png">
              <strong>慕课网-分布式爬虫课程</strong>
            </a>

            <a class="item-top item-1" href="https://www.aliyundrive.com/s/W18dnB8XjZL">
              <h4>学习Redis</h4>
              <img class="codeicon codeicon-36" alt="iconfont" height="36" width="36"
                src="../assets/img/store/video-resources/redis.jpg">
              <strong>从入门到高可用分布式实践</strong>
            </a>

            <a class="item-top item-1" href="https://www.aliyundrive.com/s/bS6jtsi5Xs3">
              <h4>TypeScript入门</h4>
              <img class="codeicon codeicon-36" alt="iconfont" height="36" width="36"
                src="../assets/img/store/video-resources/TypeScript.png">
              <strong>慕课-下一代前端开发语言</strong>
            </a>

            <a class="item-top item-1" href="https://www.aliyundrive.com/s/jHQQ1w4V4Bv">
              <h4>Top250</h4>
              <img class="codeicon codeicon-36" alt="iconfont" height="36" width="36"
                src="../assets/img/store/video-resources/DouBantop250.jpg">
              <strong>豆瓣评分最高的250部电影</strong>
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

        </div>
      </div>
    </div>

    <!-- 对话框 -->
    <el-dialog title="Tip" v-model="dialogShow" width="30%" :show-close="false">
      <span>{{message}}</span>
      <br>
      <br>
      <el-button @click="dialogShow = false">取 消</el-button>
      <el-button type="primary" @click="copyLink">复制链接</el-button>
    </el-dialog>
  </div>
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
      copyLink() {
        if (this.message != '') {
          this.$copyText(this.message).then(() => {
              this.$message({
                type: 'success',
                message: '复制成功'
              })
            },
            () => {
              this.$message({
                type: 'error',
                message: '复制失败'
              })
            }
          )
        } else {
          this.$message('暂无文本可复制');
        }
        this.dialogShow = false
      }
    },
  }
</script>
<style scoped>
  .container {
    /* 调整内容区的字距 */
    letter-spacing: 0.2px;

  }

  .whereUsePhone {
    display: none;
  }

  /* 不知道为什么这个页面的顶部导航条高度缺失。所以指定了 */
  .my-menu {
    height: 58.4px;
  }

  .NavigationBbar {
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

    .whereUsePhone {
      display: block;
    }
  }

  .whereUsePhone {
    color: red;
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

  .last {
    margin-right: 0
  }

  img {
    max-width: 100%
  }

  img {
    height: auto
  }

  html {
    font-size: 62.5%
  }

  body {
    margin: 0;
    /* font-size: 1.2em; */
    font: -apple-system-font, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
    /* font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; */
  }

  h2,
  h3,
  h4 {
    font-size: 1em
  }

  button,
  select,
  td,
  th {
    font-size: 13px
  }

  a {
    text-decoration: none;
    -o-transition-duration: .2s;
    -o-transition-property: opacity;
    -webkit-transition-duration: .2s;
    -webkit-transition-property: opacity
  }

  li,
  ol,
  p {
    line-height: 1.5em
  }

  .container {
    padding-left: 10px;
    padding-right: 10px
  }

  .main {
    margin-top: 20px
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



  /* 控制 左侧导航条的 All Store */
  .nav-tab {
    padding-left: 4px;
    font-weight: bold;
    display: block;
    /* font-size: 1.2em; */
    /* 字体大小会被影响,所以指定了具体的大小 */
    font-size: 16.8px;
    line-height: 2.6em;
    /* font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: -apple-system-font, BlinkMacSystemFont, Helvetica Neue, PingFang SC, micross, monospace;
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

  .field-info {
    margin: 10px 0 5px 15px;
    float: left;
    color: #111;
    opacity: .5
  }


  .left-column .gallery-list .design img {
    margin-bottom: 10px
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

  .design {
    margin: 2px 0 0 0
  }

  @media handheld,
  only screen and (max-width:1024px) {

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

    .middle-column,
    .middle-column-home {
      width: 100%;
      box-sizing: border-box;
      float: left
    }

    .codelist a.item-top strong {
      text-align: left
    }
  }

  @media handheld,
  only screen and (max-width:480px) {

    .codelist-desktop {
      /* 控制显隐  */
      /* display: none */
    }

    .nav-tab {
      margin: 0 auto
    }

    .middle-column-home {
      width: 100% !important
    }

    .gallery-filter-color h3 {
      margin-top: 0
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
  only screen and (max-width:1260px) {}

  .important {
    color: red;
    font-weight: bold
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
</style>