import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/Index.vue')
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import('../components/cabecalho/carrinho/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login/Index.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../components/cadastro/Index.vue')
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
