<template>
  <div class="estate">
    <div class="banner">
      <div class="btn">
        <router-link tag="button" to="/estate"> 新加坡商业地产</router-link>
        <router-link tag="button" to="/estate/building"> 分层地契商业办公大楼</router-link>
        <router-link tag="button" to="/estate/shophouse"> 保留性店屋</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'estate'
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 60px;
  background: url('../../assets/image/estate-banner.png') no-repeat top center;
  background-size: auto 100%;
  .btn {
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding: 17px 0;
  }
  button {
    padding-bottom: 5px;
    color: #fff;
    background: no-repeat;
    height: 26px;
    &.router-link-exact-active {
      border-bottom: 1px solid #E8E7E7;
    }
  }
}
</style>