import { createWebHistory, createRouter } from 'vue-router'

import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Detail.vue'
import Account from '../views/Account.vue'
import Dashboard from '../views/Dashboard.vue'
import ListUser from '../views/ListUser.vue'
import UserDetail from '../views/UserDetail.vue'
const routes = [
  { path: '/', component: Home},
  { path: '/contact', component: Contact},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/:catchAll(.*)', component: NotFound},
  { path: '/product', component: Product},
  { path: '/detail', component: Detail},
  { path: '/account', component: Account},
  { path: '/dashboard', component: Dashboard},
  { path: '/listuser', component: ListUser},
  { path: '/userdetail/:id', component: UserDetail}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})