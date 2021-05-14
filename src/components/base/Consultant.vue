<template>
  <div class="consultant">
    <h3>联系顾问</h3>
    <div class="content">
      <img class="people" src="../../assets/image/consultant.png" alt="项目详情" />
      <strong>吴洲 / Peter Wu <span>金牌销售</span></strong>
      <p class="tel">+65 88 139 139</p>
      <p>任职于新交所上市企业，新加坡最大的国际性产业集团ERA担任高级营销董事，金牌房产经纪人</p>
      <ul>
        <li>
          <img src="../../assets/image/consultant-app.png" alt="">
          <em class="tel">
            + 65 88 139 139
          </em>
        </li>
        <li>
          <img src="../../assets/image/consultant-wx.png" alt="">
          <em class="wx">
            <img src="../../assets/image/wx1.png" alt="">
            <i>新加坡吴洲房产</i>
          </em>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.consultant {
  margin-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #C9C9C9;
  h3 {
    font-size: 18px;
    padding-bottom: 12px;
  }
  .content {
    position: relative;
    height: 100px;
    padding-left: 90px;
    .people {
      position: absolute;
      left: 0;
      top: 0;
      width: 75px;
      height: 100px;
    }
    strong {
      font-size: 14px;
      span {
        display: inline-block;
        margin-left: 15px;
        padding: 0 8px;
        line-height: 22px;
        background: #FDF5EA;
        border-radius: 2px;
        color: #F7B964;
        font-size: 12px;
        font-weight: normal;
      }
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
      line-height: 18px;
      &.tel {
        padding: 8px 0 11px;
        font-size: 18px;
        color: #BF3F3F;
      }
    }
    ul {
      position: absolute;
      right: 0;
      top: 0;
      li {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        border-radius: 100%;
        &:hover {
          em {
            display: block;
          }
        }
        em {
          display: none;
          position: absolute;
          z-index: 9;
          right: -5px;;
          top: 30px;
          width: 120px;
          padding: 5px 10px;
          background: #fff;
          color: #24A10F;
          box-shadow: 0 0 3px 0 #999;
          border-radius: 5px;
          &.tel {
            width: 140px;
            padding-left: 30px;
            background: #fff url('../../assets/image/consultant-app.png') no-repeat 10px center;
            background-size: 15px;
          }
          i {
            display: block;
            padding-bottom: 5px;
            font-size: 12px;
            color: #7C7C7C;
            text-align: center;
          }
          &:after {
            content: '';
            position: absolute;
            z-index: 1;
            top: -5px;
            right: 10px;
            width: 8px;
            height: 8px;
            background: #fff;
            border-top: 1px solid #cecece;
            border-left: 1px solid #cecece;
            transform: rotate(45deg);
          }
        }
      }
    }
  }
}
</style>