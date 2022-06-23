import {
    createApp 
} from 'vue'
import App from './App.vue'
import router from './router'
import {
    createPinia 
} from 'pinia'
import VueI18n from './plugins/i18n/entry'
import ElementPlus from 'element-plus'
import 'normalize.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(VueI18n)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')