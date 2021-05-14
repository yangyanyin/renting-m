<template>
  <div class="big-img">
    <div class="content">
      <VueSlickCarousel v-bind="settings" >
        <img class="img-object" v-for="(item, k) in images" :key="k" :src="item" alt="">
      </VueSlickCarousel>
      <span class="close" @click="closeBigImg('')"></span>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {
    VueSlickCarousel
  },
  props: {
    bigImgArr: Array,
    imgIndex: Number,
    type: String
  },
  data () {
    return {
      settings: {
        accessibility: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: this.imgIndex,
        adaptiveHeight: true
      }
    }
  },
  computed: {
    images () {
      const img = []
      this.bigImgArr.map(src => {
        img.push(src.replace('http://web.aicassets.com', 'https://cms.kangongyu.cn'))
      })
      return img
    }
  },
  methods: {
    closeBigImg () {
      this.$emit('closeBigImg', -1)
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
  background:rgba(0, 0, 0, 0.6);
  .close {
    position: absolute;
    right: 0;
    top: -35px;
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
    left: 10px;
    right: 10px;
    top: 50%;
    height: auto;
    max-height: 600px;
    background: #fff;
    padding: 2px;
    border-radius: 3px;
    transform: translateY(-50%);
  }
}
</style>
<style lang="less">
.big-img {
  .slick-prev {
    z-index: 99;
    left: 5px;
  }
  .slick-next {
    z-index: 99;
    right: 5px;
  }
}
</style>