<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
export default {
  props:{
    defaultMsg:{
      type:String
    },
    config:{
      type:Object
    }
  },
  data(){
    return{
      editor:null,
    }
  }
}
</script>

<style lang="less" scoped>

</style>
