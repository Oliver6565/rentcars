<template>
    <div class="container">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in carsList" :key="index">
                    <div @click="carDetail(index)"><CarsItem :data="item" :height="carsHeight[index]" :class="addClass[index]"/></div>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
    </div>
    
</template>


<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
import CarsItem from '../../components/carsList/carsList.vue'

export default {
   components: { CarsItem, Swiper, SwiperSlide },
    data(){
        return{
            addClass:[],
            carsHeight:[],
            // screenWidth:null,
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            carsList: [1,2,3,6,5,6]
        }
    },
    methods:{
        carDetail(i){
            this.carsHeight[i] = "480px"
            this.carsHeight = this.carsHeight.map((item,index)=>{
                if(index!=i){
                    item = "160px"
                }
                return item 
            })
            // this.carsHeight = [...this.carsHeight]
            this.addClass[i] = 'addclass' 
            this.addClass = this.addClass.map((item,index)=>{
                if(index!=i){
                    item = 'noclass'
                }
                return item
            })
        }
    },
    computed:{
    },

    watch: {
        // screenWidth: {
        // handler: function (val) {
        //     console.log("判断 "+val)
        //     if(val>=1800){
        //         this.swiperOption.slidesPerView = 5
        //         console.log("1800-",val)
        //     }
        //     if(1600<= val && val< 1800) {
        //         this.swiperOption.slidesPerView = 4 
        //         console.log("1600-1800",val)
        //     }
        //     if(1200<=val && val<1600) {
        //         this.swiperOption.slidesPerView = 3
        //         console.log("1200-1600",val)
        //     }
        //     if(600<=val && val<1200){
        //         this.swiperOption.slidesPerView = 2
        //         console.log("600-1200",val)
        //     }
        //     if(val<600){
        //         this.swiperOption.slidesPerView = 1
        //         console.log("-1600",val)
        //     }
        //     console.log(this.swiperOption.slidesPerView)
        //     this.swiperOption={...this.swiperOption}
        // },
        // immediate: true,
        // deep:true,
        // },
    },
    mounted(){
        this.carsList.map(()=>{
            this.carsHeight.push('160px')
            return this.carsHeight 
            })  // 这里成功了的可以渲染
  
        // this.screenWidth = document.body.clientWidth

        // window.onresize = () => {
        //     return (() => {
        //         this.screenWidth = document.body.clientWidth
        //     })()
        // }
    }
}
</script>

<style lang="less" scoped>
.container{
    .swiper-container{
        overflow: initial;
    }
    .swiper-button-prev{
        outline: none;
    }
    .swiper-button-next{
        outline: none;
    }
    .noclass{
        // background-color: red;
    }
    .addclass{
        position: absolute;
        bottom: -200px;
    }
}
</style>