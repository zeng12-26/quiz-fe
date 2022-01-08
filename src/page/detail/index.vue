<template>
    <div class="detail-page-container">
        我是详情页
        <br/>
        <div @click="goToResultPage">跳到结果页</div>
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
    goToResultPage() {
        this.$router.push("/result")
    }
    }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
