import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default {
  async getUser(tgId) {
    return axios.get(`${API_BASE}/user/${tgId}`)
  },
  async getEmotions(tgId) {
    return axios.get(`${API_BASE}/emotions/${tgId}`)
  },
  async getForecast(tgId) {
    return axios.get(`${API_BASE}/forecast/${tgId}`)
  },
  async createEmotion(tgId, emotionData) {
    return axios.post(`${API_BASE}/emotion/${tgId}`, emotionData)
  }
}