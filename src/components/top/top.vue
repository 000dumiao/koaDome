<template>
    <div class="top">
        <p>小爱后台管理系统</p>
        <div class="topName">
            <img src="../../assets/translate.png" alt="">
            <div>
                <img src="../../assets/6.jpg" alt="">
                <p>亲爱的<span>DUMIAOMIAO</span></p>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "top",
        components: {},
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

<style scoped lang="scss">

    .top {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        background-color: white;
        line-height: 40px;
        font-size: 14px;
    }
    .topName {
        display: flex;
        justify-content: space-between;
    }
    .topName > img {
        height: 30px;
        width: 30px;
        margin-right: 10px;
        margin-top: 5px;
    }
    .topName > div {
        display: flex;
        justify-content: space-between;
    }
    .topName > div > img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-top: 4px;
        margin-right: 5px;
    }

</style>
