<template>
    <div>
        <div class="info_box">
            <div class="avatar"><img src="../../assets/logo.png" alt="头像"></div>
            <div class="right">
                <div class="emil">390200763@qq.com</div>
                <div class="logo">文明驾驶分 100</div>
            </div>
        </div>

        <div class="navbar">
            <router-link tag="li" to=""  class="nav_item">
                <img src="../../assets/images/money.svg" />
                我的账户
                <i class="arrow"></i>
            </router-link>
            <router-link tag="li"  to="" class="nav_item"><img src="../../assets/images/order.svg" />租车订单<i class="arrow"></i></router-link>
            <router-link tag="li"  to="" class="nav_item"><img src="../../assets/images/check.svg" />实名认证<i class="arrow"></i></router-link>
            <router-link tag="li"  to="/safe" class="nav_item"><img src="../../assets/images/safe.svg" />安全设置<i class="arrow"></i></router-link>
            <router-link tag="li"  to="" class="nav_item"><img src="../../assets/images/hl.svg" />帮助中心<i class="arrow"></i></router-link>     
        </div>
        <div class="logout">登出</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.info_box{
    margin: 40px 0;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    .avatar{
        img{
            width: 50px;
            height: 50px;
            border-radius: 100%;
            border:6px solid #2f343a;
        }
    }
    .emil{
        color: #808080;
    }
    .logo{
        text-align: center;
        color: #fff;
        opacity: 0.9;
        background: linear-gradient(#17a8fa, #108dd9);
        padding: 5px 0;
        margin-top: 10px;
        border-radius: 20px;
    }
}
.navbar{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    color: #808080;
    font-size: 14px;
    .nav_item{
        cursor: pointer;
        padding:15px;
        line-height: 30px;
        vertical-align: middle;
        border-bottom: 2px solid #2f343a;
        position: relative;
        img{
            height: 30px;
            width: 30px;
            float: left;
            margin-right: 10px;
        }
        .arrow{
        }
        .arrow:after{
            content: "";
            height: 10px;
            width: 10px;
            position: absolute;
            border-top: 2px solid #2f343a;
            border-right: 2px solid #2f343a;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            right: 10px;
            top: 25px;
        }
    }
}
.logout{
    cursor: pointer;
    margin: 0px auto;
    margin-top: 150px;
    background-color: #2d3339;
    width: 140px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #fff;
    border-radius: 100px;
    text-align: center;
}
.logout:hover{
    color: #808080;
}
</style>