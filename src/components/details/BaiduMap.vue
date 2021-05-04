<template>
  <div class="baidu-map">
    <h3>地理位置及周边配套</h3>
    
    <BaiduMap class="bm-view" 
      ak="zvCUylrKijIObDFg2VP01XFjYMWgmlMw"
      :zoom="19"
      :center="coordinateCenter"
      :scroll-wheel-zoom="true"
      :show="true"
      @ready="ready">
      <bm-info-window :position="coordinateCenter" :title="title" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
        <p v-text="infoWindow.contents"></p>
      </bm-info-window>
      <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
    </BaiduMap>
    <div class="map-tab" v-if="mapSurrounding.status > 0">
      <div class="tab">
        <span v-for="(item, t, k) in mapSurrounding.map" :class="{active: surroundingIndex === k}"
          :key="k" 
          @click="tabClick(k)">{{ t }}</span>
      </div>
      <div class="sc">
        <template v-for="(item, t, k) in mapSurrounding.map">
          <ul :key="k" v-if="surroundingIndex === k">
            <li v-for="(info, i) in item" :key="i" @click="mapClick(info.name)">
              <strong>{{ info.name }}</strong>
              <p>{{ info.desc }}</p>
            </li>
          </ul>
        </template>
      </div>
    </div> 
  </div>
</template>
<script>
import { BaiduMap, BmLocalSearch, BmInfoWindow } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmLocalSearch,
    BmInfoWindow
  },
  props: {
    coordinate: String,
    mapData: Object,
    title: String,
    addr: String
  },
  data () {
    return {
      keyword: '',
      infoWindow: {
        show: true,
        contents: '地址：' + this.addr
      },
      surroundingIndex: 0
    }
  },
  computed: {
    coordinateCenter () {
      return {
        lng: this.coordinate ? this.coordinate.split(',')[0] : '',
        lat: this.coordinate ? this.coordinate.split(',')[1] : ''
      }
    },
    mapSurrounding () {
      let data = {}
      let status = 0
      const mapData =  this.mapData
      for (let key in mapData) {
        if (mapData[key].length >0) {
          data[key] = mapData[key]
          status = 1
        }
      }
      return {
        status: status,
        map: data
      }
    }
  },
  methods: {
    ready ({BMap, map}) {
      console.log(BMap, map)
      map.addControl(new BMap.ScaleControl());
    },
    tabClick (index) {
      this.surroundingIndex = index
    },
    mapClick (name) {
      this.keyword = name
    },
    infoWindowClose () {
      this.infoWindow.show = false
    },
    infoWindowOpen () {
      this.infoWindow.show = true
    }
  }
}
</script>
<style lang="less">
.baidu-map {
  position: relative;
  margin: 40px -15px 0;
  .BMap_bubble_title {
    color: #cc5522;
    font: bold 14px/16px arial,sans-serif;
  }
  h3 {
    padding: 0 15px;
    font-size: 20px;
    padding-bottom: 20px;
  }
  .map-tab {
    padding: 10px;
    .tab {
      span {
        display: inline-block;
        position: relative;
        padding: 10px 15px;
        cursor: pointer;
        &.active {
          color: #427ff6;
          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -5px;
            width: 10px;
            height: 2px;
            background: #427ff6;
          }
        }
      }
    }
    ul {
      padding: 10px;
      font-weight: normal;
      li {
        position: relative;
        margin-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd;
        &:first-child {
          margin-top: 0;
        }
        strong {
          display: block;
          padding-right: 70px;
          font-weight: normal;
        }
        p {
          color: #d8d8d8;
          font-size: 12px;
        }
        i {
          position: absolute;
          right: 0;
          top: 0;
          color: #aaafb8;
          font-size: 12px;
        }
      }
    }
  }
}
.bm-view {
  width: 100%;
  height: 250px;
  > div {
    &:last-child {
      display: none;
    }
  }
  img {
    width: auto;
  }
}
</style>