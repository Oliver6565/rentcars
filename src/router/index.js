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
      },
      {
        path:'/safe',
        name:'Safe',
        meta:{
          title:"安全设置"
        },
        component:()=>import("../views/safe/safe.vue")
      },
      {
        path:'/password',
        name:'Password',
        meta:{
          title:"重置密码"
        },
        component:()=>import("../views/safe/password.vue")
      },
      // 绑定银行卡
      {
        path: "/bank",
        name: "Bank",
        meta: {
          title: "绑定银行卡"
        },
        component: () => import("../views/safe/bank")
      },
      // 绑定银行卡
      {
        path: "/bankAdd",
        name: "BankAdd",
        meta: {
          title: "添加银行卡"
        },
        component: () => import("../views/safe/bankAdd")
      },
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
