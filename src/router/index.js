import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import PricingView from '@/pages/Pricing.vue'
import APIView from '@/pages/APIView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/api',
    name: 'api',
    component: APIView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/AboutView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
