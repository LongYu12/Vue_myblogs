import Vue from 'vue'
import VueRouter from 'vue-router'
import AddBlog from "../views/AddBlog";
import showBlog from "../views/showBlog";
import SingleBlog from "../views/SingleBlog";
Vue.use(VueRouter)

const routes = [
  {
    path: '/AddBlog',
    name: 'AddBlog',
    component: AddBlog
  },
  {
    path: '/',
    name: 'showBlog',
    component: showBlog
  },
  {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
