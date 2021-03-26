<template>
  <div class="item">
    <router-link :to="routerLink + item._id" class="a-img">
      <rentImg :url="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="routerLink + item._id" tag="h3">{{ item.title }}</router-link>
    <p class="type">
      <i v-for="(item, k) in item.house_types" :key="k" v-show="k < 3">{{ item.type }} / {{ item.area }}</i>
    </p>
    <div class="price"> {{ item.price }} <i>{{ priceType }}</i></div>
  </div>
</template>
<script>
export default {
  props: {
    item: Object
  },
  computed: {
    priceType () {
      if (this.$route.name === 'new house') {
        return '万起'
      }
      if (this.$route.name === 'second hand') {
        return '万'
      }
      return ''
    },
    routerLink () {
      const routes = {
        'new house': '/c/new-house/',
        'renting': '/c/renting/',
        'second hand': '/c/second-hand/'
      }
      return [routes[this.$route.name]]
    }
  }
}
</script>
<style scoped lang="less">
.item {
  padding: 0 11px;
  margin-top: 15px;
  height: 113px;

  .price {
    font-size: 18px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 12px;
    }
  }
  .a-img {
    float: left;
    width: 150px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 3px;
  }
  h3 {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    /* autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: no */
    i {
      display: inline-block;
      position: relative;
      top: -2px;
      width: 32px;
      margin-left: 10px;
      line-height: 18px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      background: #24A10F;
      border-radius: 2px;
    }
  }
  p {
    padding: 5px 0;
    font-size: 12px;
    line-height: 18px;
    i {
      display: inline-block;
      margin-right: 10px;
      color: #7C7C7C;
    }
  }
}
</style>