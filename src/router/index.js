import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/Jobs/JobsView.vue'
import NotFound from '../views/NotFound.vue'
import AboutView from '../views/AboutView.vue'
import JobsDetails from '../views/Jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component: JobsDetails,
    props: true
  },
  //not found
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
