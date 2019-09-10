<template>
    <div class="body">
        <router-view v-if="$route.path === '/Login' || $route.path ===  '/Register'"></router-view>
        <el-container class="top-sty" v-else><el-header>
            <top></top>
        </el-header><el-container>
            <el-aside width="200px">
                <left></left>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    import top from '../../components/top/top'
    import left from '../../components/left/left'

    export default {
        name: "content",
        components: {
            top,
            left
        },
        props: {},
        data() {
            return {}
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

<style lang = "scss">
    @import '../../style/style.scss';

    body {
        background-color: #fafafa;
    }
    * {
        padding: 0;
        margin: 0;
    }

</style>
