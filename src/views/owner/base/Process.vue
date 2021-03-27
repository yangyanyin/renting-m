<template>
  <div class="process">
    <h3><i>发布房源全流程</i></h3>
    <ul>
      <li>
        <img src="../../../assets/image/process-icon1.png" alt="发布房源" />
        <div>
          <span>发布房源</span>
          线上免费发布房源
        </div>
      </li>
      <li>
        <img src="../../../assets/image/process-icon2.png" alt="核对房源" />
        <div>
          <span>核对房源</span>
          专业经纪人核对房源
        </div>
      </li>
      <li>
        <img src="../../../assets/image/process-icon3.png" alt="多元销售" />
        <div>
          <span>多元销售</span>
          线上线下多方渠道同步推广
        </div>
      </li>
      <li>
        <img src="../../../assets/image/process-icon4.png" alt="签约出售" />
        <div>
          <span>签约出售</span>
          签约过户全程专业服务
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="less">
.process {
  h3 {
    position: relative;
    text-align: center;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 100%;
      height: 1px;
      background: #C9C9C9;
    }
    i {
      display: inline-block;
      position: relative;
      z-index: 1;
      font-weight: bold;
      padding: 0 25px;
      background: #fff;
    }
  }
  ul {
    padding-top: 20px;
    li {
      display: block;
      position: relative;
      margin-bottom: 10px;
      padding: 3px 13px;
      color: #797979;
      font-size: 13px;
      border-radius: 5px;
      background: #F5F5F5;
      div {
        position: absolute;
        left: 90px;
        top: 50%;
        transform: translateY(-50%);
      }
      span {
        display: block;
        padding-bottom: 5px;
        color: #1C1C1C;
        font-weight: bold;
      }
      img {
        width: 50px;
      }
    }
    
  }
}
</style>