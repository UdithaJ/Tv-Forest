import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieLibrary from '../views/MovieLibrary.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MovieLibrary
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: MovieLibrary
  },
  {
    path: '/our-screens',
    name: 'Our Screens',
    component: MovieLibrary
  },
  {
    path: '/movie-library',
    name: 'Movie Library',
    component: MovieLibrary
  },
  {
    path: '/location-contact',
    name: 'Location & Contact',
    component: MovieLibrary
  },
  {
    path: '/gallery',
    name: '/Gallery',
    component: MovieLibrary
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
