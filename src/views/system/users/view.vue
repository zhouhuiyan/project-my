<template>
  <div style="text-align:left;">
    <Button style="margin-left: 8px" @click="$router.push('/system/users/list')">返回</Button>

    <div class="formbox">
      <Form  :label-width="80">
        <FormItem label="用户名：">
          {{this.datalist.account}}
        </FormItem>
        <FormItem label="昵称：">
          {{this.datalist.nickname}}
        </FormItem>
        <FormItem label="性别：">
          {{this.datalist.gender == 0 ? '女' : '男' }}
        </FormItem>
        <FormItem label="个人简介：">
          {{this.datalist.introduce}}
        </FormItem>
        <FormItem label="注册时间：">
          {{$dayjs(this.datalist.createtime*1000).format('YYYY-MM-DD HH:mm:ss')}}
        </FormItem>
        <FormItem label="账号状态：">
          {{this.datalist.status ==0 ? '正常' : '封禁' }}
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { getOneUser } from "@/utils/api.js";
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
      getOneUser(params).then(res => {
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
