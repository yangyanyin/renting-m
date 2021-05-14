<template>
  <div class="home-house-list">
    <Title :title="housesType.name" />
    <div class="product-list clearfix">
      <div class="item left" v-for="(item, k) in housesData" :key="k">
        <router-link :to="`${housesType.url}/${item._id}`" class="a-img">
          <rentImg class="img-object" :url="item.image" :alt="item.title" />
        </router-link>
        <router-link :to="`${housesType.url}/${item._id}`" tag="h3"> {{item.title}} </router-link>
        <p> 
          <template v-if="item.house_types && item.house_types.length > 0">
            {{item.house_types[0].type}} / {{item.house_types[0].area}} 
          </template>
        </p>
        <span class="price"> {{item.price}} <i>{{housesType.unit}}</i></span>
        <a class="vr" :href="item.vr_link" target="_blank" v-if="item.vr_link">
          <img src="../../../assets/image/vr_icon.gif">
          VR看房
        </a>
      </div>
    </div>
    <router-link :to="housesType.url" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  props: {
    housesData: Array,
    type: String
  },
  data () {
    return {}
  },
  computed: {
    housesType () {
      const routes = {
        'new house': {
          url: '/c/new-house',
          name: '精选优质新房',
          unit: '万起'
        },
        'second hand': {
          url: '/c/second-hand',
          name: '新加坡二手好房',
          unit: '万'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房',
          unit: '/月'
        }
      }
      return routes[this.type] || {}
    }
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
    position: relative;
    width: 50%;
    margin-bottom: 20px;
    padding: 0 5px;
    .a-img {
      display: block;
      border-radius: 5px;
      overflow: hidden;
      height: 100px;
    }
    h3 {
      height: 20px;
      margin: 7px 0 3px;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    p {
      height: 17px;
      font-size: 12px;
      color: #7C7C7C;
    }
    span {
      display: block;
      margin-top: 4px;
      color: #BF3F3F;
      font-size: 20px;
      i {
        font-size: 14px;
      }
    }
    .vr {
      position: absolute;
      z-index: 9;
      left: 10px;
      bottom: 85px;
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