import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import vSelect from 'vue-select';
import VueCookies from 'vue-cookies';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// import 'expose?$!expose?jQuery!jquery';
import '../style.css'
// import '../public/script/script.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'primeicons/primeicons.css';
import 'jquery/dist/jquery.min.js'
import 'flowbite';
// import all tailwindcss with node-module
// import 'tailwindcss/tailwind.css'
// import '/dist/output.css';
// import 'https://code.jquery.com/jquery-3.6.0.min.js';
// import 'https://cdn.tailwindcss.com';
// import '../script/script.js';
// import '../script/tailwind.config.js';
// import tailwind cdn
// import 'https://cdn.tailwindcss.com'


const app = createApp(App)

app.component('v-select', vSelect);

app.use(Toast);
app.use(VueCookies);
app.use(router)
app.mount('#app')