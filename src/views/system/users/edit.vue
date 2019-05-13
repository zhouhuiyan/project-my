<template>
  <div class="formbox">
    <Form ref="formItem" :rules="rule" :model="formItem" :label-width="100">
      <FormItem label="用户名：" prop="account">
        <Input v-model="formItem.account" placeholder="输入用户名"/>
      </FormItem>
      <FormItem label="昵称：" prop="nickname">
        <Input v-model="formItem.nickname" placeholder="输入昵称"/>
      </FormItem>
      <FormItem label="密码：" prop="password">
        <Input type="password" v-model="formItem.password"/>
      </FormItem>
      <FormItem label="用户角色：">
        <Col span="10">
          <Select v-model="formItem.role_id">
            <Option :value="1">超级管理员</Option>
            <Option :value="2">注册用户</Option>
          </Select>
        </Col>
      </FormItem>
      <FormItem label="性别：">
        <Col span="6">
          <RadioGroup v-model="formItem.gender">
            <Radio :label="0">女</Radio>
            <Radio :label="1">男</Radio>
          </RadioGroup>
        </Col>
      </FormItem>
      <FormItem label="个人简介：">
        <Input
          v-model="formItem.introduce"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="介绍一下自己吧！"
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="edit()">提交</Button>
        <Button style="margin-left: 8px" @click="$router.push('/system/users/list')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { systemAddUser } from "@/utils/rules.js";
import { editUser, getOneUser } from "@/utils/api.js";
export default {
  data() {
    return {
      rule: systemAddUser,
      formItem: {
        account: "",
        nickname: "",
        password: "",
        repwd: "",
        gender: "0",
        birthday: "",
        introduce: "",
        role_id: 0,
        id:this.$route.query.id,
      }
    };
  },
  methods: {
    edit() {
      this.$refs["formItem"].validate(valid => {
        if (valid) {
          editUser(this.formItem).then(res => {
            if (res.data.datalist) {
              this.$Message.success("请求成功");
              this.$router.push("/system/users/list");
            } else {
              this.$Message.success("请求失败");
            }
          });
        }else{
              this.$Message.success("验证不通过");
        }
      });
    },
    getlist() {
      var params = {
        id: this.$route.query.id
      };
      getOneUser(params).then(res => {
        this.formItem.account = res.data.datalist[0].account;
        this.formItem.password = res.data.datalist[0].password;
        this.formItem.gender = res.data.datalist[0].gender;
        this.formItem.introduce = res.data.datalist[0].introduce;
        this.formItem.role_id = res.data.datalist[0].role_id;
        this.formItem.nickname = res.data.datalist[0].nickname;
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
  width: 360px;
  margin: 30px auto 10px;
}
</style>
