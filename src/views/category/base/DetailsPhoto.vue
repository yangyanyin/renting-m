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
    <ImagePopup :bigImgUrl="bigImgUrl" @closeBigImg="viewBigImg" v-if="bigImgUrl" />
  </div>
</template>
<script>
import ImagePopup from '../../../components/base/ImagePopup'
export default {
  components: {
    ImagePopup
  },
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
</style>