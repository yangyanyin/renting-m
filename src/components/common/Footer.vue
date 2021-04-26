<template>
  <footer>
    <template v-if="isHome">
      <MessagePlate />
      <div class="footer-content">
        <p>新加坡看公寓网是新加坡最全的中文类房产新楼盘信息网，每日更新汇聚全岛最实时的房产信息，开发商直接销售团队，金牌团队专注服务中国客户，服务数百精英满意置业新加坡，是海外华人在新置业的必看网站。</p>
        <!-- <ul>
          <li><img src="../../assets/image/whats-icon.png"></li>
          <li><img src="../../assets/image/weibo-icon.png"></li>
          <li><img src="../../assets/image/fb-icon.png"></li>
          <li><img src="../../assets/image/in-icon.png"></li>
          <li><img src="../../assets/image/wechat-icon.png"></li>
        </ul> -->
        <div class="ewm">
          <span>
            <i><img src="../../assets/image/wx2.png" alt="扫码关注公众号" /></i>
            扫码关注公众号
          </span>
          <span>
            <i><img src="../../assets/image/wx1.png" alt="扫码关注公众号" /></i>
            新加坡吴洲房产
          </span>
        </div>
        <div class="hotline">
          <i>服务热线</i> +65 88 139 139
        </div>
        <span class="copyright">© 2021 新加坡看公寓网 All Rights Reserved.</span>
      </div>
    </template>
    <template v-else>
      <div class="other-hotline">
        <i>服务热线</i> +65 88 139 139
      </div>
      <span class="other-copyright">© 2021 新加坡看公寓网 All Rights Reserved.</span>
    </template> 
    <ReturnTop />
  </footer>
</template>
<script>
import MessagePlate from '../base/MessagePlate'
import ReturnTop from '../../components/common/ReturnTop'
export default {
  components: {
    MessagePlate,
    ReturnTop
  },
  computed: {
    isHome () {
      return this.$route.name === 'home'
    }
  }
}
</script>
<style lang="less" scoped>
.footer-content {
  padding: 40px 50px 20px;
  text-align: center;
  color: #7C7C7C;
  background: #1C1C1C;
  p {
    font-size: 12px;
    line-height: 22px;
  }
  .hotline {
    margin-top: 30px;
    font-size: 17px;
    color: #F7B964;
    font-weight: bold;
    i {
      display: inline-block;
      position: relative;
      top: -1px;
      margin-right: 5px;
      font-size: 14px;
      font-weight: normal;
      opacity: .7;
    }
  }
  ul {
    display: block;
    padding: 35px 0;
    li {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0 14px;
      background: #8c8c8c;
      border-radius: 100%;
    }
  }
  .copyright {
    display: block;
    margin: 20px -50px 0;
    padding-top: 20px;
    border-top: 1px solid #7C7C7C;
    font-size: 12px;
    color: #7C7C7C;
  }
  .ewm {
    span {
      display: inline-block;
      margin: 0 18px;
      text-align: center;
      font-size: 12px;
      i {
        display: block;
        width:  90px;
        margin-bottom: 10px;
        border: 5px solid #333;
        border-radius: 8px;
      }
    }
  }
}

.other-hotline {
  padding: 40px 0 30px;
  text-align: center;
  color: #24A10F;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #F5F5F5;
  i {
    font-size: 14px;
    color: #1C1C1C;
    font-weight: normal;
  }
}
.other-copyright {
  display: block;
  padding: 18px 0;
  color: #C9C9C9;
  text-align: center;
  font-size: 12px;
}

</style>