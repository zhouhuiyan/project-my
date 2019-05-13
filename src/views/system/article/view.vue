<template>
  <div style="text-align:left;">
    <Button style="margin-left: 8px" @click="$router.push('/system/article/list')">返回</Button>

    <Form  class="formbox" :model="formItem" :label-width="100">
      <FormItem label="文章标题：">
        {{datalist.title}}
      </FormItem>
      <FormItem  label="分类选择：">
        {{datalist.typename}}
      </FormItem>
      <FormItem label="作者：">
        {{datalist.author}}
      </FormItem>
      <FormItem label="文章简介：">
        {{datalist.dest}}
      </FormItem>
      <FormItem label="文章内容：" >
        {{datalist.content}}
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { getOneArt } from "@/utils/api";
export default {
  data() {
    return {
      datalist:{},
    };
  },
  computed: {},
  methods: {
    getlist() {
      var params = {
        id:this.$route.query.id,
      };
      getOneArt(params).then(res => {
        console.log("文章查看列表view：", res);
        this.datalist = res.data.datalist[0];
      });
    },
  },
  created() {
    this.getlist();
  }
};
</script>

<style lang="less" scoped>
.formbox {
  width: 400px;
  margin: 0 auto;
}
</style>
