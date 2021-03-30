<template>
  <div class="return-top" v-if="showTopBtn" @click="backTop"></div>
</template>
<script>
export default {
  data () {
    return {
      showTopBtn: false
    }
  },
  methods: {
    backTop () {
      let scrTop = 0
      let iSpeed = 0
      let backTopTimer = null
      backTopTimer = setInterval(function () {
        scrTop = document.body.scrollTop || document.documentElement.scrollTop
        iSpeed = scrTop / 6
        if (scrTop === 0) {
          clearInterval(backTopTimer)
        }
        document.body.scrollTop = scrTop - iSpeed
        document.documentElement.scrollTop = scrTop - iSpeed
      }, 8)
    }
  },
   mounted () {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop || document.documentElement.scrollTop > 600) {
        this.showTopBtn = true
      } else {
        this.showTopBtn = false
      }
    })
  }
}
</script>
<style scoped lang="less">
.return-top {
  position: fixed;
  right: 10px;
  bottom: 70px;
  width: 32px;
  height: 32px;
  background: #FFFFFF url('../../assets/image/return-top.png') no-repeat;
  background-size: 50px;
  background-position: -24px 11px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;

}
</style>