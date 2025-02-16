import { createApp } from 'vue'
import App from './App.vue'
import api from './api'
import UserCard from './components/UserCard.vue'
import EmotionTable from './components/EmotionTable.vue'

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp
tg.expand()
tg.enableClosingConfirmation()

const app = createApp(App)

// Глобальная конфигурация
app.config.globalProperties.$tg = tg
app.config.globalProperties.$api = api

// Глобальные компоненты
app.component('UserCard', UserCard)
app.component('EmotionTable', EmotionTable)

app.mount('#app')