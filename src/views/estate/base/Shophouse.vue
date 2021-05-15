<template>
  <div class="shop-house" v-pat-infinite-scroll="getProductList" pat-infinite-scroll-distance="450">
    <Loading v-if="shophouseData.length === 0" />
    <template v-if="shophouseData.length > 0">
      <ProductItem  v-for="(item, k) in shophouseData" :item="item" :key="k" type="shophouse" />
    </template>
  </div>
</template>
<script>
import ProductItem from './ProductItem'
import Loading from '../../../components/base/Loading'

export default {
  components: {
    ProductItem,
    Loading
  },
  data () {
    return {
      shophouseData: [],
      page: 1,
      onMore: true
    }
  },
  methods: {
    getProductList () {
      if (this.onMore) {
        this.onMore = false
        const params = {
          page: this.page,
          size: 10,
        }
        this.$httpApi.shophouseApi(params).then(res => {
          if (res.code === 200) {
            const data = res.data.retention_houses
            this.page++
            this.shophouseData = this.shophouseData.concat(data)
            if (data.length === 10) {
              this.onMore = true
            }
          }
        })
      }
      
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
<style scoped lang="less">
.shop-house {
  padding: 15px 10px;
}
</style>