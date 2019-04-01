<template>
  <div>
    <Card class="card">
      前台的登录
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
            <Button type="primary" @click="login('form')">Signin</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
import { systemLogin } from "@/utils/rules.js";
export default {
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rule: systemLogin
    };
  },
  methods: {
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("验证通过");
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
  height: 180px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -170px;
  margin-top: -90px;
}
.formWidth {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>

