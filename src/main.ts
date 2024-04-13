import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { createPinia } from 'pinia'
// @ts-ignore
import { registerPlugins } from '@/plugins'
import router from './routes/routes'

const app = createApp(App)

app.use(createPinia())  
registerPlugins(app)
app.use(router)

app.mount('#app')