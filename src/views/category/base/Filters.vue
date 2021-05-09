<template>
  <div class="filter">
    <div class="tips" v-if="showTips"><p>全岛各地段海量租赁房源，系统自动于每日上午9时采集、更新房源信息，故无法做到全部房源数据实时同步展示。如有需求，请联系我们专业的房产顾问，最快24小时内安排现场看房!</p></div>
    
    <div class="type">
      <span @click="typeClick('region')">地区</span>
      <span @click="typeClick('area')">面积</span>
      <span @click="typeClick('price')">价格</span>
      <span @click="typeClick('house')">户型</span>
    </div>
    <div class="down-list" v-if="typeTitle">
      <div class="bg" @click="typeClick('')"></div>
      <div class="content">
        <span :class="{active: filterClickItem[typeTitle].length <= 0}">全部</span> 
        <span
          v-for="(item, k) in filterData[typeTitle]" :key="k"
          :class="{active: filterClickItem[typeTitle] && filterClickItem[typeTitle].indexOf(item.id) >= 0}"
          @click="filterClick(typeTitle, item.id)"
          :data-id="item.id">
          {{ item.text }}
        </span>
        <div class="btn">
          <i @click="clearFilter"><img src="../../../assets/image/clear-filter-icon.png" alt="清除条件">清除条件</i>
          <button @click="confirmJumpLink">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeTitle: '',
      filterResult: {},
      filterLink: '',
      filterClickItem: {
        region: [],
        area: [],
        price: [],
        house: []
      }
    }
  },
  props: {
    category: String
  },
  computed: {
    showTips () {
      return this.$route.params.name === 'renting'
    },
    filterData () {
      const data = {
        'region': [
          {
            text: '东部',
            id: 'east'
          },
          {
            text: '西部',
            id: 'west'
          },
          {
            text: '市区',
            id: 'urban'
          },
          {
            text: '中部',
            id: 'middle'
          },
          {
            text: '南部',
            id: 'south'
          },
          {
            text: '北部',
            id: 'north'
          },
          {
            text: '东北部',
            id: 'east_north'
          },
          {
            text: '其他地区',
            id: 'other'
          }
        ],
        'price': [
          {
            text: '100万以下',
            id: '1'
          },
          {
            text: '100万-200万',
            id: '2'
          },
          {
            text: '200万-500万',
            id: '3'
          },
          {
            text: '500万以上',
            id: '4'
          }
        ],
        'area': [
          {
            text: '50㎡以下',
            id: '1'
          },
          {
            text: '50㎡-70㎡',
            id: '2'
          },
          {
            text: '70㎡-100㎡',
            id: '3'
          },
          {
            text: '100㎡-150㎡',
            id: '4'
          },
          {
            text: '150㎡以上',
            id: '5'
          }
        ],
        'house': [
          {
            text: '一卧室',
            id: '1'
          },
          {
            text: '一厅+书房',
            id: '6'
          },
          {
            text: '一室一厅',
            id: '2'
          },
          {
            text: '一室一厅+书房',
            id: '3'
          },
          {
            text: '两室一厅',
            id: '4'
          },
          {
            text: '两室一厅+书房',
            id: '5'
          },
          {
            text: '三室一厅',
            id: '10'
          },
          {
            text: '三室一厅+书房',
            id: '11'
          },
          {
            text: '四室一厅',
            id: '7'
          },
          {
            text: '四室一厅+书房',
            id: '8'
          },
          {
            text: '顶层复式楼',
            id: '9'
          }
        ]
      }
      if (this.category === '狮城租房') {
        data.price = [
          {
            text: '500-2000',
            id: '1'
          },
          {
            text: '2000-3000',
            id: '2'
          },
          {
            text: '3000-5000',
            id: '3'
          },
          {
            text: '5000-8000',
            id: '4'
          },
          {
            text: '8000以上',
            id: '5'
          }
        ]
        data.house = [
          {
            text: 'studio',
            id: '1'
          },
          {
            text: '1卧室',
            id: '2'
          },
          {
            text: '2卧室',
            id: '3'
          },
          {
            text: '3卧室',
            id: '4'
          },
          {
            text: '4卧室',
            id: '5'
          },
          {
            text: '5卧室',
            id: '6'
          },
          {
            text: '独栋洋房',
            id: '7'
          },
          {
            text: '半独栋洋房',
            id: '8'
          }
        ]
      }
      return data
    }
  },
  methods: {
    typeClick (type) {
      this.typeTitle = type
    },
    filterClick (type, id) {
      if (this.filterClickItem[type] && this.filterClickItem[type].indexOf(id) >= 0) {
        this.filterClickItem[type].splice(this.filterClickItem[type].indexOf(id), 1)
      } else {
        this.filterClickItem[type].push(id)
      }
    },
    confirmJumpLink () {
      let link = {}
      for (const item in this.filterClickItem) {
        link[item] = this.filterClickItem[item].join(',')
      }
      this.$router.push({
        query: link
      })
    },
    clearFilter () {
      this.filterClickItem = {
        region: [],
        area: [],
        price: [],
        house: []
      }
    }
  },
  mounted () {
    const query = this.$route.query
    if (query) {
      for (const item in query) {
        if (query[item].length > 0) {
          this.filterClickItem[item] = query[item].split(',')
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
.filter {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #F5F5F5;
  background: #fff;
  .type {
    span {
      display: inline-block;
      position: relative;
      width: 25%;
      padding: 10px 0;
      text-align: center;
      &:after {
        content: '';
        position: absolute;
        top: 18px;
        right: 15px;
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: transparent transparent#E2E2E2;
        transform: rotate(180deg);
      }
    }
  }
  .down-list {
    position: absolute;
    z-index: 9;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1000px;
      background: rgba(0, 0, 0, 0.6);
    }
    .content {
      position: relative;
      z-index: 9;
      height: 320px;
      background: #fff;
      padding: 0 5px;
      span {
        display: inline-block;
        width: calc(33.333% - 10px);
        height: 38px;
        margin: 10px 5px 0;
        line-height: 38px;
        font-size: 13px;
        text-align: center;
        border-radius: 5px;
        background: #F5F5F5;
        &.active {
          background: #24A10F;
          color: #fff;
        }
      }
      .btn {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70px;
        padding: 15px 10px;
        text-align: center;
        border-top: 1px solid #F5F5F5;
        i {
          display: inline-block;
          width: 30%;
          color: #7C7C7C;
          font-size: 13px;
          img {
            display: inline-block;
            position: relative;
            top: -1px;
            width: 20px;
            margin-right: 5px;
          }
        }
        button {
          display: inline-block;
          height: 40px;
          width: 65%;
          margin-left: 5%;
          background: #24A10F;
          color: #fff;
          border: 1px solid #C9C9C9;
          border-radius: 5px;
        }
      }
    }
  }
  .tips {
    text-align: center;
    margin-bottom: 60px;
    p {
      display: inline-block;
      position: relative;
      padding-left: 20px;
      font-size: 12px;
      color: #F7B964;
      &::after {
        content: '!';
        position: absolute;
        left: 0;
        top: 1px;
        width: 14px;
        height: 14px;
        border-radius: 14px;
        color: #fff;
        line-height: 14px;
        background: #F7B964;
      }
    }
  }
}
</style>