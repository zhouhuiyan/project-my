<template>
  <div>
    <Card class="card">
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
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
          </FormItem>
        </Form>
      </div>
    </Card>
  </div>
</template>

<script>
import {systemLogin} from '@/utils/rules.js';
export default {
  data() {
    return {
      form: {
        user: "",
        password: ""
      },
      rule: systemLogin,
      // rule: {
      //   user: [
      //     {
      //       required: true,
      //       message: "Please fill in the user name",
      //       trigger: "blur"
      //     }
      //   ],
      //   password: [
      //     {
      //       required: true,
      //       message: "Please fill in the password.",
      //       trigger: "blur"
      //     },
      //     {
      //       type: "string",
      //       min: 6,
      //       message: "The password length cannot be less than 6 bits",
      //       trigger: "blur"
      //     }
      //   ]
      // }
    };
  }
};
</script>

<style lang="less" scoped>
.card{
  width:340px;
  height:180px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-170px;
  margin-top:-90px;
}
.formWidth {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>

