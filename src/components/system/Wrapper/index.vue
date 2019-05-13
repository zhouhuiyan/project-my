<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  margin-top:30px;
  background: #fff;
  border-radius: 5px;
  padding: 30px 24px 24px;
  // box-shadow: 10px 0 10px -10px #efefef;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
  min-height: calc(100vh - 160px);
}
</style>
