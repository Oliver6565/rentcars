import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children:[
      {
        path:"/user",
        name:"User",
        meta:{
          title:"用户中心"
        },
        component:()=>import("../views/user/user.vue")
      }
    ]
  },
]


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

const router = new VueRouter({
  routes
})

export default router
