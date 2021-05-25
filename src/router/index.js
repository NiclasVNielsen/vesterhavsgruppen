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
  {
    path: '/admin/calendar',
    name: 'Calendar',
    component: () => import ('../views/Calendar.vue')
  },
  /* Login Auth */
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import ('../views/Login.vue')
  },
  /* CRUD Functions */
  {
    path: '/admin/edit/:id',
    name: 'Edit',
    component: () => import ('../views/Edit.vue')
  },
  {
    path: '/admin/editCalendar/:id',
    name: 'EditCalendar',
    component: () => import ('../views/EditCalendar.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
