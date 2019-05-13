<template>
  <div style="text-align:left;">
    <Button style="margin-left: 8px" @click="$router.push('/system/type/list')">返回</Button>

    <Form ref="formItem" :model="formItem" :rules="rule" :label-width="100">
      <FormItem class="item" prop="name" label="分类名称：">
        {{formItem.name}}
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { systemAddType } from "@/utils/rules.js";
import { getOneType} from "@/utils/api";
export default {
 
  data() {
    return {
      rule: systemAddType,
      formItem: {
        name: "",
      },
    };
  },
  computed: {},
  methods: {
     getList() {
      var params = {
        id:this.$route.query.id,
      };
      getOneType(params).then(res => {
        console.log(res);
        this.formItem.name = res.data.datalist[0].name;
      });
    },
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
.formbox {
  // width: 400px;
  margin: 0 auto;
  padding-top: 20px;
  .item {
    width: 400px;
    margin: 0 auto 24px;
    text-align: left;
  }
  .editorwrap {
    padding: 0 5%;
    .ivu-form-item-label {
      position: relative;
      top: 0px;
    }
  }
}
</style>
