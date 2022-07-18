import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import FormView from '@/views/FormView'
import ProductView from '@/views/ProductView'
import EditProductView from '@/views/EditProductView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    props: true
  },
  {
    path: '/form',
    name: 'FormView',
    component: FormView,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: ProductView,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProductView,
        props: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
