<template>
  <div class="introduction">
    <h3 class="other-t">{{ title }}</h3>
    <p>{{ introduction }}</p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: String,
    title: {
      type: String,
      default () {
        return '房源介绍'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.introduction {
  p {
    margin-top: 15px;
    line-height: 24px;
    font-size: 13px;
  }
}
</style>