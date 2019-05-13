<template>
  <Wrapper>
    
     <div>文章分类管理
      <span v-if="$route.path.match('/system/type/add')">&gt;添加分类</span>
      <span v-if="$route.path.match('/system/type/view')">&gt;查看分类</span>
      <span v-if="$route.path.match('/system/type/edit')">&gt;修改分类</span>
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
