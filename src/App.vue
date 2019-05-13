<template>
  <div id="app">
    
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import OHome from './views/'

export default {
  name: 'app',
  data(){
    return{
    }
  },
  components: {
    // HelloWorld
  },
  methods:{
    
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
}
</style>
