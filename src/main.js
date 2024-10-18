

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
//引入初始化样式文件
import '@/styles/common.scss'



const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
