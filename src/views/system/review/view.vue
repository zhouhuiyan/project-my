<template>
  <div style="text-align:left;">
    <Button style="margin-left: 8px" @click="$router.push('/system/review/list')">返回</Button>

    <div class="formbox">
      <Form  :label-width="80">
        <FormItem label="评论ID：">
          {{this.datalist.id}}
        </FormItem>
        <FormItem label="评论人：">
          {{this.datalist.critics}}
        </FormItem>
        <FormItem label="评论文章：">
          {{this.datalist.title}}
        </FormItem>
        <FormItem label="评论内容：">
          {{this.datalist.content}}
        </FormItem>
        <FormItem label="评论时间：">
          {{$dayjs(this.datalist.createtime*1000).format('YYYY-MM-DD HH:mm:ss')}}
        </FormItem>
        <FormItem label="评论状态：">
          {{this.datalist.state ==0 ? '正常' : '封禁' }}
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { getOneReview } from "@/utils/api.js";
export default {
  data() {
    return {
      datalist:{},
    };
  },
  methods: {
    getlist() {
      var params = {
        id:this.$route.query.id,
      };
      getOneReview(params).then(res => {
        console.log("评论列表view：", res);
        this.datalist = res.data.datalist[0];
      });
    }
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
