<template>
  <div class="product-list">
    <ProductItem v-for="(item, k) in productData" :key="k" :item="item" />
  </div>
</template>
<script>
import ProductItem from './ProductItem'
export default {
  components: {
    ProductItem
  },
  props: {
    productData: Array,
    total: Number
  },
  data () {
    return {
      recommendList: []
    }
  },
  computed: {
    recommendType () {
      const data =  {
        'second hand': {
          title: '二手房推荐',
          type: 'second_hand_house',
          link: '/c/second-hand/'
        },
        'new house': {
          title: '新楼盘推荐',
          type: 'new_house',
          link:'/c/new-house/'
        },
        'renting': {
          title: '租房推荐',
          type: 'renting',
          link:'/c/renting/'
        }
      }
      return data[this.$route.name]
    }
  },
  mounted () {
    // const params = {
    //   type: this.recommendType.type
    // }
    // this.$httpApi.categoryRecommendApi(params).then(res => {
    //   if (res.code === 200) {
    //     this.recommendList = res.data.recommend
    //   }
    // })
  }
}
</script>