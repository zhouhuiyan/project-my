<template>
  <div class="layout">
    <Layout>
      <Header class="navbox">
        <div class="logo"  @click="$router.push('/')">博客</div>
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
      </div>-->
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <div class="box">
          <p class="title">{{datalist.title}}</p>
          <div class="zheng">
            <p class="data1">{{$dayjs(datalist.createtime*1000).format("YYYY-MM-DD HH:mm:ss")}}</p>
            <div class="ch">
              <img class="img4" src="img/cha.jpg">
            </div>
          </div>
          <div class="table">{{datalist.content}}</div>
        </div>
        <div class="ping">
          <div class="send">
            <div style="width:500px;">

            <Input type="text" v-model="text" placeholder="想对作者说点什么"/>
            </div>

            <Button type="primary" @click="send()" style="margin-left:10px;">发送</Button>
          </div>
          <div v-for="(item,index) in review" :key="index">
            <ul class="kh1">
              <li class="xm">{{item.author}}:</li>
              <li class="bao">{{item.content}}</li>
            </ul>
            <div class="line1"></div>
          </div>
          
        </div>
      </Content>
      <Footer class="layout-footer-center">2019 &copy; zhy</Footer>
    </Layout>
  </div>
</template>

<script>
import { artView,reviewList } from "@/utils/api.js";

export default {
  data() {
    return {
      datalist: [],
      offset: 1,
      page_size: 10,
      text:'',
      review:'',
    };
  },
  methods: {
    getList() {
      var params = {
        id:this.$route.query.id
      };
      artView(params).then(res => {
        this.datalist = res.data.datalist[0];
      });
    },
    getreviewList() {
      var params = {
        id: this.$route.query.id,
      };
      reviewList(params).then(res => {
        this.review = res.data.datalist;
      });
    },
    send(){
      this.text = '';

    }
  },
  created() {
    this.getList();
    this.getreviewList();
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
  .box {
    .title {
      text-align: center;
      font-size: 46px;
      margin-top: 80px;
      padding: 0;
      margin-bottom: 0;
    }
    .zheng {
      overflow: hidden;
      margin-bottom: 120px;
    }
    .data1 {
      margin-left: 725px;
      font-size: 21px;
      color: #6a6d74;
    }
    .ch {
      margin-left: 980px;
      margin-top: -47px;
    }
    .img4 {
      vertical-align: initial;
    }
    .ci1 {
      margin-left: 10px;
      font-size: 21px;
      color: #6a6d74;
    }
    .table {
      width: auto;
      height: auto;
      overflow: hidden;
      border: 1px solid #ddd;
      margin: 0 60px;
      line-height: 30px;
      text-align: left;
      padding: 20px;
    }
  }
  .ping {
      border: 1px solid #ddd;
    margin:30px;
    margin-left:60px;
    padding:20px;
    .send {
      margin-top: 32px;
      display:flex;
    }
    .send1 {
      float: left;
    }
    .shuo {
      width: 1200px;
      height: 40px;
      font-size: 25px;
      border-radius: 10px;
      margin-left: 20px;
    }
    .btn {
      width: 100px;
      height: 40px;
      font-size: 22px;
    }
    .kh1 {
      overflow: hidden;
    }
    .kh1 li img {
      margin-left: -28px;
    }
    .kh1 li {
      float: left;
      height: 50px;
      line-height: 50px;
      margin-left: 20px;
    }
    .line1 {
      width: auto;
      height: 1px;
      margin: 0 30px;
      border: 1px dashed #e0e0e0;
    }
  }
}
</style>
