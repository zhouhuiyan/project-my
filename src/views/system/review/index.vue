<template>
  <Wrapper>
    <div>评论管理
      <span v-if="$route.path.match('/system/review/view')">&gt;查看评论</span>
    </div>
    <router-view></router-view>

  </Wrapper>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>

</style>
