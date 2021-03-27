<template>
  <div class="owner">
    <div class="owner-banner">
      <rentImg class="img-object" :url="require('../../assets/image/owner-banner.jpg')" :alt="tabType" />
    </div>
    <div class="content">
      <div class="tab">
        <button @click="changeType('委托出租')" :class="{active: tabType === '委托出租'}">委托出租</button>
        <button @click="changeType('委托卖房')" :class="{active: tabType === '委托卖房'}">委托卖房</button>
      </div>
      <FormSubmit :tabType="tabType" />
    </div>
    <Process></Process>
  </div>
</template>
<script>
import FormSubmit from './base/FormSubmit'
import Process from './base/Process'
export default {
  components: {
    FormSubmit,
    Process
  },
  data () {
    return {
      tabType: '委托出租',
      breadcrumb: [
        {
          name: '我是业主',
          url: '/owner'
        }
      ]
    }
  },
  methods: {
    changeType (type) {
      this.tabType = type
    }
  }
}
</script>
<style scoped lang="less">
.owner {
  padding: 15px;
  .owner-banner {
    height: 100px;
  }
  .content {
    .tab {
      padding: 18px 0 25px;
      text-align: center;
      button {
        display: inline-block;
        position: relative;
        margin: 0 30px;
        padding: 0 0 7px 30px;
        font-size: 16px;
        background: none;
        font-weight: bold;
        border-bottom: 2px solid #fff;
        &.active {
          border-color: #24A10F;
          color: #24A10F;
          &:after {
            background: #24A10F;
          }
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 3px;
          width: 16px;
          height: 16px;
          background: #C9C9C9;
          border-radius: 50%;
        }
        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          left: 3px;
          top: 8px;
          width: 8px;
          height: 3px;
          border-bottom: 1px solid #fff;
          border-left: 1px solid #fff;
          transform: rotate(-45deg);
        }
      }
    }
  }
}
</style>