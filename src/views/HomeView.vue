<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '../utils/formatDate.ts'

interface IAnekdot {
  title: string
  date: string
  description: string
}

const anakdot = ref<IAnekdot[]>([])

fetch('https://cors.rosar-l.ru/https://www.anekdot.ru/rss/export_j.xml')
  .then((response) => response.text()) // Достаем текст RSS-канала
  .then((str) => new DOMParser().parseFromString(str, 'text/xml')) // Преобразуем текст в XML
  .then((data) => {
    const items = data.querySelectorAll('item') // Ищем все элементы 'item'
    items.forEach((el) => {
      anakdot.value.push({
        title: el.querySelector('title')?.textContent || '',
        date: el.querySelector('pubDate')?.textContent || '',
        description: el.querySelector('description')?.textContent || '',
      })
    })
  })


</script>

<template>
  <h1 class="page-title">Свежие анекдоты</h1>

  <div class="container">
    <div class="anekdot-list">
      <div v-for="(item, idx) in anakdot" :key="idx" class="anekdot-item">
        <div class="anekdot-item__info">
          <h2 class="anekdot-item__title">{{ item.title }}</h2>
          <span class="anekdot-item__date">{{ formatDate(item.date) }}</span>
        </div>

        <p class="anekdot-item__descr" v-html="item.description"></p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>

.anekdot-item {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;

  box-shadow: 0 5px 10px 1px rgba(49, 94, 251, 0.3);
}
.anekdot-list {
  margin-top: 25px;
  margin-bottom: 50px;
}
.anekdot-item__title {
  font-size: 13px;
}
.anekdot-item__descr {
  font-size: 15px;
  padding: 12px 15px 12px 15px;
}
.anekdot-item__date {
  opacity: 0.6;
  font-size: 13px;
}
.anekdot-item__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
