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
            <div class="nav_item">
                <img src="../../assets/images/money.svg" />
                我的账户
            </div>
            <div class="nav_item"><img src="../../assets/images/order.svg" />租车订单</div>
            <div class="nav_item"><img src="../../assets/images/check.svg" />实名认证</div>
            <div class="nav_item"><img src="../../assets/images/safe.svg" />安全设置</div>
            <div class="nav_item"><img src="../../assets/images/hl.svg" />帮助中心</div>
        </div>
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
            border-radius: 50%;
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
        img{
            height: 30px;
            width: 30px;
            float: left;
            margin-right: 10px;
        }
    }
}
</style>