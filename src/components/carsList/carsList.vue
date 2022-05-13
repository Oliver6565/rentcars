<template>
<div>
    <div class="cars_item">
        <header>
            <h4 class="cars_logo">
                <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                <span class="name">Mustang 2019款</span>
            </h4>
            <p class="cars_attr">新能源汽车  5座</p>
        </header>
        <div class="cars_content">   
            <div class="info">
                <h4 class="cars_number">粤 B745N8</h4>
                <div>
                    <el-progress :percentage="65" :format="format" :stroke-width="12" :color="customColorMethod"></el-progress>
                    <div class="distance">
                        <sub>约</sub>
                        <strong>600</strong>
                        <sub>KM</sub>
                    </div>
                </div>
            </div>
            <div><img src="../../assets/images/pic001.jpg" alt=""></div>
        </div>
        <footer>
            <a href="javascript: void(0);" class="parking-link">某某停车场</a>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    name:'CarsList',
    data(){
        return{
            activeli:4,
        }
    },
    methods:{
        format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        },
        customColorMethod(percentage) {
            if (percentage < 20) {
            return '#909399';
            } else if (percentage < 70) {
            return '#e6a23c';
            } else {
            return '#67c23a';
            }
    },
    },
    mounted(){

    }
}
</script>

<style lang="less" scoped>
.cars_item:first-child{
    margin-left: 20px;
}
.cars_item{
    padding: 20px;
    height: 160px;
    width: 300px;
    background-color: #fff;
    border-radius: 22px;
    -webkit-box-shadow:0 0 12px rgba(65, 62, 62, 0.2);
    -moz-shadow:0 0 12px rgba(65, 62, 62, 0.2);
    -ms-shadow:0 0 12px rgba(65, 62, 62, 0.2);
    -o-shadow:0 0 12px rgba(65, 62, 62, 0.2);
    box-shadow:0 0 12px rgba(65, 62, 62, 0.2);
}
header{
    display: flex;
    justify-content: space-between;
    .cars_logo {
        img {
            display: inline-block;
            height: 30px;
            margin-right: 10px;
            vertical-align: middle;
        }
        .name { font-size: 14px; }
    }
    .cars_attr {
        line-height: 30px;
        opacity: .5;
    }
}

.cars_content {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px;
    img {
        height: 70px;
    }
    .info{
        .el-progress{
            margin: 10px 0;
            width: 160px;
        }
    }

}
.distance {
    display: inline-block;
    strong {
        margin: 0 3px;
        font-size: 22px;
    }
    sub {
        position: relative;
        top: -2px;
    }
    sub:first-of-type {
        opacity: .6;
    }
}
.parking-link {
    position: relative;
    display: block;
    border-top: 1px solid #e1e1e1;
    color: #34393f;
    opacity: .8;
    line-height: 32px;
    &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 8px;
        height: 8px;
        margin-top: -4px;
        // 用border转了个45°
        border-top: 1px solid #d6d7d9;
        border-right: 1px solid #d6d7d9;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}
</style>