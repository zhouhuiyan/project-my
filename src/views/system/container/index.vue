<template>
  <div class="container">
    <div class="sidebar-wrapper">
      <!-- <Sidebar :navList="navList"></Sidebar> -->
      <Sidebar></Sidebar>
    </div>
    <div class="con-wrapper">
      <div class="header">
        <div class="logout" @click="logout">退出</div>
      </div>
      <!-- <div class="bread-wrapper">
        <Breadcrumb>
          <BreadcrumbItem to="/">Home</BreadcrumbItem>
          <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/system/Sidebar/index.vue'
// import { navList } from '@/utils/config.js'

export default {
  components: {
    Sidebar
  },
  data(){
    return{
      // navList: navList,
    }
  },
  methods:{
    logout() {
    localStorage.removeItem('token')
    // this.$router.push('/system/login')
  }
  },

  
}
</script>

<style lang="less" scoped>
@wrappersize : 50px;
@sidebarWidth: 200px;

.container {
  .sidebar-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index:10;
  }
  .bread-wrapper {
    padding: 5px 0 30px 2px;
  }
  .con-wrapper {
    margin-left: 200px;
    padding: 80px 30px 50px;
    .header {
      position: fixed;
      display: flex;
      justify-content: flex-end;
      top: 0;
      right: 0;
      width: calc(100% - 200px);
      height: 50px;
      line-height: 50px;
      z-index: 9;
      padding: 0 36px;
      background: #fff;
      .logout {
        text-align: right;
        color: #777;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
}
</style>

