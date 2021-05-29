import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SvgIcon from '@jamescoyle/vue-icon'

createApp(App).component('material-icon', SvgIcon).use(router).mount('#app')
