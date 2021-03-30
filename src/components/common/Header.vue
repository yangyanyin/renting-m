<template>
  <header class="clearfix">
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/image/logo-white.png" alt="新加坡看房网" />
      </router-link>
    </div>
    <div class="side-menu" :class="{on: showNavPopup}" @click="sideMenuClick">
      <span></span>
      <span></span>
    </div>

    <div class="nav-popup" v-if="showNavPopup">
      <ul class="nav-menu">
        <li v-for="(item, key) in navDate" :key="key">
          <router-link :to="item.url" @click.native="navItemClick">
            {{item.name}}
          </router-link>
        </li>
      </ul>
      <div class="hotline">
        <i>客服热线</i>
        +65 88 139 139
      </div>
      <p>© 2021 新加坡看公寓网 All Rights Reserved.</p>
    </div>
  </header>
</template>
<script>
import navDate from '../../config/nav'
import { ModalHelper } from '../../config/base'
export default {
  data () {
    return {
      navDate: navDate,
      showNavPopup: false
    }
  },
  methods: {
    sideMenuClick () {
      this.showNavPopup = !this.showNavPopup
      if (this.showNavPopup) {
        ModalHelper.afterOpen()
      } else {
        ModalHelper.beforeClose()
      }
    },
    navItemClick () {
      this.showNavPopup = false
      ModalHelper.beforeClose()
    }
  },
  
}
</script>
<style scoped lang="less">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9991;
  height: 50px;
  width: 100%;
  max-width: 767px;
  background: #24A10F;
  .logo {
    margin: 12px 0 0 15px;
    width: 100px;
  }
  .side-menu {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 38px;
    height: 30px;
    padding: 10px;
    &.on {
      span {
        position: absolute;
        &:first-child {
          left: 9px;
          top: 14px;
          transform: rotate(45deg);
        }
        &:last-child {
          left: 9px;
          top: 8px;
          transform: rotate(-45deg);
        }
      }
    }
    span {
      display: block;
      width: 18px;
      height: 2px;
      margin-top: 6px;
      background: #fff;
      transition: .3s;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
.nav-popup {
  position: fixed;
  left: 0;
  top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  z-index: 999;
  background: #1C1C1C;
  .nav-menu {
    padding: 20px 35px;
    li {
      padding: 20px 0 13px;
      border-bottom: 1px solid #464646;
    }
    a {
      display: block;
      position: relative;
      color: #fff;
      &:after {
        content: '';
        position: absolute;
        top: 6px;
        right: 0;
        width: 6px;
        height: 6px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        border-radius: 2px;
        transform: rotate(45deg);
      }
    }
  }
  .hotline {
    position: absolute;
    left: 0;
    bottom: 55px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    i {
      font-size: 12px;
      font-weight: normal;
    }
  }
  p {
    position: absolute;
    bottom: 25px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #C9C9C9;
  }
}
</style>