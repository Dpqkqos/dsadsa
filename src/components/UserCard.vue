<template>
    <div class="bg-gradient-purple rounded-2xl p-4 text-white">
      <div class="flex items-center gap-4">
        <img
          :src="user.avatar"
          alt="Profile"
          class="w-16 h-16 rounded-full object-cover border-2 border-white"
        />
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">{{ user.name }}</h2>
          <div class="space-y-1">
            <p class="flex items-center gap-2">
              <span class="text-sm">📅</span>
              {{ user.daysOnPlatform }} дней на платформе
            </p>
            <p class="flex items-center gap-2">
              <span class="text-sm">💬</span>
              Ваш запрос: {{ user.lastRequest }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .bg-gradient-purple {
    background: linear-gradient(45deg, #a855f7, #9333ea);
  }
  </style>