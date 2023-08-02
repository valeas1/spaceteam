import Main from '@/pages/Main.vue'
import Destanation from '@/pages/Destanation.vue'
import Crew from '@/pages/Crew.vue'
import Technology from '@/pages/Technology.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main,
    name: 'Spaceteam - Home'
  },
  {
    path: '/destanation',
    component: Destanation,
    name: 'Spaceteam - Destanation'
  },
  {
    path: '/crew',
    component: Crew,
    name: 'Spaceteam - Crew'
  },
  {
    path: '/technology',
    component: Technology,
    name: 'Spaceteam - Technology'
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  document.title = to.name as string
  next()
})
export default router
