import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/home/Index.vue')
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import('../components/cabecalho/carrinho/Index.vue')
  },
  {
    path: '/teste',
    component: () => import('../components/Teste.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
