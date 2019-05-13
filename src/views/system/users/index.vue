<template>
    <Wrapper>
    
    <div>用户管理
      <span v-if="$route.path.match('/system/users/view')">&gt;用户查看</span>
      <span v-if="$route.path.match('/system/users/add')">&gt;用户添加</span>
      <span v-if="$route.path.match('/system/users/edit')">&gt;用户编辑</span>
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
