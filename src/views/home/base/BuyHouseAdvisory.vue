<template>
  <div class="home-advisory">
    <div class="content">
      <h3 v-html="buyHouseAdvisory.title"></h3>
      <p>{{ buyHouseAdvisory.des }}</p>
      <router-link :to="buyHouseAdvisory.more">立即查看</router-link>
    </div>
    

  </div>
</template>
<script>
export default {
  props: {
    buyHouseAdvisory: Object
  }
}
</script>
<style scoped lang="less">
.home-advisory {
  padding: 10px;
  background: #f5f5f5;
  text-align: center;
  .content {
    padding: 35px 30px 25px;
    border-radius: 5px;
    background: #fff url('../../../assets/image/house-advisory.png') no-repeat center bottom;
    background-size: 400px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    margin-top: 20px;
    line-height: 24px;
  }
  a {
    display: inline-block;
    width: 120px;
    height: 40px;
    margin-top: 30px;
    line-height: 38px;
    color: #fff;
    background: #24A10F;
    border-radius: 5px;
  }
}
</style>