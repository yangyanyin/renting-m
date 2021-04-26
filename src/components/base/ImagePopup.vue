<template>
  <div class="big-img">
    <div class="content">
      <span class="close" @click="closeBigImg('')"></span>
      <img :src="bigImgUrl" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bigImgUrl: String
  },
  methods: {
    closeBigImg () {
      this.$emit('closeBigImg', '')
    }
  }
}
</script>
<style scoped lang="less">
.big-img {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  background:rgba(0, 0, 0, 0.6);
  .close {
    position: absolute;
    right: -5px;
    top: -15px;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: -1px;
      left: 13px;
      width: 3px;
      height: 30px;
      background: #353535;
      border-radius: 1px;
      transform: rotate(45deg) scale(.5);
    }
    &:before {
      content: '';
      position: absolute;
      top: -1px;
      left: 13px;
      width: 3px;
      height: 30px;
      background: #353535;
      border-radius: 1px;
      transform: rotate(-45deg) scale(.5);
    }
  }
  .content {
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 10px;
    right: 10px;
    height: auto;
    max-height: 90%;
    background: #fff;
    padding: 5px;
    border-radius: 3px;
    transform: translateY(-50%);
  }
}
</style>