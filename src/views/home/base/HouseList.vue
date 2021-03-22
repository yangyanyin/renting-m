<template>
  <div class="home-house-list">
    <Title title="精选优质新房" />
    <div class="product-list clearfix">
      <div class="item left" v-for="(i, k) in 4" :key="k">
        <router-link to="/c/d/qwe" class="a-img">
          <img src="https://cms.aicassets.com/images/default/5fa21282cb759.jpeg" alt="新加坡最新房产资讯" />
        </router-link>
        <router-link to="/c/d/qwe" tag="h3">2019年最值得投资的楼盘，南峰雅苑</router-link>
        <p>2-5室 / 96-116㎡</p>
        <span class="price">$105 <i>万起</i></span>
      </div>
    </div>
    <router-link to="/" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.home-house-list {
  padding-bottom: 25px;
}
.product-list {
  padding: 0 5px;
  .item {
    width: 50%;
    margin-bottom: 20px;
    padding: 0 5px;
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
    }
    h3 {
      font-size: 14px;
      padding: 10px 0 8px;
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
    }
    span {
      display: block;
      margin-top: 10px;
      color: #BF3F3F;
      font-size: 20px;
      i {
        font-size: 14px;
      }
    }
  }
}
.view-all {
  position: relative;
  display: block;
  width: 120px;
  height: 40px;
  margin: auto;
  background: #FFFFFF;
  border: 1px solid #24A10F;
  color: #24A10F;
  border-radius: 5px;
  text-align: center;
  line-height: 38px;
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 17px;
    width: 6px;
    height: 6px;
    border-top: 2px solid #24A10F;
    border-right: 2px solid #24A10F;
    border-radius: 2px;
    transform: rotate(45deg);
  }
}
</style>