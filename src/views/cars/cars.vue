<template>
    <div class="container">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item,index) in carsList" :key="index">
                    <div @click="carDetail(index)"><CarsItem @close="detailclose" :data="item" :height="carsHeight[index]" :class="addClass[index]"/></div>
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
        },
        
        detailclose(val){
            this.initcarsHeight()
            this.carsHeight = [...this.carsHeight]
            console.log('这里为什么关不掉，我都已经重新')
        },

        initcarsHeight(){
            this.carsList.map((item,index)=>{
                this.carsHeight[index]='160px'
                return this.carsHeight 
            })
        }
    },
    computed:{
    },

    watch: {

    },
    mounted(){
        this.initcarsHeight()
  
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