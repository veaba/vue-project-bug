<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  background: red
}
.container {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}
h3 {
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid red;
  text-align: center;
}
.hello{
  padding-bottom: 100px;
}
</style>

<template>
  <div class="hello">
     index 页面（请在底部go 到 b页面 ）
     <h3 v-for="item in 20" :key="item">{{item }} 行</h3>
       <router-link to="/b">Go to B page</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
