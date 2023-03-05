<template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" :offset="2">
      <!-- 上传图片区域 -->
      <div class="Left-area">
        <div class="grid-content bg-purple-light">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" list-type="picture"
            :auto-upload="false" :before-upload="beforeAvatarUpload" :multiple="false">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip">只能上传jpg/png文件,且不超过2M</div>
          </el-upload>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="17">
          <div class="middle-area"></div>
          <div class="grid-content bg-purple">
            <el-button style="margin-top: 10px;" type="primary"
              @click="submitUpload">
              提取文本<i class="el-icon-arrow-right el-icon--right"></i>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <!-- 文本框区域 -->
      <div class="right-area">
        <div class="grid-content bg-purple">
          <el-input type="textarea" :show-word-limit="true" :rows="10" placeholder="提取文本内容" v-model="textarea">
          </el-input>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
  <!-- <div>
      <input type="file" @change="onFileChange">
      <button @click="uploadFile">上传</button>
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image">
  </div> -->
</template>

<script>
  // import MyTip from './components/MyTip.vue'
  import axios from 'axios'

  export default {
    data() {
      return {
        file: null,
        imageUrl: "",
        textarea: '',
      }
    },
    //注册局部组件
    components: {
      // MyTip
    },
    methods: {
      async submitUpload() {
        const formData = new FormData()
        // 这里的file要对应controller的@RequestParam 参数名
        formData.append('file', this.file)
        try {
          const response = await axios.post('http://localhost:8000/ocr/upload/file', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          console.log(response);
          this.imageUrl = response.data.data
        } catch (error) {
          console.error(error)
        }
      }
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      // return isJPG && isLt2M;
      return isLt2M;
    }
  }
</script>

<style>
  .el-col {
    border-radius: 4px;
  }

  /* .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */

  .Left-area {
    margin-top: 20%;
  }

  .middle-area {
    margin-bottom: -20%;
  }

  .right-area {
    margin-top: 20%;
    margin-right: 20%;
  }

  .upload-demo {
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 400px;
    height: 220px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
</style>