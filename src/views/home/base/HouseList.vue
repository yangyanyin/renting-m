<template>
  <div class="home-house-list">
    <Title title="精选优质新房" />
    <div class="product-list clearfix">
      <div class="item left" v-for="(item, k) in housesData" :key="k">
        <router-link :to="`${housesType.url}/${item._id}`" class="a-img">
          <rentImg class="img-object" :url="item.image" :alt="item.title" />
        </router-link>
        <router-link :to="`${housesType.url}/${item._id}`" tag="h3"> {{item.title}} </router-link>
        <p v-if="item.house_types && item.house_types.length > 0"> {{item.house_types[0].type}} / {{item.house_types[0].area}} </p>
        <span class="price"> {{item.price}} <i>{{housesType.unit}}</i></span>
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
      font-size: 14px;
      margin: 10px 0 8px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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