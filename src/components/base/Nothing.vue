<template>
  <div class="nothing">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: String
  }
}
</script>
<style scoped lang="less">
.nothing {
  padding: 50px 0;
  font-size: 16px;
  text-align: center;

}
</style>