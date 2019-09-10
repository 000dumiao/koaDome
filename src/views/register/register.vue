<template>
    <div class="register register-sty">
        <div class="img-bg">
            <img src="../../assets/bg1.jpeg" alt="背景">
        </div>
        <div class="center-sty">
            <div class="title-sty">欢迎来到xxx后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="请输入用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="请输入密码" prop="password">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="请输入电话" prop="tel">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="请输入邮箱" prop="email">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="请输入验证码" prop="verification">
                    <el-input v-model="ruleForm.name"></el-input>
                    <el-button type="success">成功按钮</el-button>
                </el-form-item>
            </el-form>
            <div>
                <el-button type="primary">立即登录</el-button>
                <el-button type="primary">立即注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        components: {},
        props: {},
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                    tel: '',
                    email: '',
                    verification: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 10 个字符', trigger: 'blur'}
                    ],
                    tel: [
                        {required: true, message: '请输入电话', trigger: 'blur'},
                        {min: 7, max: 11, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                    ],
                    verification: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {},
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">


    .register {
        position: relative;
    }
    /*.img-bg {*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*}*/
    .register img {
        width: 100%;
        height: 100%;
      }
    .center-sty {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 600px;
        height: 500px;
        margin-left: -250px;
        margin-top: -350px;
        background-color: white;
        padding: 20px;
        box-sizing: border-box;
    }
    .title-sty {
        text-align: center;
        font-size: 18px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
    }

</style>
