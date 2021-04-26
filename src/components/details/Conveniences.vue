<template>
  <div class="conveniences">
    <h3 class="other-t">便利设施</h3>
    <ul class="clearfix">
      <li v-for="(item, k) in facilities" :key="k">
        <img :src="item.image" :alt="item.title" />
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    facilities: Array
  }
}
</script>
<style lang="less" scoped>
.conveniences {
  ul {
    padding-top: 15px;
    li {
      float: left;
      width: 30%;
      margin: 0 1.5% 10px;
      padding-bottom: 10px;
      text-align: center;
      font-size: 12px;
      border: 1px solid #C9C9C9;
      border-radius: 5px;
      img {
        width: 30px;
        margin: 10px auto 5px;
      }
    }
  }
}
</style>