<script setup lang="ts">
import { ref } from 'vue'

interface IAnekdot {
  title: string
  date: string
  description: string
}

const anakdot = ref<IAnekdot[]>([])

fetch('https://crossorigin.me/https://www.anekdot.ru/rss/export_j.xml')
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
  <div class="container">
    <h1>Свежие анекдоты</h1>

    <div class="anekdot-list">
      <div v-for="(item, idx) in anakdot" :key="idx" class="anekdot-item">
        <div class="anekdot-item__info">
          <h2 class="anekdot-item__title">{{ item.title }}</h2>
          <span class="anekdot-item__date">{{ item.date }}</span>
        </div>

        <p class="anekdot-item__descr">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  font-size: 1px;
  font-weight: normal;
  color: #fff;
  background: radial-gradient(
    153.31% 110.62% at 136.92% 38.13%,
    rgb(218, 127, 52) 0,
    rgb(246, 60, 9) 35.42%,
    rgb(201, 88, 82) 61.46%,
    rgb(231, 67, 67) 100%
  );
  padding: 10px 10px 7px 10px;
  margin-left: 300px;
  margin-top: -63px;
  position: absolute;
  border-radius: 0 0 8px 8px;
  display: block;
  font-size: 1em;
  margin-inline-start: 555px;
  font-weight: bold;
  unicode-bidi: isolate;
}
.anekdot-item {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;

  box-shadow: 0 5px 10px 1px rgba(49, 94, 251, 0.3);
}
.anekdot-list {
  margin-top: 25px;
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
