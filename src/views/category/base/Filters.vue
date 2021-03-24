<template>
  <div class="filter">
    <div class="tips" v-if="showTips"><p>全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!</p></div>
    
    <div class="type">
      <span @click="typeClick('地区')">地区</span>
      <span @click="typeClick('面积')">面积</span>
      <span @click="typeClick('价格')">价格</span>
      <span @click="typeClick('户型')">户型</span>
    </div>
    <div class="down-list">
      <div class="content">
        <span v-for="(item, k) in downData[typeTitle]" :key="k">{{ item }}</span>
        <div class="btn">
          <i>清除条件</i>
          <button>确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      downData: {
        '地区': ['全部', '中部', '东部', '西部'],
        '面积': ['11㎡', '22㎡', '33㎡', '44㎡'],
        '价格': ['$12.32', '$12.32', '$12.32', '$12.32'],
        '户型': ['1卧室', '2卧室', '3卧室', '4卧室']
      },
      typeTitle: ''
    }
  },
  computed: {
    showTips () {
      return this.$route.params.name === 'renting'
    }
  },
  methods: {
    typeClick (type) {
      this.typeTitle = type
    }
  }
}
</script>
<style scoped lang="less">
.filter {
  padding: 10px 10px 0;
  border-bottom: 1px solid #F5F5F5;
  .type {
    span {
      display: inline-block;
      position: relative;
      width: 25%;
      padding: 10px 0;
      text-align: center;
      &:after {
        content: '';
        position: absolute;
        top: 18px;
        right: 15px;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: transparent transparent#E2E2E2;
        transform: rotate(180deg);
      }
    }
  }
  .down-list {
    position: fixed;
    z-index: 9;
    top: 157px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    .content {
      height: 400px;
      background: #fff;
    }
  }
  .tips {
    text-align: center;
    margin-bottom: 60px;
    p {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      font-size: 12px;
      color: #F7B964;
      &::after {
        content: '!';
        position: absolute;
        left: 0;
        top: 1px;
        width: 14px;
        height: 14px;
        border-radius: 14px;
        color: #fff;
        line-height: 14px;
        background: #F7B964;
      }
    }
  }
}
</style>