<template>
  <div class="formbox">
    <h1>用户注册</h1>
    <Form ref="formItem" :rules="rule" :model="formItem" :label-width="100">
      <FormItem label="用户名：" prop="account">
        <Input v-model="formItem.account" placeholder="输入用户名"/>
      </FormItem>
      <FormItem prop label="昵称：">
        <Input v-model="formItem.nickname" placeholder="输入昵称"/>
      </FormItem>
      <FormItem prop="password" label="密码：">
        <Input type="password" v-model="formItem.password"/>
      </FormItem>
      <FormItem prop="gender" label="性别：">
        <Col span="6">
          <RadioGroup v-model="formItem.gender">
            <Radio label="0">女</Radio>
            <Radio label="1">男</Radio>
          </RadioGroup>
        </Col>
      </FormItem>
      <FormItem prop="introduce" label="个人简介：">
        <Input
          v-model="formItem.introduce"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="介绍一下自己吧！"
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="add()">注册</Button>
        <Button style="margin-left: 8px" @click="$router.push('/')">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { systemAddUser } from "@/utils/rules.js";
import { reg, checkExist } from "@/utils/api.js";
export default {
  data() {
    return {
      rule: systemAddUser,
      formItem: {
        account: "",
        nickname: "",
        password: "",
        gender: "0",
        birthday: "",
        introduce: "",
        role_id: 0
      }
    };
  },
  methods: {
    add() {
      this.$refs["formItem"].validate(valid => {
        if (valid) {
          checkExist({ account: this.formItem.account }).then(res => {
            if (res.data.datalist.length == 0) {
              reg(this.formItem).then(res => {
                if (res.data.datalist) {
                  this.$Message.success("注册成功,请登录");
                  this.$router.push("/login");
                } else {
                  this.$Message.success("注册失败");
                }
              });
            } else {
              this.$Message.success("用户已存在");
            }
          });
        } else {
          this.$Message.success("验证不通过");
        }
      });
    },
    exist() {}
  },
  created() {
    this.exist();
  }
};
</script>

<style lang="less" scoped>
.formbox {
  width: 360px;
  margin: 30px auto 10px;
}
</style>
