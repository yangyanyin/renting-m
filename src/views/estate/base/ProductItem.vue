<template>
  <div class="item">
    <router-link :to="`/estate/${type}/${item._id}`" class="a-img">
      <rentImg class="img-object" :url="item.image" :alt="item.title" />
    </router-link>
    <router-link :to="`/estate/${type}/${item._id}`" tag="strong">{{item.title}}</router-link>
    <p>{{item.addr}}</p>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    },
    type: String
  }
}
</script>
<style lang="less" scoped>
.item {
  margin-bottom: 25px;
  text-align: center;
  .a-img {
    display: block;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;
  }
  strong {
    display: block;
    font-size: 16px;
    padding: 15px 0 5px;
  }
  p {
    font-size: 12px;
    color: #7C7C7C;
  }
}
</style>