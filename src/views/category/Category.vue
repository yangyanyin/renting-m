<!-- 新楼盘 -->
<template>
  <div class="category" v-pat-infinite-scroll="getProductList" pat-infinite-scroll-distance="450">
    <SearchBox />

    <Loading v-if="total <= 0"/>
    <template v-else>
      <Filters />
      <ProductList :productData="productData" :total="total" />
      <Loading v-if="pageLoading" />
    </template>
  </div>
</template>
<script>
import SearchBox from './base/SearchBox'
import Filters from './base/Filters'
import ProductList from './base/ProductList'
import Loading from '../../components/base/Loading'
export default {
  name: 'category',
  components: {
    SearchBox,
    Filters,
    ProductList,
    Loading
  },
  data () {
    return {
      productData: [],
      total: 0,
      page: 1,
      pageLoading: false,
      onMore: true
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'new house': {
          url: '/c/new-house',
          name: '新楼盘',
          api: 'new_house'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房'
        },
        'second hand': {
          url: '/c/second-hand',
          name: '二手公寓',
          api: 'second_hand_house'
        }
      }
      return [routes[this.$route.name]]
    }
  },
  methods: {
    getProductList () {
      if (this.onMore) {
        this.onMore = false
        const params = {
          page: this.page,
          size: 10,
          api_url: this.breadcrumb[0].api
        }
        this.pageLoading = true
        this.$httpApi.categoryListApi(params).then(res => {
          if (res.code === 200) {
            const data = res.data.new_houses || res.data.second_hand_houses
            this.page++
            this.productData = this.productData.concat(data)
            this.total = res.data.total
            this.pageLoading = false
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