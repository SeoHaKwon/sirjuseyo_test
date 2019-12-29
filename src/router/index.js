import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '@/views/Search'
import selectSearch from '@/components/selectSearch'
import selectDeleted from '@/components/selectDeleted'
import telladd from '@/components/telladd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/selectSearch/:no',
    name: 'selectSearch',
    component: selectSearch,
    props: true
  },
  {
    path: '/selectDeleted',
    name: 'selectDeleted',
    component: selectDeleted
  },
  {
    path: '/telladd',
    name: 'telladd',
    component: telladd
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
