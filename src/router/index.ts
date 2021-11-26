import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import formulasRoutes from './formulas'
import errors from './errors'

import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import Statistics from '../views/Statistics.vue'
import Info from '../views/Info.vue'
import Donate from '../views/Donate.vue'

const routes: RouteRecordRaw[] = [
  formulasRoutes,
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate,
  },
  errors,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
