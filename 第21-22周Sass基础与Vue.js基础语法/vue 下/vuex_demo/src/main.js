import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// store 全局的仓库
import store from './store'

createApp(App).use(store).use(router).mount('#app')
