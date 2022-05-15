<template>
  <div class="home">
    <!-- 高德地图 -->
    <Map></Map>
    <!-- cars data渲染 -->
    <div class="cars_container"><Cars></Cars></div>
    <!-- 底下导航 -->
    <div class="navbar_container"><Navbar></Navbar></div>
    <!-- 会员视图 -->
    <div id="user_container"  :class="{open: show}">
      <router-view />
    </div>

    
  </div>
</template>

<script>

import Map from './amap/map.vue'
import Cars from './cars/cars.vue'
import User from './user/user.vue'

import Navbar from '../components/navbar/navbar.vue'
export default {
  components:{
    Map,
    Cars,
    User,
    Navbar
  },

  computed: {
      // 监视show方法，只要show方法返回的是true，即router改变，就会显示open：true；若还是在Index,就返回false。
      show(){
          const router = this.$route;  
          return router.name === "Index" ? false : true;
      },
    },
    mounted(){
      // 给整个页面一个监听事件
      document.addEventListener('mouseup',(e)=>{
        const userCon = document.getElementById('user_container');
        if(userCon && !userCon.contains(e.target)){
          this.$router.push({
            name:'Index'
          })
        }
      })
    }
}
</script>

<style scoped lang="less">
.home{

  .cars_container{
    position: fixed;
    bottom: 160px;
    left: 0;
    right: 0;
    z-index: 100; 
  }
  #user_container{
    position: fixed;
    top: 0;
    bottom: 0;
    right: -600px;
    width: 250px;
    background-color: #34393f;
    z-index: 200;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;;
    -ms-transition: all .3s ease 0s;;
    -o-transition: all .3s ease 0s;;
    transition: all .3s ease 0s;
    &.open {
        right: 0;
    }
  }
  .navbar_container{
    position: fixed;
    z-index: 10;
    bottom: 86px;
    left: 0;
    right: 0;
    text-align: center;
  }
}
</style>
