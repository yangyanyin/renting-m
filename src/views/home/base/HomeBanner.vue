<template>
  <div class="banner">
    <img class="b-img" src="../../../assets/image/home-banner.jpg"  alt="新加坡看公寓网" />
    <p>好房直通车，就在新加坡看公寓网</p>

    <SearchBar class="search-banner" />
    
    <div class="integrity">
      <span>
        <img src="../../../assets/image/integrity-icon.png" alt="诚信为本" />
        诚信为本
      </span>
      <span>
        <img src="../../../assets/image/strength-icon.png" alt="实力铸造" />
        实力铸造
      </span>
      <span>
        <img src="../../../assets/image/sincere-icon.png" alt="真诚服务" />
        真诚服务
      </span>
      <span>
        <img src="../../../assets/image/real-icon.png" alt="100%真实房源" />
        100%真实房源
      </span>
    </div>
  </div>
</template>
<script>
import SearchBar from '../../../components/base/SearchBar'
export default {
  components: {
    SearchBar
  }
}
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  height: 200px;
  overflow: hidden;
  p {
    position: absolute;
    z-index: 99;
    width: 100%;
    left: 0;
    top: 50px;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  .b-img {
    position: absolute;
    left: 50%;
    width: auto;
    height: 200px;
    transform: translateX(-50%);
  }
  .integrity {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      padding: 0 8px;
      line-height: 16px;
      font-size: 12px;
      color: #fff;
      img {
        float: left;
        width: 15px;
        margin-right: 5px;
      }
    }
  }
}
.search-banner {
  position: absolute;
  top: 87px;
  left: 10%;
  z-index: 9;
  width: 80%;
  height: 40px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgb(0 0 0 / 16%);
  border-radius: 5px;
  overflow: hidden;
  padding-top: 20px;
}
</style>