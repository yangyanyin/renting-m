<template>
  <div class="details-images">
    <VueSlickCarousel v-bind="settings">
      <div class="item" v-for="(item, k) in imagesArr" :key="k">
        <img :src="item" />
      </div>
    </VueSlickCarousel>
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
    imagesArr: Array
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
  margin: 0 -15px;
  overflow: hidden;
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