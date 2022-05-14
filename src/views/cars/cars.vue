<template>
    <div class="container">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="item in carsList" :key="item.id">
                    <CarsItem :data="item" />
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
            // aa:1,
            // screenWidth: null,
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

    },
    computed:{
    },

    watch: {
        screenWidth: {
        handler: function (val) {
            // console.log("判断 "+val)
            // if(val>=1800){
            //     this.$data.swiperOption.slidesPerView = 5
            //     console.log("1800-",val)
            // }
            // if(1600<= val && val< 1800) {
            //     this.$data.swiperOption.slidesPerView = 4 
            //     console.log("1600-1800",val)
            // }
            // if(1200<=val && val<1600) {
            //     this.$data.swiperOption.slidesPerView = 3
            //     console.log("1200-1600",val)
            // }
            // if(600<=val && val<1200){
            //     this.$data.swiperOption.slidesPerView = 2
            //     console.log("1200-1600",val)
            // }
            // if(val<600){
            //     this.$data.swiperOption.slidesPerView = 1
            //     console.log("1200-1600",val)
            // }
            // console.log(this.$data.swiperOption.slidesPerView)

            // this.aa = this.aa+1
            // console.log(this.aa)
        },
        immediate: true,
        deep:true,
        },
    },
    mounted(){
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
}
</style>