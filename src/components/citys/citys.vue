<template>
    <div class="wordCloud">
        <div class="textCloud">
            利润（万）
        </div>
        <ve-wordcloud :data="chartData" :settings="chartSettings"></ve-wordcloud>
    </div>

</template>

<script>
    export default {
        name: "citys",
        components: {},
        props: {},
        data() {
            this.chartSettings = {
                color: this.textColor,
                // color: ['#ff0', '#0af', '#f0b', '#0ff']
            };
            return {
                citysList: [],  //城市
                textColor: [],  //颜色
                chartData: {
                    columns: ['word', 'count'],
                    rows: []
                },
            }
        },
        methods: {
            getCity(){
                this.$axios.req('/api/citys').then(res =>{
                    console.log(res);
                    this.citysList = res.data.data;
                    this.chartData.rows = this.citysList
                }).catch(err =>{
                    console.log(err);
                })
            },
            colors(){
                let colorList = [];
                let reds = parseInt(Math.random()*255);
                let greens = parseInt(Math.random()*255);
                let blues = parseInt(Math.random()*255);
                for (let i = 0;i < 20; i++){
                    let colors = "rgb(" + reds + "," + greens + "," + blues + ")";
                    colorList.push(colors)
                }
                this.textColor = colorList;
            },
        },
        mounted() {
            this.getCity();
            this.colors();
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

    .textCloud {
        font-size: 14px;
        padding: 10px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #aaaaaa;
    }
    .wordCloud {
        margin-right: 20px;
        background-color: white;
    }

</style>
