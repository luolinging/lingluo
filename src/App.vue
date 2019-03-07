<template>
  <div id="app">
    <!-- 路由出口  , 路由匹配到的组件将渲染在这里 -->
    <!--  -->
    <transition name="tra" mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.tra-enter{
  opacity: 0;
}
.tra-enter-active{
  transition: 0.5s;
}
.tra-leave{
  opacity: 1;

}
.tra-leave-active{
  opacity: 0;
  transition: 0.5s;
}
</style>
