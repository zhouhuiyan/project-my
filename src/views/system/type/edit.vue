<template>
  <div class="formbox">
    <Form ref="formItem" :model="formItem" :rules="rule" :label-width="100">
      <FormItem class="item" prop="name" label="分类名称：">
        <Input v-model="formItem.name"/>
      </FormItem>
      <FormItem class="item">
        <Button type="primary" @click="edit('formItem')">提交</Button>
        <Button style="margin-left: 8px" @click="$router.push('/system/type/list')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { systemAddType } from "@/utils/rules.js";
import { editType,getOneType } from "@/utils/api";
export default {
  data() {
    return {
      rule: systemAddType,
      formItem: {
        name: "",
        id:this.$route.query.id
      },
      typeData: []
    };
  },
  computed: {},
  methods: {
    edit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          editType(this.formItem).then(res => {
            if (res.data.datalist) {
              this.$Message.success("请求成功");
              this.$router.push('/system/type/list')
            } else {
              this.$Message.error("请求失败");
            }
          });
        } else {
          this.$Message.error("验证不通过");
        }
      });
    },
    getList() {
      var params = {
        id:this.$route.query.id,
      };
      getOneType(params).then(res => {
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
