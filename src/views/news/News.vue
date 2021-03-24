<template>
  <div class="news">
    <div class="nav-menu">
      <router-link v-for="(item, k) in newsMenu" :to="item.url" :key="k">
        <i>{{ item.name }}</i>
      </router-link>
    </div>
    <Loading v-if="!newsList" />
    <Nothing text="没有新闻！" v-if="newsList.length === 0" />
    <template v-if="newsList.length > 0">
      <NewsBanner :newsBanner="bannerNewsList" />
      <div class="list">
        <h3>{{ newsId.name }}</h3>
        <NewsItem v-for="(item, k) in newsList" :item="item" :key="k" />
      </div>
      <DetailsRecommend />
    </template>
  </div>
</template>
<script>
import DetailsRecommend from '../../components/details/DetailsRecommend'
import NewsBanner from './base/NewsBanner'
import NewsItem from './base/NewsItem'
import Loading from '../../components/base/Loading'
import Nothing from '../../components/base/Nothing'

export default {
  name: 'news',
  components: {
    DetailsRecommend,
    NewsBanner,
    NewsItem,
    Loading,
    Nothing
  },
  data () {
    return {
      newsMenu: [
        {
          name: '买房必看',
          url: '/n/must-see',
          id: 1
        },
        {
          name: '产权交易',
          url: '/n/property',
          id: 3
        },
        {
          name: '常见问题',
          url: '/n/faq',
          id: 4
        },
        {
          name: '购房指南',
          url: '/n/guide',
          id: 5
        },
      ],
      newsList: false,
      bannerNewsList: []
    }
  },
  computed: {
    newsId () {
      const id = {
        'must-see': {
          id: 1,
          name: '买房必看'
        },
        'property': {
          id: 3,
          name: '产权交易'
        },
        'faq': {
          id: 4,
          name: '常见问题'
        },
        'guide': {
          id: 5,
          name: '购房指南'
        }
      }
      return id[this.$route.params.name] || {}
    }
  },
  mounted () {
    const params = {
      category_id: this.newsId.id
    }
    this.$httpApi.newsListApi(params).then(res => {
      if (res.code === 200) {
        if (this.bannerNewsList.length === 0) {
          this.bannerNewsList = res.data.news_list.slice(0, 4)
        }
        this.newsList = res.data.news_list
      }
    })
  }
}
</script>
<style scoped lang="less">
.news {
  padding: 0 10px 15px;
  .nav-menu {
    margin: 0 -10px 15px;
    border-bottom: 1px solid #f5f5f5;
    a {
      display: inline-block;
      width: 25%;
      padding: 15px 0;
      text-align: center;
      i {
        font-weight: bold;
        padding-bottom: 14px;
        border-bottom: 3px solid #fff;
      }
      &.router-link-active {
        color: #24A10F;
        i {
          border-color: #24A10F;
        }
      }
    }
  }
  .list {
    h3 {
      margin-top: 15px;
      padding: 0 15px;
      font-weight: bold;
      border-top: 3px solid #24A10F;
      line-height: 40px;
      background: #F5F5F5;
    }
  }
}
</style>