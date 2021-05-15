<template>
  <div class="building" v-pat-infinite-scroll="getProductList" pat-infinite-scroll-distance="450">
    <Loading v-if="buildingData.length === 0" />
    <template v-if="buildingData.length > 0">
      <ProductItem  v-for="(item, k) in buildingData" :item="item" :key="k" type="building" />
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
      buildingData: [],
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
        this.$httpApi.buildingApi(params).then(res => {
          if (res.code === 200) {
            const data = res.data.office_houses
            this.page++
            this.buildingData = this.buildingData.concat(data)
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
.building {
  padding: 15px 10px;
}
</style>