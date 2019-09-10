<template>
    <div class="dynamic-sty dynamic">
        <div class="textCloud">
            <p>个人动态</p>
            <el-button type="primary">主要按钮</el-button>
        </div>
        <div class="date-sty">
            <div class="block">
                <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "dynamic",
        components: {},
        props: {},
        data() {
            return {
                value1: '',
            }
        },
        methods: {
            getDate(){
                this.$axios.req('/api/getDynamic').then(res =>{
                    console.log(res);
                }).catch(err =>{
                    console.log(err);
                })
            }
        },
        mounted() {
            this.getDate();
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

    .dynamic {
        background-color: white;
    }
    .textCloud {
        font-size: 14px;
        padding: 6px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #aaaaaa;
        display: flex;
        justify-content: space-between;
    }
    .date-sty {
        padding: 20px;
        box-sizing: border-box;
    }

</style>
