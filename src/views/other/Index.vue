<template>
  <div class="other">
    <div class="menu">
      <router-link to="/about">公司介绍</router-link>
      <router-link to="/contact-us">联系我们</router-link>
      <router-link to="/copyright">版权声明</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.menu {
  text-align: center;
  a {
    display: inline-block;
    height: 50px;
    margin: 0 15px;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 3px solid #fff;
    font-weight: bold;
    &.router-link-active {
      color: #24A10F;
      border-color: #24A10F;
    }
  }
}
.content {
  padding: 15px;
  background: #F5F5F5;
}
</style>

<style lang="less">
.other-title {
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
}
</style>