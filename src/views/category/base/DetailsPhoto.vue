<template>
  <div class="photo">
    <h3 class="other-t">房源相册</h3>
    <div class="list">
      <strong>效果图</strong>
      <div class="image-all">
        <span v-for="(img, k) in photoAll.effect_picture" :key="k">
          <img class="img-object" :src="img" @click="viewBigImg(img)" />
        </span>
      </div>

      <strong>样板间</strong>
      <div class="image-all">
        <span v-for="(img, k) in photoAll.sample_room" :key="k">
          <img class="img-object" :src="img" @click="viewBigImg(img)" />
        </span>
      </div>

      <strong>周边配套</strong>
      <div class="image-all">
        <span v-for="(img, k) in photoAll.matching" :key="k">
          <img class="img-object" :src="img" @click="viewBigImg(img)" />
        </span>
      </div>
    </div>
    <div class="big-img" v-if="bigImgUrl">
      <div class="content">
        <span class="close" @click="viewBigImg('')"></span>
        <img :src="bigImgUrl" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photoAll: Object
  },
  data () {
    return {
      bigImgUrl: ''
    }
  },
  methods: {
    viewBigImg (url) {
      this.bigImgUrl = url
    }
  }
}
</script>
<style scoped lang="less">
.photo {
  strong {
    display: block;
    padding: 30px 0 10px;
    font-weight: normal;
  }
}
.image-all {
  white-space: nowrap;
  overflow: auto;
  span {
    display: inline-block;
    width: 230px;
    height: 125px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.big-img {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background:rgba(0, 0, 0, 0.6);
  .close {
    position: absolute;
    right: -15px;
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
    &:hover {
      &:before, &:after {
        background: #24A10F;
      }
    }
  }
  .content {
    position: absolute;
    z-index: 9;
    left: 50%;
    top: 50%;
    width: 800px;
    height: auto;
    margin-left: -400px;
    background: #fff;
    padding: 5px;
    border-radius: 3px;
    transform: translateY(-50%);
  }
}
</style>