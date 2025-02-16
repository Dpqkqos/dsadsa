<template>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-purple-700">
          Эмоциональный дневник ✨
        </h2>
        <button 
          @click="showModal = true"
          class="bg-gradient-purple text-white px-4 py-2 rounded-lg"
        >
          + Новая запись
        </button>
      </div>
  
      <div class="grid grid-cols-[100px,1fr] gap-4">
        <div class="header-cell">День</div>
        <div class="header-cell">Состояние</div>
  
        <template v-for="(emotion, index) in emotions" :key="emotion.id">
          <div class="day-cell">{{ index + 1 }}</div>
          <div class="emotion-cell">{{ emotion.state }}</div>
        </template>
      </div>
  
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h3 class="text-xl font-bold mb-4">Новая запись</h3>
          <textarea
            v-model="newEmotion"
            class="w-full border rounded-xl p-3 mb-4 min-h-[100px]"
            placeholder="Опишите ваше состояние..."
          ></textarea>
          <div class="flex gap-3">
            <button
              @click="saveEmotion"
              class="bg-gradient-purple text-white flex-1 py-3 rounded-xl"
            >
              Сохранить
            </button>
            <button
              @click="showModal = false"
              class="bg-gray-100 flex-1 py-3 rounded-xl"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      emotions: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        showModal: false,
        newEmotion: ''
      }
    },
    methods: {
      async saveEmotion() {
        if (this.newEmotion.trim()) {
          try {
            await this.$api.createEmotion(
              this.$tg.initDataUnsafe.user.id,
              { emotion: this.newEmotion }
            )
            this.$emit('emotion-added')
            this.showModal = false
            this.newEmotion = ''
          } catch (error) {
            this.$tg.showAlert('Ошибка сохранения: ' + error.message)
          }
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .bg-gradient-purple {
    background: linear-gradient(45deg, #a855f7, #9333ea);
  }
  
  .header-cell {
    @apply border-2 border-purple-300 rounded-xl p-3 text-center font-semibold text-purple-700;
  }
  
  .day-cell {
    @apply border-2 border-purple-300 rounded-xl p-3 text-center font-bold text-purple-700;
  }
  
  .emotion-cell {
    @apply bg-purple-100 rounded-xl p-3 text-purple-900;
  }
  
  .modal {
    @apply fixed inset-0 bg-black/50 flex items-center justify-center;
  }
  
  .modal-content {
    @apply bg-white rounded-2xl p-6 w-full max-w-md mx-4;
  }
  </style>