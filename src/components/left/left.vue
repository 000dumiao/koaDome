<template>
    <div class="left-sty">
        <el-row>
            <el-col :span="24">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span>首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">日程管理</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-document"></i>
                    <span slot="title">通讯录</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">组织员工</span>
                    </template>
                        <el-menu-item index="4-1">offer管理</el-menu-item>
                        <el-menu-item index="4-2">人员信息</el-menu-item>
                        <el-menu-item index="4-3">薪酬管理</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">表单页</span>
                    </template>
                        <el-menu-item index="5-1">分布表单</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "bottom",
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
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

</style>
