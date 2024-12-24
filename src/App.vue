<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const linksSportNews = [
  {name: "Футбол", slug: "football"},
  {name: "Теннис", slug: "tennis"},
  {name: "Хоккей", slug: "hockey"},
  {name: "Формула 1", slug: "formula1"},
  {name: "Баскетбол", slug: "basketball"},
]
</script>

<template>
  <div class="wrapper">
    <header>
      <a style="display: flex" href="https://xn--b1agazb5ah1e.xn--p1ai/novyj_god_vkazhdyj_dom">
        <img src="/public/images/optimize.webp" alt="" />
      </a>

      <div class="header">
        <RouterLink class="header-link" to="/">Главная</RouterLink>

        <div class="dropdown-menu">
          <span class="header-link">Новости спорта</span>
          <div class="dropdown-items">
            <RouterLink class="header-link" v-for="(item, idx) in linksSportNews" :key="idx" :to="'/news/' + item.slug">{{item.name}}</RouterLink>
          </div>
        </div>

        <RouterLink class="header-link" to="/horoscope/rak">Гороскоп</RouterLink>
        <RouterLink class="header-link" to="/rates">Курсы валют</RouterLink>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

.header-link {
  text-decoration: none;
  color: #000;
  transition: all .2s ease;
}

.header-link:hover {
  opacity: 0.6;
}

.dropdown-menu {
  position: relative;
  cursor: pointer;
}
.dropdown-menu:hover .dropdown-items{
  display: flex;
}

.dropdown-items {
  display: none;
  position: absolute;
  z-index: 1000;
  background-color: #fff;
  flex-direction: column;
  width: 150px;
  padding: 10px;
  box-shadow: 0 2px 4px 1px rgba(179, 179, 179, 0.5);
  gap: 5px;
}

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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
