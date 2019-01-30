<template>
  <div class="hello">
    <div>
      <div>{{apijson}}</div>
      <button @click="getname">get name</button>
    </div>
    <h1>{{ msg }}</h1>
    <div>{{content}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    apijson: "我是初始数据"
  },
  data() {
    return {
      content: ""
    };
  },
  methods:{
    getname(){
      this.axios.get('http://localhost:8888/users/user').then((res)=>{
        console.log(res.data);
        this.apijson = res.data;
      })
    }
  },
  created() {
    this.axios.post("http://api.komavideo.com/news/list").then(body => {
      this.content = body.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
