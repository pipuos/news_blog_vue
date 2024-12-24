<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <header>
      <a style="display: flex" href="https://xn--b1agazb5ah1e.xn--p1ai/novyj_god_vkazhdyj_dom">
        <img src="/public/images/optimize.webp" alt="" />
      </a>

      <div class="header">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/news/football">Новости футбола</RouterLink>
        <RouterLink to="/horoscope/rak">Гороскоп</RouterLink>
        <RouterLink to="/rates">Курсы валют</RouterLink>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}
header img {
  width: 100%;
  object-fit: contain;
}
.wrapper {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  gap: 10px;
  padding: 20px 10px;
  box-shadow: 0 2px 4px 1px rgba(179, 179, 179, 0.5);
}

main {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
}
</style>
