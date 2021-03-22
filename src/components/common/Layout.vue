<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped lang="less">
.layout {
  padding-top: 50px;
}
</style>