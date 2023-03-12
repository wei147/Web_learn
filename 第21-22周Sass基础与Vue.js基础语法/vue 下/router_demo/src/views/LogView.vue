<template>

  <div class="flag">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="2">
        <router-link to="/">首页</router-link>
      </el-menu-item>

      <el-menu-item index="1">
        <router-link to="/log">日志记录</router-link>
      </el-menu-item>
      <el-menu-item index="3" disabled>日志详情</el-menu-item>
    </el-menu>
  </div>
  <!-- 内容区 -->

  <el-row :gutter="10">
    <el-col :xs="6" :sm="4" :md="4" :lg="6" :xl="6">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="12" :sm="16" :md="16" :lg="12" :xl="12" :pull="5">
      <div class="grid-content">
        <div class="source">
          <div class="block">
            <el-timeline class="timeline">

              <el-timeline-item timestamp="2023/3/12" placement="top">
                <router-link to="/log-detail">
                  <el-card>
                    <h4>新增 日志页面 element-ui实现</h4>
                    <p>wei 提交于 2023/3/12 19:13</p>
                  </el-card>
                </router-link>
              </el-timeline-item>

              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 实现随机切换背景颜色</h4>
                  <p>wei 提交于 2023/3/11 03:13</p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>新增 OCR文字识别web应用</h4>
                  <p>wei 提交于 2023/3/09 02:03</p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item timestamp="2023/3/13" placement="top">
                <el-card>
                  <h4>更新 首页图标</h4>
                  <p>wei 提交于 2023/3/12 20:44</p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item timestamp="2023/3/13" placement="top">
                <el-card>
                  <h4>更新 首页图标</h4>
                  <p>wei 提交于 2023/3/12 20:44</p>
                </el-card>
              </el-timeline-item>

              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-backtop target=".timeline" :bottom="100" :visibility-height="200">
                <div class="upFlag">UP</div>
              </el-backtop>
            </el-timeline>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="4" :md="4" :lg="6" :xl="6">
      <div class="grid-content"></div>
    </el-col>
  </el-row>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
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

  .source {
    padding: 24px;
    /* margin-left: 100px; */
  }

  /* 屏幕在800px的时候 */
  @media screen and (max-width: 500px) {
    .source {
      padding: 24px;
    }

    .timeline {
      border-radius: 2px;
      margin: 0;
      font-size: 12px;
      list-style: none;
      width: 200px;
      height: auto;
    }
  }

  .timeline {
    border-radius: 2px;
    margin: 0;
    font-size: 14px;
    list-style: none;
    width: 540px;
    height: auto;

    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  el-timeline-item {
    position: relative;
    padding-bottom: 20px px;
  }

  .upFlag {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
  }
</style>