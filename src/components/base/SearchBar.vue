<template>
  <div class="search-Keyword">
    <select v-model="selectType">
      <option value="新楼盘">新楼盘</option>
      <option value="二手房">二手房</option>
      <option value="租房">租房</option>
    </select>
    <input type="text" v-model="Keyword" placeholder="输入MRT、小区名、地区名称" />
    <button @click="searchClick">搜索</button>
  </div>
</template>
<script>
const selectUrl = {
  '新楼盘': 'new-house',
  '二手房': 'second-hand',
  '租房': 'renting'
}
export default {
  data () {
    return {
      selectType: '新楼盘',
      Keyword: ''
    }
  },
  methods: {
    searchClick () {
      this.$router.push({
        path: `/search/${selectUrl[this.selectType]}`,
        query: {
          keyword: this.Keyword
        }
      })
    }
  },
  mounted () {
    for (const key in selectUrl) {
      if (this.$route.params.search === selectUrl[key]) {
        this.selectType = key
      }
    }
  }
}
</script>
<style lang="less" scoped>
.search-Keyword {
  select {
    position: absolute;
    left: 0;
    top: 50%;
    width: 80px;
    text-align: center;
    text-align-last: center;
    border: none;
    font-size: 13px;
    transform: translateY(-50%);
  }
  input {
    position: absolute;
    left: 80px;
    top: 0;
    padding: 0 10px;
    width: calc(100% - 74px - 80px);
    font-size: 12px;
    height: 40px;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 74px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    background: #24A10F;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: #198407;
    }
  }
}
</style>