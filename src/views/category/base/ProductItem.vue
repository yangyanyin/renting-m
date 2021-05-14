<template>
  <div class="item">
    <router-link :to="routerLink + item._id" class="a-img">
      <rentImg class="img-object" :url="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="routerLink + item._id" tag="h3">{{ item.title }}</router-link>
    <p class="type">
      <!-- <i v-for="(item, k) in item.house_types[0]" :key="k">{{ item.type }} / {{ item.area }}</i> -->
      <template v-if="type === 'renting'">
        <i>{{ item.house_model[0] }}  {{ item.area}}</i>
      </template>
      <template v-else>
        <i >{{ item.house_types[0].type }} / {{ item.house_types[0].area }}</i>
      </template>
    </p>
    <div class="price"> {{ item.price }} <i>{{ priceType }}</i></div>
    <a class="vr" :href="item.vr_link" target="_blank" v-if="item.vr_link">
      <img src="../../../assets/image/vr_icon.gif">
      VR看房
    </a>
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
      return '/月'
    },
    routerLink () {
      const routes = {
        'new house': '/c/new-house/',
        'renting': '/c/renting/',
        'second hand': '/c/second-hand/'
      }
      if (this.$route.params.search) {
        return routes[this.$route.params.search.replace('-', ' ')] || {}
      } else {
        return [routes[this.$route.name]]
      }
    },
    type () {
      return this.$route.name
    }
  }
  
}
</script>
<style scoped lang="less">
.item {
  position: relative;
  padding: 0 11px;
  margin-top: 15px;
  height: 90px;
  .price {
    font-size: 18px;
    color: #BF3F3F;
    i {
      display: inline-block;
      font-size: 12px;
    }
  }
  .vr {
    position: absolute;
    z-index: 9;
    left: 15px;
    bottom: 5px;
    width: 90px;
    height: 24px;
    padding-right: 15px;
    line-height: 24px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 3px;
    opacity: 0.8;
    font-weight: normal;
    img {
      display: inline-block;
      width: 30px;
      height: auto;
    }
    &:after {
      content: '';
      position: absolute;
      right: 10px;
      top: 8px;
      width: 5px;
      height: 5px;
      border-right: 1px solid #fff;
      border-top: 1px solid #fff;
      transform: rotate(45deg);
      transition: 0.3s;
    }
  }
  .a-img {
    float: left;
    width: 150px;
    height: 90px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 3px;
  }
  h3 {
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
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