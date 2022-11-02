import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '../src/routes/routes'
import Toaster from '@meforma/vue-toaster';


const app = createApp(App);
app.config.globalProperties.$axios = axios
app.use(router)
app.use(Toaster)
app.mount('#app')