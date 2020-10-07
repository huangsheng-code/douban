<template>
  <div class="film-ing-item">
    <div class="imgWrap">
      <img :src='imgsrc' alt="" />
    </div>
    <p class="name">{{title}}</p>
    <p class="score">评分:<span>{{rate}}</span></p>
    <div class="rate">
        <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
    >
    </el-rate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:2.1,
    };
  },
  props:['title','imgsrc','rate','subtitle']
};
</script>

<style lang='less'>
.film-ing-item {
  width: 2.4rem;
  height: 100%;
  margin-right: 0.16rem;
  display: inline-block;
  overflow: hidden;
  .imgWrap {
    img {
      width: 100%;
      height: 3.2rem;
    }
  }
  p.name {
    color: #393939;
    font-size: 0.27rem;
    line-height: 0.42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p.score {
    color: #9e9e9e;
    font-size: 0.26rem;
    margin-top: 0.04rem;
  }
}
</style>