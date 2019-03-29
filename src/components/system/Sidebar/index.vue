<template>
  <div class="sidebar" :style="styles">
    <h2 class="logo-wrapper">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo" width="90">
      </router-link>
    </h2>
    <Menu mode="vertical" :theme="theme" width="100%" active-name="1">
      <MenuItem name="hahah" to="/">
        <!-- <Icon type="ios-paper" /> -->
        <!-- <o-icon :type="navItem.smallIconType"
              :size="14"
        color="#666"></o-icon>-->
        <!-- <Icon :type="navItem.smallIconType"/> -->
        {{'哈哈哈'}}
      </MenuItem>
      <MenuItem name="hahah" to="/">
        <!-- <Icon type="ios-paper" /> -->
        <!-- <o-icon :type="navItem.smallIconType"
              :size="14"
        color="#666"></o-icon>-->
        <!-- <Icon :type="navItem.smallIconType"/> -->
        {{'哈哈哈1'}}
      </MenuItem>
      <MenuItem name="hahah" to="/">
        <!-- <Icon type="ios-paper" /> -->
        <!-- <o-icon :type="navItem.smallIconType"
              :size="14"
        color="#666"></o-icon>-->
        <!-- <Icon :type="navItem.smallIconType"/> -->
        {{'哈哈哈2'}}
      </MenuItem>
      <!-- <MenuItem v-for="navItem in navList" :name="navItem.id" :to="navItem.href" :key="navItem.id"> -->
        <!-- <Icon type="ios-paper" /> -->
        <!-- <o-icon :type="navItem.smallIconType"
              :size="14"
        color="#666"></o-icon>-->
        <!-- <Icon :type="navItem.smallIconType"/> -->
        <!-- {{navItem.text}} -->
      <!-- </MenuItem> -->
    </Menu>
    <div class="switch-wrapper">
      <div class="text">
        <Icon type="ios-bulb-outline" :size="16"/>
        <span class="v-1">switch theme</span>
      </div>
      <i-switch v-model="switch1" size="large" @on-change="change">
        <span slot="open">Dark</span>
        <span slot="close">Light</span>
      </i-switch>
    </div>
    <!-- <button @click="foo">click</button> -->
  </div>
</template>      

<script>
// import OIcon from '@/base/icon/index.vue'

export default {
  // props:{ type: Array, required: true }
  components: {
    // OIcon
  },
  data() {
    return {
      navList: [],
      theme: "light",
      switch1: false
    };
  },
  computed: {
    styles() {
      const style = {};
      if (this.theme === "light") {
        style.backgroundColor = "#fff";
      } else if (this.theme === "dark") {
        style.backgroundColor = "#515b6d";
      } else {
        style.backgroundColor = "#fff";
      }
      return style;
    }
  },
  methods: {
    change() {
      this.theme = this.theme === "dark" ? "light" : "dark";
    }
  }
};
</script>


<style lang="less" scoped>
.sidebar {
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 10px 0 10px -10px #efefef;
  .logo-wrapper {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .ivu-menu-item {
    font-size: 13px;
    padding: 16px 55px;
  }
  .switch-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: right;
    padding: 5px 10px;
    .text {
      font-size: 12px;
      color: #888;
    }
  }
}
</style>
