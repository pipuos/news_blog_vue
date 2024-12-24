import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/news/:type',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NewsView.vue'),
    },
    {
      path: '/horoscope/:type',
      name: 'horoscope',
      component: () => import('@/views/HoroscopeView.vue'),
    },
    {
      path: '/rates',
      name: 'rates',
      component: () => import('@/views/RatesView.vue'),
    },
  ],
})

export default router
