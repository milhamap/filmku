import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'primeicons/primeicons.css';

const app = createApp(App)
app.use(router)
app.mount('#app')