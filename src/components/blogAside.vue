<template>
  <div class="blog_aside">
    <div id="userhead">
      <img src="../common/image/userhead.png" >
    </div>
    <h3>LingLuo博客</h3>
  </div>
</template>
<script>
export default {
  name: "blogAside",
  data() {
    return {
      msg: "我是Aside"
    };
  },
  methods: {}
};
</script>

<style scoped>
#userhead {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  width:25%;
  height:auto;
}
</style>
