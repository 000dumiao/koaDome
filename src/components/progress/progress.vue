<template>
    <div class="nums">
        <div class="numData" v-for="(item,index) in listsL" :key="index"
             :class="idx === 0&&idx === index ? 'blue': ''|| idx === 1&&idx === index ? 'green': ''|| idx === 2&&idx === index ? 'orange': ''"
             @click="clickNumData(index)">
            <div class="numText" v-if="index === 0">
                <p>本月营收(元)</p>
                <p>￥<span>
                    <countTo :startVal='startVal' :endVal='item.endNum' :duration='3000'></countTo>
                </span></p>
            </div>
            <div class="numText" v-else-if="index === 1">
                <p>待回款(元)</p>
                <p>￥<span>
                    <countTo :startVal='startVal' :endVal='item.endNum' :duration='3000'></countTo>
                </span></p>
            </div>
            <div class="numText" v-else>
                <p>客单价/合同(元)</p>
                <p>￥<span>
                    <countTo :startVal='startVal' :endVal='item.endNum' :duration='3000'></countTo>
                </span></p>
            </div>
            <div class="wrap-progress">
                <circle-progressbar
                        :id="index"
                        :barColor="idx === index&&idx === 0 ? '#5EB0FE': ''|| idx === index&&idx === 1 ? '#80E313': ''
                        || idx === index&&idx === 2 ? '#F77E15': '#bbbbbb'"
                        :backgroundColor="backgroundColor"
                        :width="100"
                        :radius="10"
                        :slot="texts"
                        :progress="item.allNum"
                        :duration="duration"
                        isAnimation></circle-progressbar>
            </div>
        </div>
    </div>

</template>


<script>
    import circleProgressbar from 'vue-circleprogressbar'; //圆形进度条
    import countTo from 'vue-count-to';     //计数器

    export default {
        name: "progress",
        components: {
            circleProgressbar,
            countTo,
        },
        props: {},
        data() {
            return {
                width: 80,
                duration: 2000,
                texts: '完成率',
                radius: 10,
                delay: 500, //动画延迟时间
                backgroundColor: 'lightgrey',  //进度条背景色
                idx: 0,
                listsL: [], //接收数据的数组
                isShow: true,   //是否显示
                startVal: 0,    //计数器开始数
            }
        },
        methods: {
            getData(){
                this.$axios.req('/api/dataView').then(res =>{
                    this.listsL = res.data.data;
                }).catch(err =>{
                    console.log(err);
                })
            },
            clickNumData (index){
                this.idx = index;
            }
        },
        mounted() {
            this.getData();
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

    .nums {
        display: flex;
        justify-content: space-between;
        background-color: white;
        margin-left: 50px;
    }
    .numData {
        display: flex;
        justify-content: space-around;
        width: 33.3%;
        padding: 20px 30px;
        box-sizing: border-box;
        border-top: 6px solid #fff;
    }
    .numText {
        font-size: 14px;
        color: lightgray;
    }
    .numText > p:last-child {
        font-size: 16px;
        font-weight: 500;
        color: #303030;
        margin-top: 20px;
    }
    .blue {
        border-top: 6px solid #5EB0FE;
    }
    .green {
        border-top: 6px solid #80E313;
    }
    .orange {
        border-top: 6px solid #F77E15;
    }

</style>
