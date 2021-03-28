<template>
  <div class="details">
    <Loading v-if="!proTitle" />
    <template v-else>
      <div class="content">
        <DetailsViewImg :imagesArr="imagesAll" :vrLink="vrLink" />
        <div class="title">
          <h3>{{ proTitle }}</h3>
          <p>{{ proAddress }}</p>
        </div>
        <DetailsInfoBase :infoBase="infoBase" />
        <DetalsIntroduction :introduction="introduction" title="项目介绍" />
        <Conveniences />
        <Consultant />
      </div>
      <BaiduMap class="content mt80" :addr="infoBase.addr" />
    </template>
  </div>
</template>
<script>
import DetailsViewImg from '../../components/details/DetailsViewImg'
import DetalsIntroduction from '../../components/details/DetalsIntroduction'
import Conveniences from '../../components/details/Conveniences'
import DetailsInfoBase from './base/DetailsInfoBase'
import Consultant from '../../components/base/Consultant'
import Loading from '../../components/base/Loading'
import BaiduMap from '../../components/details/BaiduMap'

export default {
  components: {
    DetailsViewImg,
    DetalsIntroduction,
    Conveniences,
    Consultant,
    DetailsInfoBase,
    Loading,
    BaiduMap
  },
  data () {
    return {
      proTitle: '',
      proAddress: '',
      imagesAll: [],
      infoBase: {},
      introduction: '',
      vrLink: ''
    }
  },
  computed: {
    breadcrumb () {
      const routes = {
        'building': {
          url: '/estate/building',
          name: '分层地契商业办公大楼',
        },
        'shophouse': {
          url: '/estate/shophouse',
          name: '保留性店屋'
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
      id: this.$route.params.id
    }
    this.$httpApi.estateDetailsApi(params).then(res => {
      if (res.code === 200) {
        const detailInfo = res.data
        this.proTitle = detailInfo.title
        this.proAddress = detailInfo.addr
        this.imagesAll = detailInfo.images
        this.introduction = detailInfo.description
        this.vrLink = detailInfo.vr_link
        this.infoBase = {
          floor: detailInfo.floor,
          deed: detailInfo.deed,
          height: detailInfo.height,
          build_at: detailInfo.build_at,
          type: detailInfo.house_type,
          addr: detailInfo.addr,
          traffic: detailInfo.traffic,
          price: detailInfo.price,
          rent_price: detailInfo.rent_price
        }
      }
    })
  }
}
</script>
<style lang="less" scoped>
.details {
  padding: 0 15px;
  .title {
    padding: 15px 0 20px;
    text-align: center;
    border-bottom: 1px solid #C9C9C9;
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    p {
      margin-top: 10px;
      color: #C9C9C9;
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
    border-bottom: 3px solid #24A10F;
  }
}
</style>