<template>
  <div class="details">
    <Loading v-if="!newsData.title" />
    <template v-else>
      <div class="title">
        <h3>{{ newsData.title }}</h3>
        <p>发布时间：{{ newsData.created_at.split(' ')[0] }}    阅读次数：{{ newsData.read_count }}次</p>
      </div>
      <div class="new-html" v-html="newsContent"></div>
      <div class="context">
        <p v-if="prevNews.title">上一篇：<router-link :to="`/n/${newsType}/${prevNews.id}`">{{prevNews.title}}</router-link></p>
        <p v-if="nextNews.title">下一篇：<router-link :to="`/n/${newsType}/${nextNews.id}`">{{nextNews.title}}</router-link></p>
      </div>
      <DetailsRecommend :proTitle="newsData.title" />
    </template>
  </div>
</template>
<script>
import DetailsRecommend from '../../components/details/DetailsRecommend'
import Loading from '../../components/base/Loading'

export default {
  components: {
    DetailsRecommend,
    Loading
  },
  data () {
    return {
      newsData: {},
      prevNews: {},
      nextNews: {},
      newsContent: '',
      recommendNews: [],
      newsType: this.$route.params.name
    }
  },
  mounted () {
    const params = {
      id: this.$route.params.id
    }
    this.$httpApi.newsDetailsApi(params).then(res => {
      if (res.code === 200) {
        this.newsData = res.data.news
        this.newsContent = res.data.news.content.replace(/\/images\/default/g, 'https://cms.kangongyu.cn/images/default/')
        this.prevNews = res.data.prev_news || {}
        this.nextNews = res.data.next_news || {}
      }
    })
    // this.$httpApi.recommendNewsApi().then(res => {
    //   if (res.code === 200) {
    //     this.recommendNews = res.data.recommend_news_list
    //   }
    // })
  }
}
</script>
<style lang="less" scoped>
.details {
  padding: 10px;
  .title {
    padding: 20px 0;
    border-bottom: 1px solid #f7f7f7;
    h3 {
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 15px;
    }
    p {
      font-size: 12px;
      color: #7C7C7C;
    }
  }
  .new-html {
    padding: 20px 0;
    img {
      max-width: 100%;
    }
  }
  .context {
    margin-top: 20px;
    padding: 8px 15px;
    border-left: 3px solid #24A10F;
    background: #F5F5F5;
    p {
      padding: 3px 0;
      font-size: 12px;
      color: #24A10F;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>