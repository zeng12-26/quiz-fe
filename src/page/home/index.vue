<template>
  <div class="home-page-container">
      我是首页
       <br/>
      <div @click="goToDetailPage" class="next-page">点我跳到详情页</div>
       <br/>
      <div @click="goToResultPage" class="next-page">点我跳到结果页</div>
  </div>
</template>

<script>
import Vue from 'vue'


export default {
  name: 'home-page',
  data() {
    return {}
    },
 methods:{
     goToDetailPage() {
        this.$router.push("/detail")
    },
    goToResultPage() {
        this.$router.push("/result")
    }
    }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
