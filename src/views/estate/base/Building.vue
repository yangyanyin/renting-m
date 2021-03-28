<template>
  <div class="building">
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
      buildingData: []
    }
  },
  mounted () {
    this.$httpApi.buildingApi().then(res => {
      if (res.code === 200) {
        this.buildingData = res.data.office_houses
      }
    })
  }
}
</script>
<style scoped lang="less">
.building {
  padding: 15px 10px;
}
</style>