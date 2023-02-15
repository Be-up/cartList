import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "./router/index.js"
import { createPinia } from 'pinia'
import {createPersistedState} from 'pinia-plugin-persistedstate'

import products from '../mock/mock'
let app=createApp(App)
// app.use(router)
// app.mount("#app")
// console.log(products,"666")
const pinia =createPinia()
pinia.use(createPersistedState({
    serializer:{
        serialize:JSON.stringify,
        deserialize:JSON.parse
    }
}))

app.config.globalProperties.$prods=products

// createApp(App).use(createPinia()).use(router).mount('#app')
app.use(pinia).use(router).mount('#app')
// console.log(app)
