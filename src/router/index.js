import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/afdelinger',
    name: 'Afdelinger',
    component: () => import ('../views/Afdelinger.vue')
  },
  {
    path: '/omos',
    name: 'Omos',
    component: () => import ('../views/Omos.vue')
  },
  {
    path: '/praktisk',
    name: 'Praktisk',
    component: () => import ('../views/Praktisk.vue')
  },
  {
    path: '/kalender',
    name: 'Kalender',
    component: () => import ('../views/Kalender.vue')
  },
  {
    path: '/galleri',
    name: 'Galleri',
    component: () => import ('../views/Galleri.vue')
  },
  {
    path: '/tilmelding',
    name: 'Tilmelding',
    component: () => import ('../views/Tilmelding.vue')
  },
  {
    path: '/admin/frontpage',
    name: 'AdminFrontpage',
    component: () => import ('../views/AdminFrontpage.vue')
  },
  {
    path: '/admin/departments',
    name: 'AdminDepartments',
    component: () => import ('../views/AdminDepartments.vue')
  },
  {
    path: '/admin/about',
    name: 'AdminAbout',
    component: () => import ('../views/AdminAbout.vue')
  },
  {
    path: '/admin/practical',
    name: 'AdminPractical',
    component: () => import ('../views/AdminPractical.vue')
  },
  {
    path: '/admin/signup',
    name: 'AdminSignup',
    component: () => import ('../views/AdminSignup.vue')
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
