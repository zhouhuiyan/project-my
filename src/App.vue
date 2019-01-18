<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{apijson}}</div>
    <button @click="getname">get name</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      apijson:'我是初始数据'
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    getname(){
      this.axios.get('http://localhost:8888/users/user').then((res)=>{
        console.log(res.data);
        this.apijson = res.data;
      })
      // .catch(err=>{
      //   console.log(err);
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
