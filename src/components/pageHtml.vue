<template>
  <div class="pageHtml">
    <p id="p1">首页/{{$route.name}}</p>
    <div id="div1">
      <h1>{{msg}}</h1>
      <h4>从url中接收的参数：{{$route.params.username}}</h4>
    </div>

    <h4 id='h3'>利用redirect重定向：
      <router-link to="/goBlogContent">返回</router-link>
    </h4>
  </div>
</template>

<script>
export default {
  name: "pageHtml",
  data() {
    return {
      msg: "我是html文章页面"
    };
  }
};
</script>

<style scoped>
.pageHtml{
  width: 86%;
  margin: 0 auto;
  padding-top: 20px;
}
* {
  margin: 0;
  padding: 0;
}
#p1 {
  text-align: left;
}
#div1 {
  margin-top: 10px;
  border: 2px solid red;
  border-radius: 20px;
  height: 500px;
}
#h3{
  text-align: right;
}
</style>
