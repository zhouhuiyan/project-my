/**
 * 后台登录页面的表单验证规则
 */
export const systemLogin = {
  user: [
    {
      required: true,
      message: "Please fill in the user name",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "Please fill in the password.",
      trigger: "blur"
    },
    {
      type: "string",
      min: 6,
      message: "The password length cannot be less than 6 bits",
      trigger: "blur"
    }
  ]
};
