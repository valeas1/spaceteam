import Main from '@/pages/Main.vue'
import Destanation from '@/pages/Destanation.vue'
import Crew from '@/pages/Crew.vue'
import Technology from '@/pages/Technology.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/destanation',
    component: Destanation
  },
  {
    path: '/crew',
    component: Crew
  },
  {
    path: '/technology',
    component: Technology
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
