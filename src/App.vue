<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, reactive } from 'vue'
import moment from 'moment'

const linksSportNews = [
  {name: "Футбол", slug: "football"},
  {name: "Теннис", slug: "tennis"},
  {name: "Хоккей", slug: "hockey"},
  {name: "Формула 1", slug: "formula1"},
  {name: "Баскетбол", slug: "basketball"},
]

const remaining = reactive<{
  minutes: number | null,
  hours: number | null,
  seconds: number | null,
}>({
  minutes: 0,
  hours: 0,
  seconds: 0,
})

onMounted(() => {
  setInterval(() => {
    setTime()
  }, 1000)

  const eventTime = moment('2025.01.01 00:00:10', 'YYYY.MM.DD HH:mm:ss')

  function setTime() {
    const currenTime = moment()
    remaining.hours = moment.duration(eventTime.diff(currenTime)).asHours()
    remaining.minutes = moment.duration(eventTime.diff(currenTime)).get('minutes')
    remaining.seconds = moment.duration(eventTime.diff(currenTime)).get('seconds')
  }

})
</script>

<template>
  <div class="wrapper">
    <header>
      <a style="display: flex" href="https://xn--b1agazb5ah1e.xn--p1ai/novyj_god_vkazhdyj_dom">
        <img src="/images/optimize.webp" alt="" />
      </a>

      <div class="header">
        <RouterLink class="logo" to="/">
          <img src="/images/logo.svg" alt="" />
        </RouterLink>

        <nav>
          <RouterLink class="header-link" to="/">Главная</RouterLink>

          <div class="dropdown-menu">
            <span class="header-link">Новости спорта</span>
            <div class="dropdown-items">
              <RouterLink class="header-link" v-for="(item, idx) in linksSportNews" :key="idx" :to="'/news/' + item.slug">{{item.name}}</RouterLink>
            </div>
          </div>

<!--          <RouterLink class="header-link" to="/horoscope/rak">Гороскоп</RouterLink>-->
          <RouterLink class="header-link" to="/rates">Курсы валют</RouterLink>
        </nav>

        <div></div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>

  <div class="timer" v-if="Object.keys(remaining).length > 0">
    <span>До нового года осталось: </span> <br>
    {{ remaining.hours?.toFixed(0) }} часов
    {{ remaining.minutes?.toFixed(0) }} минут
    {{ remaining.seconds?.toFixed(0) }} секунд
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  margin-right: 15px;
}
.logo img {
  height: 60px;
}
nav {
  display: flex;
  gap: 10px;
}
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
  padding: 20px 10px;
  box-shadow: 0 2px 4px 1px rgba(179, 179, 179, 0.5);
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-align: center;
  background: white;
  padding: 5px;
  opacity: .6;
  border-radius: 20px;
  cursor: default;
  color: #000;
  user-select: none;
}

.timer:hover {
  opacity: 1;
}
</style>
