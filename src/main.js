import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import OwlCarousel from 'v-owl-carousel'


createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('carousel', OwlCarousel)
    .mount('#app')

import 'bootstrap/dist/js/bootstrap.bundle.js'