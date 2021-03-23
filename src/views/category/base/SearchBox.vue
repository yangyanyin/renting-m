<template>
  <div class="category-search">
    <div class="search-box">
      <SearchBar />
    </div>
  </div>
</template>
<script>
import SearchBar from '../../../components/base/SearchBar'
export default {
  components: {
    SearchBar
  },
  computed: {
    
  }
  
}
</script>
<style scoped lang="less">
.category-search {
  background: #F5F5F5;
}
</style>
<style lang="less">
.search-box {
  padding: 12px 10px;
  background: #fff;
  .search-Keyword {
    position: relative;
    height: 32px;
    border: 1px solid #F5F5F5;
    border-radius: 5px;
    overflow: hidden;
    select {
      font-size: 12px;
    }
    input {
      height: 30px;
    }
    button {
      top: -1px;
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>