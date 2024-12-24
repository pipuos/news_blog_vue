<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import News from '@/components/News.vue'

const route = useRoute()

const title = computed<string>(() => route.params.type as string)
</script>

<template>
  <div>
    <h1>Футбол</h1>

    <div class="news-list">
      <News
        v-for="(item, idx) in [1, 2, 3, 4, 5, 6]"
        :key="idx"
        :title="'Мантуан назвал конкурентов «Зенита» в борьбе за чемпионство в РПЛ ' + item"
        :description="'Бразильский нападающий «Зенита» Густаво Мантуан рассказал о конкурентах петербургской команды за чемпионство в нынешнем сезоне.'"
        :category="'Футбол - РПЛ'"
        :link="'https://www.sport-express.ru/football/rfpl/news/mantuan-nazval-konkurentov-zenita-v-borbe-za-chempionstvo-v-rpl-2283195/'"
        :pub-date="'Thu, 19 Dec 2024 15:28:00 +0300'"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.news-list {
  margin-top: 15px;
  
}
h1 {
    font-size: 1px;
    font-weight: normal;
    color: #fff;
    background: radial-gradient(153.31% 110.62% at 136.92% 38.13%,rgb(218, 127, 52) 0,rgb(246, 60, 9) 35.42%,rgb(201, 88, 82) 61.46%,rgb(231, 67, 67) 100%);
    padding: 10px 10px 7px 10px;
    margin-left: 300px;
    margin-top: -53px;
    position: absolute;
    border-radius: 0 0 8px 8px;
        display: block;
    font-size: 1em;
    margin-inline-start: 555px;
    font-weight: bold;
    unicode-bidi: isolate;
}
</style>
