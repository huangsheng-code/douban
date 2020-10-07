<template>
  <div class="newslistWrap">
    <div class="left">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
      <p class="author">作者：<span>{{author}}</span></p>
    </div>
    <div class="right">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "title", "content", "author"],
};
</script>

<style lang='less'>
.newslistWrap {
  padding: 0.2rem 0.2rem;
  text-align: left;
  display: flex;
  .left {
    flex: 3;
    overflow: hidden;
  }
  .right {
    flex: 1;
  }
  h1 {
    font-size: 0.26rem;
    font-weight: normal;
    line-height: 0.4rem;
  }
  p {
    font-size: 0.24rem;
    color: #666;
    line-height: 0.4rem;
  }
  p.author{
      margin-top: 0.02rem;
  }
  height: 2rem;
  img {
    width: 100%;
  }
}
</style>