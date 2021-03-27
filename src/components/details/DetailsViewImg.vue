<template>
  <div class="details-images">
    <VueSlickCarousel v-bind="settings">
      <img class="img-object" v-for="(item, k) in imagesArr" :key="k" :src="item" />
    </VueSlickCarousel>
    <a :href="vrLink" target="_blank" v-if="vrLink">
      <img src="../../assets/image/vr_icon.gif">
      VR看房
    </a>
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
    imagesArr: Array,
    vrLink: String
  },
  data () {
    return {
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true
      }
    }
  },
  methods: {},
  mounted () {}
}
</script>
<style lang="less">
.details-images {
  position: relative;
  margin: 0 -15px;
  overflow: hidden;
  .slick-slide {
    > div {
      height: 210px;
    }
  }
  a {
    position: absolute;
    z-index: 9;
    left: 15px;
    bottom: 15px;
    width: 105px;
    height: 26px;
    padding-right: 16px;
    line-height: 26px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    opacity: .8;
    transition: .3s;
    &:after {
      content: '';
      position: absolute;
      right: 12px;
      top: 10px;
      width: 5px;
      height: 5px;
      border-right: 1px solid #fff;
      border-top: 1px solid #fff;
      transform: rotate(45deg);
    }
    img {
      display: inline-block;
      width: 36px;
      height: auto;
    }
  }
  .slick-dots {
    display: inline-block !important;
    position: absolute;
    left: 50%;
    bottom: 15px;
    width: auto;
    height: 20px;
    padding: 0 5px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transform: translateX(-50%) scale(.7);
    li {
      margin: 0;
      float: left;
      button {
        padding: 8px;
      }
      button:before {
        color: #fff;
      }
    }
  }
}
</style>