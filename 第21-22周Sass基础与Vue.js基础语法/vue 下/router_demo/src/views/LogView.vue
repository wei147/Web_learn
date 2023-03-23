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
      <el-menu-item index="4">
        <a href="http://120.78.161.175/flie/README.pdf">个人文档</a>
      </el-menu-item>
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
          <el-timeline>

            <template v-for="item in result.recordList" :key="item.flag">
              <el-timeline-item :timestamp="item.roughTime" placement="top" :color='item.status'>
                <router-link :to="'/log-detail/'+item.id">
                  <el-card>
                    <h4>{{item.title}}</h4>
                    <p>{{item.author}} 提交于 {{item.createTime}}</p>
                  </el-card>
                </router-link>
              </el-timeline-item>
            </template>

            <el-timeline-item timestamp="2023/03/8" placement="top" color='#0bbd87'>
              <el-card>
                <h4>创建 初始网页首页</h4>
                <p>wei 提交于 2023-03-09 11:46</p>
              </el-card>
            </el-timeline-item>

          </el-timeline>
        </div>
      </div>
    </el-col>
    <el-col :xs="6" :sm="4" :md="4" :lg="6" :xl="6">
      <div class="grid-content"></div>
    </el-col>
  </el-row>

</template>
<script>
  // import moment from 'moment'
  import axios from 'axios'
  import {
    onMounted,
    reactive
  } from 'vue'
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

<!-- 发送请求获取数据 -->
<script setup>
  let result = reactive({
    recordList: []
  });
  onMounted(async () => {
    console.log("hi hi ");
    try {
      axios.get('http://120.78.161.175:8001/record/getList', {})
        .then(res => {
          if (res.data.status == 10000 || res.data.data != null) {
            result.recordList = res.data.data
            console.log(result);
          } else {
            console.log("获取失败");
          }
        })
    } catch (error) {
      console.log("发生未知的错误");
    }
    return result
  })
</script>

<style scoped>
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