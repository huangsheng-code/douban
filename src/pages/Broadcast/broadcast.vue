<template>
  <div class="Wrap">
    <Header>
      <template #title>
        <p>书影音</p>
      </template>
      <template #lIMg>
        <img
          src="../../assets/images/ic_status_search_user.png"
          alt=""
          class="leftImg"
        />
      </template>
      <template #rImg>
        <img
          src="../../assets/images/ic_chat_green.png"
          alt=""
          class="rightImg"
        />
      </template>
    </Header>
    <nav class="nav">
      <span :class="{ active: currID == 0 }" @click="currID = 0"
        ><router-link to="/broadcast/film">电影</router-link></span
      >
      <span :class="{ active: currID == 1 }" @click="currID = 1"
        ><router-link to="/broadcast/read">读书</router-link></span
      >
      <span :class="{ active: currID == 2 }" @click="currID = 2"
        ><router-link to="/broadcast/tv">电视</router-link></span
      >
      <span :class="{ active: currID == 3 }" @click="currID = 3"
        ><router-link to="/broadcast/city">同城</router-link></span
      >
      <span :class="{ active: currID == 4 }" @click="currID = 4"
        ><router-link to="/broadcast/music">音乐</router-link></span
      >
    </nav>
	<router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  components: { Header },
  data() {
    return {
      currID: 0,
    };
  },
};
</script>

<style lang="less">
.nav {
  margin-top: 0.8rem;
  height: 0.64rem;
  line-height: 0.64rem;
  display: flex;
  border-bottom: 1px solid #ddd;
  span {
    flex: 1;
    a {
      text-decoration: none;
      color: #9b9b9b;
      font-size: 0.28rem;
    }
  }
  span.active {
    background-color: #07d614;
    a {
      color: #fff;
    }
  }
}
</style>