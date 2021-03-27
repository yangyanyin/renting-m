<template>
  <div class="home-estate">
    <Title title="商业地产" />
    <div class="estate-list clearfix">
      <div class="item" v-for="(item, k) in businessData" :key="k">
        <router-link :to="'/estate/d/' + item._id" class="a-img">
          <rentImg class="img-object" :url="item.image" :alt="item.title" />
        </router-link>
        <router-link to="/estate/d/sad" tag="h3">{{ item.title }}</router-link>
        <p>{{ item.addr }}</p>
      </div>
    </div>
    <router-link to="/estate" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  props: {
    businessData: Array
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.estate-list {
  overflow-x: auto;
  white-space: nowrap;
  padding-left: 10px;
  .item {
    display: inline-block;
    text-align: center;
    margin-right: 10px;
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
      width: 220px;
      height: 120px;
    }
    h3 {
      font-size: 16px;
      padding: 15px 0 5px;
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
    }
  }
}
.view-all {
  position: relative;
  display: block;
  width: 120px;
  height: 40px;
  margin: 20px auto 30px;
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