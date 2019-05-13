<template>
  <div class="layout">
    <Layout>
      <Header class="navbox">
        <div class="logo" @click="$router.push('/')">博客</div>
        <div class="nav">
          <router-link to="/register">注册</router-link>|
          <router-link to="/login">前台登录</router-link>|
          <router-link to="/system">后台登录</router-link>
        </div>
      </Header>
<!-- <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div> -->
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">

        <div class="main">
          <ul>
            <li v-for="(item,index) in datalist" :key="index" class="vue">
              <div class="vue1" @click="$router.push({path:'/view',query:{id:item.id}})">
                <p class="vue2">{{item.title}}</p>
                <p class="vue3">{{item.dest}}</p>
              </div>
              <div class="riqi">
                <span class="data">{{$dayjs(item.createtime*1000).format("YYYY-MM-DD HH:mm:ss")}}</span>
              </div>
              <div class="line"></div>
            </li>
          </ul>
        </div>
      </Content>
      <Footer class="layout-footer-center">2019 &copy; zhy</Footer>
    </Layout>
  </div>
</template>

<script>
import { artList } from "@/utils/api.js";

export default {
  
  data(){
    return{
      datalist:[],
      offset: 1,
      page_size: 10,
    }
  },
  methods:{
    getList() {
      var params = {
        offset: this.offset,
        page_size: this.page_size
      };
      artList(params).then(res => {
        this.datalist = res.data.datalist.artlist;
      });
    },
  },
  created(){
    this.getList();
  }
};
</script>

<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .navbox {
    display: flex;
    justify-content: space-between;
    .logo {
      color: #fff;
      font-size: 24px;
    }
    .nav {
      float: right;
      display: flex;
      width: 300px;
      justify-content: space-between;
    }
  }

  .layout-breadcrumb {
    width: 100%;
    text-align: center;
  }
  .main {
    &>ul{
      list-style: none;
    }
    .vue {
      background-color: #fff;
      text-align:left;
      padding-left:20px;
    }
    .vue1 {
      padding-top: 20px;
      margin-left: 20px;
    }
    .vue2 {
      font-size: 24px;
      color: #464c62;
      padding: 0;
      margin: 0;
      height: 40px;
      line-height: 40px;
    }
    .vue3 {
      color: #686f75;
      font-size: 20px;
      padding: 0;
      margin: 0;
    }
    .riqi {
      margin-top: 34px;
      padding-bottom: 10px;
      &>span{
        margin-right:20px;
      }
    }
    .line {
      height: 3px;
      width: auto;
      background-color: #ebebed;
    }
    .img1 {
      margin-left: 50px;
      width: 20px;
      height: 20px;
      margin-top: 5px;
      vertical-align: sub;
    }
    .data,
    .ci {
      font-size: 17px;
      color: #a4a6b2;
      margin-left: 5px;
    }
    .img2 {
      margin-left: 100px;
      width: 20px;
      height: 20px;
      margin-top: 5px;
      vertical-align: sub;
    }
    .ci {
      margin-left: 10px;
    }
  }
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: #fff;
  line-height: 30px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.search {
  //  float:right;
  margin-left: 60px;
  width: auto;
}
.layout-footer-center {
  text-align: center;
}
</style>
