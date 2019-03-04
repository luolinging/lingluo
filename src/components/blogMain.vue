<template>
  <div id="main">
    <div id="main_msg">
      <p>{{msg}}</p>
      <router-link id="main_blog_link" to="/blogContent">enter</router-link>
    </div>    
  </div>
</template>

<script>
export default {
  name: "blogMain",
  data() {
    return {
      msg: "LingLuo's personal blog"
    };
  }
};
</script>

<style scoped>
#main {
  background: url("../common/image/002.jpg") no-repeat;
  position: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: table;/*解决p标签内容水平垂直居中*/
}
/*解决p标签内容水平垂直居中*/
#main_msg {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
p {
  font-family: "Tekton Pro", Times, serif;
  font-weight: bold;
  font-size: 70px;
  color: brown;
  margin-bottom: 35px;
}
#main_blog_link {
  color: brown;
  font-family: "Tekton Pro", Times, serif;
  font-size: 30px;
}
</style>
