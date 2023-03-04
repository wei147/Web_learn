
   
   <!-- npm install --save axios  安装axios -->
   <template>
        <div>
            <input type="file" @change="onFileChange">
            <button @click="uploadFile">上传</button>
            <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image">
        </div>
    </template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                file: null,
                imageUrl: null
            }
        },
        methods: {
            onFileChange(event) {
                this.file = event.target.files[0]
            },
            async uploadFile() {
                const formData = new FormData()
                formData.append('image', this.file)
                try {
                    const response = await axios.post('127.0.0.1:8000/ocr/upload/file', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    console.log(response);
                    this.imageUrl = response.data.url
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }
</script>