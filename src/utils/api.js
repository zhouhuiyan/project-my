import request from '@/utils/request';
// 注册
export function reg(query = {}) {
  return request({
    url: '/users/reg',
    method: 'POST',
    params: query,
  });
}

// 得到评论列表
export function getReviewList(query = {}) {
  return request({
    params: query,
    url: '/system/review/list',
    method: 'GET',
  });
}
//查看评论详情
export function getOneReview(query = {}) {
  return request({
    params: query,
    url: '/system/review/view',
    method: 'GET',
  });
}
// 修改评论状态
export function updateState(query = {}) {
  return request({
    url: '/system/review/edit_state',
    method: 'POST',
    params: query,
  });
}
// 得到用户列表
export function getUserList(query = {}) {
  return request({
    params: query,
    url: '/system/users/list',
    method: 'GET',
  });
}
//查看用户详情
export function getOneUser(query = {}) {
  return request({
    params: query,
    url: '/system/users/view',
    method: 'GET',
  });
}
// 修改用户状态
export function userState(query = {}) {
  return request({
    url: '/system/users/edit_state',
    method: 'POST',
    params: query,
  });
}
// 添加用户
export function addUser(query = {}) {
  return request({
    url: '/system/users/add',
    method: 'POST',
    params: query,
  });
}

export function editUser(query = {}) {
  return request({
    url: '/system/users/edit',
    method: 'POST',
    params: query,
  });
}
// 用户是否存在
export function checkExist(query = {}) {
  return request({
    url: '/system/users/check_exist',
    method: 'GET',
    params: query,
  });
}

// 后台登录
export function slogin(query = {}) {
  return request({
    url: '/system/users/systemlogin',
    method: 'GET',
    params: query,
  });
}
// 得到文章列表
export function getArtList(query = {}) {
  return request({
    url: '/system/art/list',
    method: 'GET',
    params: query,
  });
}



// 得到一个文章
export function getOneArt(query = {}) {
  return request({
    url: '/system/art/view',
    method: 'GET',
    params: query,
  });
}

// 添加文章
export function addArt(query = {}) {
  return request({
    url: '/system/art/add',
    method: 'POST',
    params: query,
  });
}

// 得到文章分类列表
export function getTypeList(query = {}) {
  return request({
    url: '/system/type/alist',
    method: 'GET',
    params: query,
  });
}
//删除文章
export function delArt(query = {}) {
  return request({
    url: '/system/art/del',
    method: 'POST',
    params: query,
  });
}

//修改文章
export function editArt(query = {}) {
  return request({
    url: '/system/art/edit',
    method: 'POST',
    params: query,
  });
}
// 获得分类
export function getType(query = {}) {
  return request({
    url: '/system/type/list',
    method: 'GET',
    params: query,
  });
}
// 添加分类
export function addType(query = {}) {
  return request({
    url: '/system/type/add',
    method: 'POST',
    params: query,
  });
}
//分类查看
export function getOneType(query = {}) {
  return request({
    url: '/system/type/view',
    method: 'GET',
    params: query,
  });
}
//删除分类
export function delType(query = {}) {
  return request({
    url: '/system/type/del',
    method: 'POST',
    params: query,
  });
}
//修改分类
export function editType(query = {}) {
  return request({
    url: '/system/type/edit',
    method: 'POST',
    params: query,
  });
}

//前台文章列表
export function artList(query = {}) {
  return request({
    url: '/art/list',
    method: 'GET',
    params: query,
  });
}
//前台文章详情
export function artView(query = {}) {
  return request({
    url: '/art/view',
    method: 'GET',
    params: query,
  });
}

//前台文章评论
export function reviewList(query = {}) {
  return request({
    url: '/review/list',
    method: 'GET',
    params: query,
  });
}
