<template>
  <div class="news-banner">
    <VueSlickCarousel v-bind="settings">
      <div class="item" v-for="(item, k) in newsBanner" :key="k">
        <router-link :to="'/n/d/' + item.id">
          <h3>{{ item.title }}</h3>
          <img :src="item.img" :alt="item.title">
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: { VueSlickCarousel },
    props: {
      newsBanner: Array
    },
    data () {
      return {
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 200000,
          pauseOnDotsHover: true,
          pauseOnFocus: true,
          pauseOnHover: true
        }
      }
    }
  }
</script>
<style lang="less">
.news-banner {
  overflow: hidden;
  .slick-slide {
    float: none !important;
    display: inline-block !important;
    height: 190px;
  }
  .item {
    position: relative;
    display: block !important;
    h3 {
      position: absolute;
      top: 18px;
      left: 18px;
      right: 18px;
      font-size: 14px;
      color: #fff;
    }
    img {
      object-fit: cover;
      height: 100%;
    }
  }
  
}
</style>
<style lang="less">
.news-banner {
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