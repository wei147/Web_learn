<template>
  <div class="OCR">
    <div class="flag">
      <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="2">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/log">日志记录</router-link>
        </el-menu-item>
        <el-menu-item index="1">OCR文字识别</el-menu-item>
        <el-menu-item index="4">
          <a href="http://120.78.161.175/flie/README.pdf">个人文档</a>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 内容区 -->
    <!--  col-sm-平板--屏幕宽度等于或者大于576px
        col-md-桌面显示屏--屏幕宽度大于或者等于768px
        col-lg-大桌面显示器--屏幕宽度大于或者等于992px
        col-xl-超大屏幕显示器--屏幕宽度大于等于1200px 
  -->
    <div style="height:100%;width:100%">
      <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="center">
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
          <div class="grid-content bg-purple">
            <el-upload class="upload-demo" drag action=" " list-type="picture" ref="upload" :on-change="handleChange"
              :auto-upload="false" :limit="limit" :on-exceed="handleExceed" :multiple="false">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip">只能上传jpg/png文件,且不超过2M</div>
            </el-upload>
          </div>
        </el-col>
        <el-col :xs="3" :sm="3" :md="3" :xl="4">
          <div class="grid-content bg-purple-light">
            <div class="b-button-div">
              <div class="s-button-div">
                <el-button style="margin-top: 10px;" type="primary" class="s-button" @click="submitUpload"
                  :loading="loading">
                  提取文本<el-icon>
                    <ArrowRightBold />
                  </el-icon>
                </el-button>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xs="6" :sm="6" :md="6" :xl="6">
          <div class="grid-content bg-purple">
            <div>
              <el-input type="textarea" :show-word-limit="true" :rows="10" placeholder="提取文本内容" v-model="text">
              </el-input>
              <el-button type="text" class="copyText" :disabled="show" @click="copyText(text)">复制</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>
<script>
  import axios from 'axios'
  import {
    ArrowRightBold
  } from '@element-plus/icons-vue'
  export default {
    data() {
      return {
        fileList: [],
        text: '',
        limit: 1,
        loading: false,
        show: true,

        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    components: {
      ArrowRightBold
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      // ocr method
      //通过onchanne触发方法获得文件列表
      handleChange(file, fileList) {
        this.fileList = fileList;
        console.log(this.fileList[0]);
        const isJPG = fileList[0].raw.type === "image/jpeg" || fileList[0].raw.type === "image/png";
        const isLt2M = fileList[0].raw.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("上传图片格式只能是 jpg或png! 文件已清除");
          this.$refs.upload.clearFiles();
          console.log("不合要求的文件已清除");
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB! 文件已清除');
          this.$refs.upload.clearFiles();
          console.log("不合要求的文件已清除");
        }
        return isJPG && isLt2M;
      },
      async submitUpload() {
        if (this.fileList.length == 0) {
          return this.$message({
            message: '图片不能为空',
            type: 'warning'
          });
        }
        this.loading = true
        const formData = new FormData()
        // 这里的file要对应controller的@RequestParam 参数名
        //文件信息中raw才是真的文件
        formData.append("file", this.fileList[0].raw);
        try {
          axios.post('http://120.78.161.175:8001/getOcrText', formData, {
            timeout: 8500 * 1
          }).then(res => {
            // axios.post('http://120.78.161.175:8000/ocr/upload/file', formData).then(res => {
            if (res.data.status == 10000 || res.data.data != null) {
              this.open2()
              this.text = res.data.data
              this.loading = false
              this.show = false
            } else {
              this.loading = false
              this.open4()
            }
          })
        } catch (error) {
          if (error.code === 'ECONNABORTED' || error.message === "Network Error" || error.message.includes(
              "timeout")) {
            this.open5()
            this.loading = false
          } else {
            this.open4()
          }
        }
      },
      handleExceed() {
        this.open3()
      },
      copyText() {
        if (this.text != '') {
          this.$copyText(this.text).then(() => {
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
            })
        } else {
          this.$message('暂无文本可复制');
        }

      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '提取成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '只能上传一张图片喔',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('提取失败');
      },
      open5() {
        this.$message.error('请求超时，请稍后重试');
      },
    }
  }
</script>

<style scoped>
  .flag {
    position: sticky;
    /* 新属性sticky */
    top: 0;
    /* 距离页面顶部距离 */
    z-index: 100
  }

  /* from ocr */
  /* 屏幕在500px的时候 */
  @media screen and (max-width: 700px) {
    .el-upload__text {
      font-size: 10px !important;
    }

    .el-upload__tip {
      font-size: 10px !important;
    }

    textarea {
      font-size: 10px !important;
    }

    .grid-content {
      height: auto;
      min-width: 60px;
    }

    .s-button {
      position: absolute;
      top: -20%;
      right: 40%;
    }

    .el-row-two {
      margin-top: 300px;
    }
  }

  .el-row {
    margin-bottom: 20px;

    /* &:last-child {
      margin-bottom: 0;
    } */
  }

  .el-row-two {
    margin-bottom: 80px;
    margin-top: 100px;

  }

  .grid-content {
    /* background-color: rgb(239, 239, 239); */
    /* background-color: rgb(255, 255, 255); */
    border-radius: 4px;
    min-height: 240px;
    min-width: 60px;
  }

  .b-button-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .s-button-div {
    display: flex;
    margin-top: 80%;
    /* margin-left: 52px; */
  }

  textarea {
    min-height: 200px;
  }

  .copyText {
    display: flex;
    margin-left: 90%;
  }

  .upload-demo {
    background-color: #f3f3f3;
    border: 1.5px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: auto;
    /* height: 220px; */
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
</style>