<template>
    <div>
        <Back title="安全设置"/>
        <div class="navbar">
            <router-link to="/password" tag="li"  class="nav_item">修改登录密码<i class="arrow"></i></router-link>
            <router-link to="/safe" tag="li"  class="nav_item">设置资金密码<i class="arrow"></i></router-link>
            <router-link to="/safe" tag="li"  class="nav_item">绑定手机号<i class="arrow"></i></router-link>
            <router-link to="/bank" tag="li"  class="nav_item">绑定银行卡<i class="arrow"></i></router-link>
        </div>
        <div class="logout">登出</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
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
            // float: right;
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