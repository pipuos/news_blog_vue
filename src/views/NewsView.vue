<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import News from '@/components/News.vue'

interface INews {
  title: string
  description: string
  category: string
  link: string
  date: string
}

const route = useRoute()

const title = ref<string>("")

const news = ref<INews[]>([])

function fetchNews() {
  news.value = []

  fetch(`https://cors.rosar-l.ru/https://www.sport-express.ru/services/materials/news/${route.params.type}/se/`)
    .then((response) => response.text()) // Достаем текст RSS-канала
    .then((str) => new DOMParser().parseFromString(str, 'text/xml')) // Преобразуем текст в XML
    .then((data) => {
      const items = data.querySelectorAll('item') // Ищем все элементы 'item'
      title.value = data.querySelector('title')?.textContent || route.params.type as string

      items.forEach((el) => {
        news.value.push({
          title: el.querySelector('title')?.textContent || '',
          date: el.querySelector('pubDate')?.textContent || '',
          description: el.querySelector('description')?.textContent || '',
          category: el.querySelector('category')?.textContent || '',
          link: el.querySelector('link')?.textContent || '',
        })
      })
    })
}

watch(route, () => {
  fetchNews()
})

onMounted(() => {
  fetchNews()
})

</script>

<template>
  <h1 class="page-title">{{ title }}</h1>

  <div class="container">


    <div class="news-list">
      <News
        v-for="(item, idx) in news"
        :key="idx"
        :title="item.title"
        :description="item.description"
        :category="item.category"
        :link="item.link"
        :pub-date="item.date"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.news-list {
  margin-top: 30px;
  margin-bottom: 30px;
}
h1 {
  color: #fff;
  background: radial-gradient(
    153.31% 110.62% at 136.92% 38.13%,
    rgb(218, 127, 52) 0,
    rgb(246, 60, 9) 35.42%,
    rgb(201, 88, 82) 61.46%,
    rgb(231, 67, 67) 100%
  );
  padding: 10px 10px 7px 10px;

  border-radius: 0 0 8px 8px;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  unicode-bidi: isolate;
}
</style>
