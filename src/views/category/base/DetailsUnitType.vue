<template>
  <div class="unit-type">
    <h3 class="other-t">户型介绍</h3>
    <div class="item" v-for="(item, k) in houseTypes" :key="k">
      <i class="a-img">
        <rentImg class="img-object" :url="item.image" :alt="item.type" @click.native="viewBigImg(k)" />
      </i>
      <i tag="h3">{{ item.type }}</i>
      <p>参考均价：<i>{{ item.average_price }}</i>/㎡</p>
      <p>参考总价：<i> {{ item.price }} </i>/套</p>
      <span>{{ item.area }}</span>
    </div>
    <button>房贷计算</button>
    <strong>免责声明</strong>
    <em>页面所载楼盘内容及数据仅供用户参考和借鉴，最终以开发商实际公示为准，如楼盘信息有误或其他疑义，可进行纠错。</em>
    <ImagePopup :bigImgArr="bigImgArr" :imgIndex="imgIndex" @closeBigImg="viewBigImg" v-if="bigImgArr" />
  </div>
</template>
<script>
import ImagePopup from '../../../components/base/ImagePopup'
export default {
  components: {
    ImagePopup
  },
  props: {
    houseTypes: Array
  },
  data () {
    return {
      bigImgArr: '',
      imgIndex: ''
    }
  },
  methods: {
    viewBigImg (index) {
      console.log(index >= 0)
      if (index >= 0) {
        const img = []
        this.houseTypes.map(item => {
          img.push(item.image)
        })
        this.bigImgArr = img
      } else {
        this.bigImgArr = ''
      }
      this.imgIndex = index
    }
  }
}
</script>
<style lang="less" scoped>
.unit-type {
  .item {
    position: relative;
    height: 75px;
    margin-top: 20px;
    padding-left: 130px;
    .a-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 120px;
      height: 75px;
      overflow: hidden;
    }
    h3 {
      padding-top: 22px;
      font-size: 20px;
      cursor: pointer;
    }
    p {
      margin-top: 6px;
      font-size: 12px;
      color: #7C7C7C;
      i {
        color: #BF3F3F;
      }
    }
    span {
      position: absolute;
      right: 0;
      top: 10px;
      font-size: 18px;
      color: #BF3F3F;
    }
  }
  button {
    width: 100%;
    height: 46px;
    margin-top: 30px;
    line-height: 46px;
    background: #24A10F;
    color: #fff;
    border-radius: 5px;
  }
  strong {
    display: block;
    margin-top: 30px;
    padding-left: 20px;
    font-weight: bold;
    color: #7C7C7C;
    background: url('../../../assets/image/disclaimer-icon.png') no-repeat left center;
    background-size: 12px;
  }
  em {
    display: block;
    margin-top: 8px;
    color: #7C7C7C;
    font-size: 12px;
  }
}
</style>