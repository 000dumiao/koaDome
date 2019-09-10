<template>
  <div class="home">
      <div class="homeIcon">
          <img src="../assets/homeicon.png" alt="">
          <p>首页</p>
      </div>
      <circular></circular>
      <div class="centerChart">
          <citys class="widths"></citys>
          <dynamic class="widths"></dynamic>
      </div>
  </div>
</template>

<script>
import circular from '../components/progress/progress'  //圆形进度条
import citys from '../components/citys/citys'  //词云图
import dynamic from '../components/dynamic/dynamic'  //个人动态


export default {
  name: 'home',
  components: {
      circular,
      citys,
      dynamic
  },
  data() {
    return {

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

    .homeIcon {
        margin: 40px 0 40px 20px;
        font-size: 14px;
        color: #303030;
        display: flex;
        line-height: 30px;
    }
    .homeIcon > img {
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
    .centerChart {
        display: flex;
        margin-left: 50px;
        margin-top: 20px;
    }
    .widths {
        width: 50%;
    }

</style>
