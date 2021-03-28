<template>
  <div class="introduction">
    <h3>
      <img class="img-object" :src="introduction.image" :alt="introduction.title" />
      <i>{{ introduction.title }}</i>
    </h3>
    <p>{{ introduction.des }}</p>
  </div>
</template>
<script>
export default {
  props: {
    introduction: Object
  }
}
</script>
<style lang="less" scoped>
.introduction {
  padding: 15px;
  text-align: center;
  h3 {
    position: relative;
    height: 120px;
    i {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      font-size: 16px;
      color: #fff;
      transform: translateY(-50%);
    }
  }
  p {
    margin-top: 20px;
    line-height: 26px;
  }
}
</style>