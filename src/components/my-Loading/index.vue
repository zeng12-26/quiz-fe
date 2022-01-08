<template>
  <div class="loading-container">
    <van-loading size="24px" type="spinner">加载中...</van-loading>
  </div>
</template>

<script>
export default {
  name: 'my-loading',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.loading-container {
  text-align: center;
  margin-top: 48%;
}
</style>
