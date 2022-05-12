<template>
  <div class="home">
    <el-amap vid="amapContainer" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { AMapManager,lazyAMapApiLoaderInstance  } from 'vue-amap'
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      map:null,
      // zoom:16,  // 初始化第一次加载地图大小[3,18]可选; 这个在加载原生高德地图过后就不兼容。center属性也是
      events:{
        // // o 是高德地图定位插件实例
        // init(o){
        //   // 实例化点标记
        //   let marker = new AMap.Marker({
        //     position:[114.204396,22.332597]
        //   });
        //   marker.setMap(0)
        // }
      }
    }
  },
  mounted(){
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      // 这样this.map就是高德地图的实例对象，，这样既可以用vue-map的方法，也可以用AMap原生方法。但有些不兼容，不兼容用原生的
      this.map = new AMap.Map('amapContainer', {
        center: new AMap.LngLat(114.204396,22.332597),
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:14, //初始化地图层级
      });
    });
  }
}
</script>

<style scoped lang="less">
  .home{
    // height: 50vh;
    height: 100vh;
  }
</style>
