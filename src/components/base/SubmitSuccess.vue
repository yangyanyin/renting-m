<template>
  <div class="success">
    <div class="content popup-animat">
      <div class="close" @click="closeSuccess"></div>
      <div class="t">
        <h3>递交成功</h3>
        <p>请耐心等待，我们稍后将会有工作人员与您取得联系！</p>
      </div>
      <div class="c">
        <p>您也可以拨打我们的服务热线，直接与我们取得联系</p>
        <span>客服热线 <strong>+65 8813 9139</strong> </span>
        <button @click="closeSuccess">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeSuccess () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped lang="less">
.success {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  .content {
    position: absolute;
    top: 50%;
    left: 15px;
    right: 15px;
    background: #fff;
    border-radius: 5px;
    transform: translateY(-20%);
    text-align: center;
    overflow: hidden;
    .close {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      height: 30px;
      &:after {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        opacity: .8;
        background: #fff;
        transition: .3s;
        transform: rotate(-45deg);
      }
      &:before {
        content: '';
        position: absolute;
        left: 14px;
        top: 2px;
        width: 3px;
        height: 26px;
        background: #fff;
        opacity: .8;
        transition: .3s;
        transform: rotate(45deg);
      }
    }
    .t {
      padding: 30px 0;
      background: #24A10F;
      color: #fff;
      h3 {
        position: relative;
        display: inline-block;
        padding: 0 0 10px 25px;
        font-size: 24px;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 5px;
          width: 8px;
          height: 18px;
          border-bottom: 2px solid #fff;
          border-right: 2px solid #fff;
          transform: rotate(45deg);
        }
      }
      p {
        padding: 0 50px;
        font-size: 14px;
      }
    }
    .c {
      padding-bottom: 40px;
      p {
        padding: 30px 50px 15px;
        font-size: 14px;
        opacity: .8;
      }
      span {
        font-size: 14px;
        strong {
          position: relative;
          top: 2px;
          margin-left: 10px;
          padding-left: 30px;
          font-size: 20px;
          color: #24A10F;
          background: url('../../assets/image/tel-green.png') no-repeat left center;
          background-size: 20px;
        }
      }
      button {
        display: block;
        width: 180px;
        height: 46px;
        margin: 30px auto 0;
        line-height: 46px;
        color: #fff;
        background: #24A10F;
        border-radius: 5px;
        font-size: 16px;
        transition: .3s;
      }
    }
  }
}
</style>