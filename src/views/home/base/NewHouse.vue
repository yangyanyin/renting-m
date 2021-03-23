<template>
  <div class="home-new-house">
    <Title title="新加坡最新房产资讯" />
    <router-link class="news-a" :to="'/n/d/' + item.id" v-for="(item, k) in newsList" :key="k">
      <img :src="item.img" :alt="item.title" />
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <span>{{ item.created_at ? item.created_at.split(' ')[0] : '' }} </span>
    </router-link>
    <router-link to="/n/s" class="view-all">查看全部</router-link>
  </div>
</template>
<script>
import Title from './Title'
export default {
  components: {
    Title
  },
  data () {
    return {
      newsList: []
    }
  },
  mounted () {
    const params = {
      page: 1,
      size: 1,
      category_id: 1
    }
    this.$httpApi.newsListApi(params).then(res => {
      if (res.code === 200) {
        this.newsList = res.data.news_list
      }
    })
  }
}
</script>
<style scoped lang="less">
.home-new-house {
  padding: 10px;
  .news-a {
    position: relative;
    display: block;
    height: 100px;
    img {
      float: left;
      width: 140px;
      height: 100px;
      margin-right: 13px;
    }
    h3 {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
      line-height: 18px;
      margin: 10px 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: no */
    }
    span {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      color: #7C7C7C;
    }
  }
  .view-all {
    position: relative;
    display: block;
    width: 120px;
    height: 40px;
    margin: 20px auto 15px;
    background: #FFFFFF;
    border: 1px solid #24A10F;
    color: #24A10F;
    border-radius: 5px;
    text-align: center;
    line-height: 38px;
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      right: 17px;
      width: 6px;
      height: 6px;
      border-top: 2px solid #24A10F;
      border-right: 2px solid #24A10F;
      border-radius: 2px;
      transform: rotate(45deg);
    }
  }
}
</style>