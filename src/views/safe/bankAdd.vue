<template>
    <div class="bankAdd-container">
        <Back title="添加银行卡"/>
        <div class="cars-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="开户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="form.type" class="select-black">
                        <el-option value=0></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.phone" placeholder="预留手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <button type="button" class="button-vcode">获取验证码</button>
                    <el-input v-model="form.confirmNumber" placeholder="验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="button-black">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
// import UploadVue from "@/components/upload";
export default {
    name: "BankAdd",
    // components: { UploadVue },
    data(){
        return {
            form: {
                name: '',
                phone:'',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
                confirmNumber:''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>
<style lang="less" scoped>
.cars-form-ui{
    padding: 20px;
}
</style>