<template>
    <div class="navbar">
        <li><i class="icon icon_help"></i></li>
        <li><i class="icon icon_search"></i></li>
        <li><a href="javascript:void(0);" class="select_car_btn">选择车辆</a></li>
        <li><i class="icon icon_location"></i></li>
        <li><i class="icon icon_user"  @click="toUser"></i></li>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            toUser(){
                this.$router.push({
                    // name:'User', 也可以
                    path:'/user'

                })
            }
        }
    }
</script>

<style lang="less" scoped>
.navbar{ 
    li{
        margin:0 5px;
        display: inline-block;
    }
    .icon{
        vertical-align: middle;
        cursor: pointer;
    }
}

.navbar{
    .icon_help{
        background-image: url(../../assets/images/help.svg);
        background-size: 25px 25px;
        background-position-x: 8px;
        background-position-y: 8px;
        // background-size: contain;
    }
    .icon_search{
        background-image: url(../../assets/images/search.svg);
        background-size: 20px 20px;
        background-position-x: 10px;
        background-position-y: 10px;
        // background-size: contain;
    }
    .icon_location{
        background-image: url(../../assets/images/location.svg);
        background-size: 20px 20px;
        background-position-x: 10px;
        background-position-y: 9px;
        // background-size: contain;
    }
    .icon_user{
        background-image: url(../../assets/images/user.svg);
        background-size: 20px 20px;
        background-position-x: 10px;
        background-position-y: 9px;
        // background-size: contain;
    }

    .select_car_btn{
        display: inline-block;
        width: 150px;
        height: 60px;
        border-radius:100px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        font-size: 22px;
        font-weight: 300;
        // background-color: @color_main;
        background-color: #34393f;
    }
}
</style>