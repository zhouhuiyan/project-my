/**
 * 后台登录页面的表单验证规则
 * @author zhy
 */
export const systemLogin = {
  user: [
    {
      required: true,
      message: "Please fill in the user name",
      trigger: "blur"
    },
    {
      type: "string",
      max: 50,
      message: "The username length cannot be over 50 bits",
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
}
/**
 * 后台页面的添加文章的表单验证规则
 * @author zhy
 */
export const systemAddArt = {
  title: [
    {
      required: true,
      message: "文章标题不能为空",
      trigger: "blur"
    },
    {
      type: "string",
      max: 100,
      message: "文章标题不能超过100个字符",
      trigger: "blur"
    }
  ],
  type: [
    {
      required: true,
      message: "文章类型不能为空",
      trigger: "change",
      type: "number",

    },
  ],
  content: [
    {
      required: true,
      message: "文章内容不能为空",
      trigger: "blur"
    }
  ],
}

export const systemAddType = {
  name: [
    {
      required: true,
      message: "分类名不能为空",
      trigger: "blur"
    }
  ],
}

export const systemAddUser = {
  account: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur"
    }
  ],
}