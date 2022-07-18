import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFound from '@/views/NotFound.vue'
import ShoppingView from '@/views/ShoppingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },  
  {
    path: '/register',
    name: 'signup',
    component: RegisterView
  },
  // {
  //   path: 'gellery',
  //   name: 'gellery',
  //   component: GalleryView
  // },
  {
    path: '/shopping',
    name: 'shopping',
    component: ShoppingView
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
