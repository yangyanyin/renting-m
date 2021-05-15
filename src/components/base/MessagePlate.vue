<template>
  <div class="message">
    <div class="content">
      <p>金牌团队，全岛各区房产买卖租，一条龙服务</p>
      <p>每日9点更新汇总全岛各区最新房源，专车接送看房。 </p>
      <a @click="btnClick">即刻来电预约看房</a>
    </div>
    <AdvisoryPopup v-if="showAdvisoryType" type="其他" @closePopuo="btnClick" />
  </div>
</template>
<script>
import AdvisoryPopup from './AdvisoryPopup'
export default {
  components: {
    AdvisoryPopup
  },
  data () {
    return {
      showAdvisoryType: false
    }
  },
  methods: {
    btnClick () {
      this.showAdvisoryType = !this.showAdvisoryType
    }
  }
}
</script>
<style lang="less" scoped>
.message {
  background: #f5f5f5;
  padding: 10px;
  text-align: center;
  .content {
    border-radius: 5px;
    padding: 25px 35px 40px;
    background: linear-gradient(180deg, #366669 0%, #103636 100%);
    p {
      color: #fff;
      line-height: 26px;
      &.t {
        margin-bottom: 5px;
        font-size: 16px;
      }
    }
    a {
      display: inline-block;
      margin-top: 40px;
      color: #FFE19A;
      background: no-repeat;
      text-decoration: underline;
    }
  }
}
</style>