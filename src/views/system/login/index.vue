<template>
  <div>
    <Card class="card">
      后台的登录
      <div style="text-align:center">
        <Form ref="form" :model="form" :rules="rule">
          <FormItem class="formWidth" prop="user">
            <Input type="text" v-model="form.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem class="formWidth" prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="login('form')" style="margin-right:10px;">登录</Button>
            <Button type="primary" @click="$router.push('/')">返回</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
import { systemLogin } from "@/utils/rules.js";
import { slogin } from "@/utils/api.js";

export default {
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rule: systemLogin,
      userexist: false
    };
  },
  methods: {
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          slogin({ account: this.form.user }).then(res => {
            if (res.data.datalist.length != 0) {
              this.$Message.success("验证通过");
              sessionStorage.setItem("token", "ceshiyixiazi");
              this.$router.push("/system/users/list");
            } else {
              this.$Message.success("用户不存在");
            }
          });
        } else {
          this.$Message.error("验证不通过");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.card {
  width: 340px;
  // height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -170px;
  margin-top: -100px;
}
.formWidth {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>

