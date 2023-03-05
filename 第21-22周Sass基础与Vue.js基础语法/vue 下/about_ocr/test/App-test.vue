<template>
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip">只能上传jpg/png文件,且不超过500kb</div>
    </el-upload>

    <!-- <MyTip>
        <template #header>
            <div>我是插槽header的值</div>
        </template>
        <template #default>
            <div>我是插槽的值</div>
        </template>
        <template #footer>
            <div>我是插槽footer的值</div>
        </template>
    </MyTip> -->

    <div>
        <input type="file" @change="onFileChange">
        <button @click="uploadFile">上传</button>
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image">
    </div>
</template>

<script>
    // import MyTip from './components/MyTip.vue'
    import axios from 'axios'

    export default {
        data() {
            return {
                file: null,
                imageUrl: "",
                src: "../../assets/image.png"
            }
        },
        //注册局部组件
        components: {
            // MyTip
        },
        methods: {
            onFileChange(event) {
                this.file = event.target.files[0]
            },
            async uploadFile() {
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
        }
    }
</script>

<style>
    div {
        display: block;
    }

    .block {
        height: 400px;
        width: 400px;
        object-fit: cover;
    }

    .demonstration {
        text-align: center;
        margin-top: 20px;
    }

    .upload-demo {
        background-color: #fff;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        box-sizing: border-box;
        width: 360px;
        height: 180px;
        text-align: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
</style>