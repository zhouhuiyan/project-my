import axios from "axios";
import { Message } from "iview";
import qs from "qs";



// console.log('i18n:', i18n);

const baseURL = "http://localhost:8888";

// create an axios instance
const service = axios.create({
  baseURL, // api 的 base_url
  timeout: 5000, // request timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});

const request = options => {
  if (/post/i.test(options.method)) {
    options.data = options.params;
    delete options.params;
  }
  return service(options);
};

// request interceptor
service.interceptors.request.use(
  config => {
    const configs = config;
    // Do something before request is sent
    const { method } = configs;
    // const token = localStorage.getItem("token");
    // 如果是get方法 接口需要token 且token存在
    // if (/get/i.test(method) && configs.isToken !== "false" && token) {
    //   configs.params.token = token;
    // } else if (/post/i.test(method)) {
    //   // 如果是post方法
    //   if (configs.isToken !== "false" && token) configs.data.token = token; // 需要token 且token存在
    //   if (
    //     configs.headers["Content-Type"] === "application/x-www-form-urlencoded"
    //   ) {
    //     configs.data = qs.stringify(configs.data);
    //   }
    // }
    if (/post/i.test(method)) {
      // 如果是post方法
      if (
        configs.headers["Content-Type"] === "application/x-www-form-urlencoded"
      ) {
        configs.data = qs.stringify(configs.data);
      }
    }
    return configs;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.status.code === 1012) {
      Message({
        message: "用户不存在",
        type: "error",
        duration: 5000
      });
      // token失效时清除localStorage中的信息
      // store中的isLogined改为false
      // 重定向回首页
      localStorage.removeItem("token");
      localStorage.removeItem("info");
      store.commit("isLoginedChange", false);
      router.replace("/");
    } else if (response.data.status.code !== 0) {
      Message({
        message: response.data.status.message,
        type: "error",
        duration: 5000
      });
    }
    return response;
  },
  error => {
    console.log(`err${error}`); // for debug
    if (error.message === "timeout of 5000ms exceeded") {
      Message.error("请求超时,请稍后重试");
    } else {
      Message({
        message: error.message,
        type: "error",
        duration: 5000
      });
    }

    return Promise.reject(error);
  }
);

export default request;
