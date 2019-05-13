/**
 * 表格数据测试
 * @author zhy
 */
export const table=[
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Title",
    key: "title"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Action",
    slot: "action",

  }
];

/**
 * 后台文章管理表格表头
 * @author zhy 
 */
export const article=[
  {
    title: "文章ID",
    key: "id"
  },
  {
    title: "文章标题",
    key: "title"
  },
  {
    title: "文章作者",
    key: "author"
  },
  {
    title: "文章内容",
    slot: "content"
  },
  {
    title: "创建时间",
    slot: "createtime"
  },
  {
    title: "文章状态",
    slot: "status"
  },
  {
    title: "操作",
    slot: "action",
    minWidth:100
  }
];

/**
 * 后台用户管理表格表头
 * @author zhy 
 */
export const users=[
  {
    id: "用户ID",
    key: "id",
    width:40
  },
  {
    title: "用户名",
    key: "account"
  },
  {
    title: "昵称",
    key: "nickname"
  },
  {
    title:"角色",
    key: "role"
  },
  {
    title:"注册时间",
    slot:"createtime",
    width:150
  },
  {
    title:"账号状态",
    slot: "status"
  },
  {
    title:"操作",
    slot: "action",
    minWidth:80
  }
];

/**
 * 后台权限管理表格表头
 * @author zhy 
 */
export const permissions=[
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Name",
    key: "name"
  }
];

/**
 * 后台分类管理表格表头
 * @author zhy 
 */
export const type=[
  {
    title: "id",
    key: "id"
  },
  {
    title: "分类名称",
    key: "name"
  },
  {
    title: "分类状态",
    slot: "status"
  },
  {
    title: "操作",
    slot: "action",
    minWidth:80
  }
];

/**
 * 后台评论管理表格表头
 * @author zhy 
 */
export const review=[
  {
    id: "评论ID",
    key: "id",
    width:40
  },
  {
    title: "评论人",
    key: "critics"
  },
  // {
  //   title: "文章ID",
  //   key: "art_id"
  // },
  {
    title: "文章标题",
    key: "title"
  },
  {
    title: "评论内容",
    key: "content"
  },
  {
    title: "评论时间",
    slot: "createtime",
    width:150
  },
  {
    title: "评论状态",
    slot: "state"
  },
  {
    title: "操作",
    slot: "action",
    minWidth:80
  }
];