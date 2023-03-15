import {
    createApp
} from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import router from './router'
import VueClipBoard from 'vue-clipboard2'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

createApp(App).use(router).use(VueClipBoard).use(ElementPlus).mount('#app')