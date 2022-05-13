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
            screenWidth: null,
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
            //     if (val < 900) {
            //         this.swiperOption.slidesPerView=2
            //     console.log(val+'屏幕宽度小于900px')
            //     } else {
            //         this.swiperOption.slidesPerView=1
            //     console.log(val+'屏幕宽度大于900px')
            //     }
            // console.log(this.swiperOption.slidesPerView)
            console.log("判断 "+val)
            if(val>=1800){
                this.swiperOption.slidesPerView = 5
                console.log(this.swiperOption.slidesPerView)
                console.log("1800-",val)
                return
            }
            if(1600<= val && val< 1800) {
                this.swiperOption.slidesPerView = 4 
                console.log(this.swiperOption.slidesPerView)
                console.log("1600-1800",val)
                return
            }
            if(1200<=val && val<1600) {
                this.swiperOption.slidesPerView = 3
                console.log("1200-1600",val)
                return
            }else{
                console.log('1')
            }
            console.log(this.swiperOption.slidesPerView)
        },
        immediate: true,
        deep:true
        },
    },
    mounted(){
        this.screenWidth = document.body.clientWidth
        window.onresize = () => {
            return (() => {
                this.screenWidth = document.body.clientWidth
            })()
        }
    }
}
</script>

<style lang="less" scoped>
.container{

}
</style>