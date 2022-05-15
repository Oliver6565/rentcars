<template>
    <div>
        <div class="header-back">
            <div class="arrow"></div>
            <div class="tip">{{title}}</div>
        </div>
        
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:'在线租车'
            }
        }
    }
</script>

<style lang="less" scoped>
.header-back{
    position: relative;
    margin: 20px 0 40px 0;
    // height: 1px;
    .arrow:after{
        content: "";
        position: absolute;
        left: 18px;
        top: 2px;
        width: 10px;
        height: 10px;
        border-top: 2px solid #1b4584;
        border-left: 2px solid #1b4584;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .tip{
        padding-left: 35px;
        color: #fff;
        opacity: 0.8;
    }
}
</style>