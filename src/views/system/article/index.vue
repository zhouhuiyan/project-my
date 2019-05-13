<template>
  <Wrapper>
    
    <div>文章管理
      <span v-if="$route.path.match('/system/article/add')">&gt;添加文章</span>
      <span v-if="$route.path.match('/system/article/view')">&gt;查看文章</span>
      <span v-if="$route.path.match('/system/article/edit')">&gt;修改文章</span>
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
