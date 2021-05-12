import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import ('../views/About.vue')
  },
  /* Login Auth */
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  /* CRUD Functions */
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import ('../views/Edit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
