import { createApp } from 'vue'
import App from './App.vue'
import api from './api'
import './assets/main.css'

const app = createApp(App)

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp
tg.expand()
tg.enableClosingConfirmation()

// Глобальная конфигурация
app.config.globalProperties.$tg = tg
app.config.globalProperties.$api = api

// Подключение иконок
import { PlusIcon, SearchIcon } from 'lucide-vue-next'
app.component('PlusIcon', PlusIcon)
app.component('SearchIcon', SearchIcon)

app.mount('#app')