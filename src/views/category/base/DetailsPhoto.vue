<template>
  <div class="photo" v-if="isShowPhoto">
    <h3 class="other-t">房源相册</h3>
    <div class="list">
      <template v-for="(item, name, k) in imgSet">
        <template v-if="item && item.length > 0">
          <strong :key="k">{{name}}</strong>
          <div class="image-all" :key="'p' + k">
            <span v-for="(img, i) in item" :key="i">
              <rentImg class="img-object" :url="img" @click.native="viewBigImg(i, item)"/>
            </span>
          </div>
          <!-- <HousePhoto :key="'p' + k" @viewBigImg="viewBigImg" :imagesArr="item" /> -->
        </template>
      </template>
    </div>
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
    photoAll: Object
  },
  data () {
    return {
      bigImgArr: '',
      imgSet: {
        效果图: this.photoAll.effect_picture,
        样板间: this.photoAll.sample_room,
        周边配套: this.photoAll.matching
      }
    }
  },
  computed: {
    isShowPhoto () {
      return this.imgSet['效果图'].length > 0 || this.imgSet['样板间'].length > 0 || this.imgSet['周边配套'].length > 0
    }
  },
  methods: {
    viewBigImg (k, imgArr) {
      this.imgIndex = k
      this.bigImgArr = imgArr
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
    border: 1px solid #ddd;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>