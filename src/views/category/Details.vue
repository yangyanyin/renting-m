<template>
  <div class="details">
    <Loading v-if="!proTitle"/>
    <div v-else class="content">
      <DetailsViewImg :vrLink="vrLink" :imagesArr="proBigImages" v-if="proBigImages" />
       <div class="name">
        <i v-for="(name, k) in titleTags" :key="k">{{ name }}</i>
        <h3>{{ proTitle }}</h3>
        <span v-for="(name, k) in houseTags" :key="name + k">{{ name }}</span>
      </div>
      <DetailsInfoBase :infoBase="infoBase" :messageType="breadcrumb[0].message_type" :type="breadcrumb[0].name" :proTitle="proTitle" />
      <template v-if="breadcrumb[0].name !== '狮城租房'">
        <DetalsIntroduction :introduction="introduction" />
        <DetailsPhoto :photoAll="photoAll" />
        <DetailsDetailed :projectDetails="projectDetails" />
        <DetailsUnitType :houseTypes="houseTypes" />
      </template>
      <template v-else>
        <DetailsHousingInfo :infoBase="infoBase" />
        <DetailsHousingDescribe 
          :facilities="surroundingFacilities"
          :community="community"
          :introduction="introduction"
          :payType="payType"
          :price="infoBase.price" />
      </template>
      <BaiduMap v-if="coordinate" :coordinate="coordinate" :addr="infoBase.addr" :title="proTitle" :mapData="mapData"  />
      <DetailsRecommend :proTitle="proTitle" />
    </div>
  </div>
</template>
<script>
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import DetailsPhoto from './base/DetailsPhoto'
import DetailsDetailed from './base/DetailsDetailed'
import DetailsUnitType from './base/DetailsUnitType'
import DetailsInfoBase from './base/DetailsInfoBase'
import DetailsHousingInfo from './base/DetailsHousingInfo'
import DetailsHousingDescribe from './base/DetailsHousingDescribe'
import DetailsRecommend from '../../components/details/DetailsRecommend'
import BaiduMap from '../../components/details/BaiduMap'
import Loading from '../../components/base/Loading'

export default {
  name: 'category-detail',
  components: {
    DetailsViewImg,
    DetailsPhoto,
    DetailsDetailed,
    DetailsUnitType,
    DetalsIntroduction,
    DetailsInfoBase,
    DetailsHousingInfo,
    DetailsHousingDescribe,
    DetailsRecommend,
    BaiduMap,
    Loading
  },
  data () {
    return {
      proTitle: '',       // 标题
      proBigImages: '',   // 大图 
      infoBase: {},       // 标签信息
      introduction: '',   // 介绍
      photoAll: {},       // 房源相册
      projectDetails: {}, // 项目详情
      houseTypes: '',     // 户型
      houseTags: [],      // 楼盘标签
      titleTags: [],      // 标题标签
      vrLink: '',         // VR 看房链接
      coordinate: '',
      mapData: '',
      surroundingFacilities: '',
      community: '',
      payType: ''
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'new-house': {
          url: '/c/new-house',
          name: '新楼盘',
          api: 'new_house',
          message_type: '购买新楼盘'
        },
        'renting': {
          url: '/c/renting',
          name: '狮城租房',
          api: 'rented_house',
          message_type: '租房'
        },
        'second-hand': {
          url: '/c/second-hand',
          name: '二手公寓',
          api: 'second_hand_house',
          message_type: '二手公寓'
        }
      }
      return [
        routes[this.$route.params.category],
        {
          url: this.$route.path,
          name: this.proTitle
        }
      ]
    }
  },
  mounted () {
    const params = {
      id: this.$route.params.id,
      api_url: this.breadcrumb[0].api
    }
    this.$httpApi.productDetailApi(params).then(res => {
      if (res.code === 200) {
        const detailInfo = res.data.new_house || res.data.second_hand_house
        this.proTitle = detailInfo.title
        this.proBigImages = detailInfo.effect_images || detailInfo.images
        this.introduction = detailInfo.description
        this.houseTypes = detailInfo.house_types
        this.houseTags = detailInfo.house_tags
        this.titleTags = detailInfo.title_tags
        this.vrLink = detailInfo.vr_link
        this.mapData = detailInfo.map
        this.coordinate = detailInfo.coordinate
        this.surroundingFacilities = detailInfo.surrounding_facilities
        this.community = detailInfo.community
        this.payType = detailInfo.pay_type
        this.infoBase = {
          region: detailInfo.region_ch ? detailInfo.region_ch[0] : '',
          area: detailInfo.area,
          completion_date: detailInfo.finish_at,
          traffic: detailInfo.traffic,
          traffic_tips: detailInfo.traffic_tips,
          price: detailInfo.price,
          addr: detailInfo.addr,
          house_type: detailInfo.house_type,
          house_types: detailInfo.house_types,
          rent_type: detailInfo.rent_type,
          floor: detailInfo.floor,
          facilities: detailInfo.facilities
        }

        this.photoAll = {
          effect_picture: detailInfo.effect_images,
          sample_room: detailInfo.demo_images,
          matching: detailInfo.surrounding_images
        }

        this.projectDetails = {
          name: detailInfo.name,
          type: detailInfo.type,
          developer: detailInfo.developer,
          property: detailInfo.property,
          start_time: detailInfo.start_at,
          finish: detailInfo.finish_at,
          facility: detailInfo.facilities
        }
        

        console.log(res.data)
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details {
  .content {
    padding: 0 15px;
  }
  .name {
    margin-top: 10px;
    i {
      display: inline-block;
      padding: 2px 10px;
      line-height: 25px;
      margin-right: 10px;
      background: #24A10F;
      border-radius: 2px;
      text-align: center;
      color: #fff;
      font-size: 12px;
    }
    h3 {
      margin: 15px 0;
      font-size: 18px;
    }
    span {
      display: inline-block;
      padding: 0 8px;
      line-height: 25px;
      margin-right: 10px;
      background: #F5F5F5;
      border-radius: 2px;
      text-align: center;
      color: #7C7C7C;
      font-size: 12px;
    }
  }
}
</style>
<style lang="less">
.details {
  .other-t {
    margin-top: 30px;
    padding-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 3px solid #24A10F;
  }
}
</style>