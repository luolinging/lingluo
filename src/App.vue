<template>
  <div id="app">
    <blog-index></blog-index>
    
    <!-- <router-view/>helloworld.vue文件内容在下 -->
  </div>
</template>

<script>
import blogindex from './components/blogIndex.vue';
export default {
  name: 'Blog'
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
