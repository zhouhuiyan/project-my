<template>
  <div class="formbox">
    <Form ref="formItem" :model="formItem" :rules="rule" :label-width="100">
      <FormItem class="item" prop="title" label="文章标题：">
        <Input v-model="formItem.title"/>
      </FormItem>
      <FormItem class="item" prop="type" label="分类选择：">
        <Select v-model="formItem.type">
          <Option v-for="(item,index) in typeData" :value="item.id" :key="index">{{item.name}}</Option>
        </Select>
      </FormItem>
      <FormItem class="item" prop="dest" label="文章简介：">
        <Input
          v-model="formItem.dest"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
        />
      </FormItem>
      <FormItem prop="content" label="文章内容：" class="item">
        <Input
          v-model="formItem.content"
          type="textarea"
          :autosize="{minRows: 4,maxRows: 7}"
        />
        <!-- <editor
          width="500px"
          :apiKey="'3jpkbdwd3uvuh25ual55scqc4po3of4you6whoby5dixddiq'"
          v-model="formItem.content"
        ></editor> -->
      </FormItem>

      <FormItem class="item">
        <Button type="primary" @click="edit('formItem')">提交</Button>
        <Button style="margin-left: 8px" @click="$router.push('/system/article/list')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { systemAddArt } from "@/utils/rules.js";
import { editArt, getTypeList,getOneArt } from "@/utils/api";
export default {
  data() {
    return {
      rule: systemAddArt,
      formItem: {
        title: "",
        type: null,
        content: "",
        author_id: 1,
        dest: "",
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
          editArt(this.formItem).then(res => {
            if (res.data.datalist) {
              this.$Message.success("请求成功");
              this.$router.push('/system/article/list')
            } else {
              this.$Message.error("请求失败");
            }
          });
        } else {
          this.$Message.error("验证不通过");
        }
      });
    },
    typeList() {
      getTypeList().then(res => {
        this.typeData = res.data.datalist;
      });
    },
    getList() {
      var params = {
        id:this.$route.query.id,
      };
      getOneArt(params).then(res => {
        console.log(res);
        this.formItem.title = res.data.datalist[0].title;
        this.formItem.type = res.data.datalist[0].type;
        this.formItem.content = res.data.datalist[0].content;
        this.formItem.author_id = res.data.datalist[0].author_id;
        this.formItem.dest = res.data.datalist[0].dest;
      });
    },
  },
  created() {
    this.typeList();
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
