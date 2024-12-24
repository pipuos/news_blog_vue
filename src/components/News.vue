<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { formatDate } from '../utils/formatDate.ts'

const props = defineProps<{
  class?: string
  title: string
  pubDate: string
  description: string
  link: string
  category: string
}>()
</script>

<template>
  <div class="news-item">
    <div class="news-item__info">
      <h2 class="news-item__title">
        {{ props.title }}
      </h2>
      <span class="news-item__category">{{ props.category }}</span>
    </div>
    <p class="news-item__description" v-html="props.description"  >
    </p>
    <div class="news-item__info">
      <span class="news-item__pubDate">{{ formatDate(props.pubDate) }}</span>
      <a :href="props.link" class="news-item__link">Подробнее</a>
    </div>
  </div>
</template>

<style scoped>
.news-item {
  display: flex;
 background:rgba(255, 255, 255, 0.9);
  flex-direction: column;
  padding: 10px;

  margin-top: 15px;

  box-shadow: 0 5px 30px -10px rgba(49, 94, 251, 0.3);
}

.news-item__info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.news-item__category {
  opacity: 0.6;
}
.news-item__title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}
.news-item__description {
  font-size: 15px;
  margin-bottom: 10px;
}
.news-item__pubDate {
  opacity: 0.6;
  font-size: 12px;
}
</style>
