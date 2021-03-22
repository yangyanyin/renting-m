<template>
  <div class="home-title clearfix">
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style scoped lang="less">
.home-title {
  font-size: 16px;
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
}
</style>