// root component
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// creating app
const app = createApp(App)

// telling app to use pinia and router
app.use(createPinia())
app.use(router)

// we are mounting the app
app.mount('#app')
