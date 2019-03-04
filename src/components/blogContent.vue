<template>
  <div id="content">
    <el-container>
      <el-header id="content_header">
        <blogtop></blogtop>
      </el-header>
      <el-container id="content_aside_main">
        <el-aside id="content_aside">
          <blogaside></blogaside>
        </el-aside>
        <el-container>
          <el-main id="content_main">
            <blogcontentmain></blogcontentmain>
          </el-main>
        </el-container>
      </el-container>
      <el-footer id="content_footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import blogtop from "../components/blogTop.vue";
import blogaside from "../components/blogAside";
import blogcontentmain from "../components/blogContentMain.vue";
export default {
  name: "blogContent",
  data() {
    return {};
  },
  components: {
    blogtop: blogtop,
    blogaside: blogaside,
    blogcontentmain: blogcontentmain
  }
};
</script>

<style scoped>
#content_header {
  padding: 0;
}
#content_aside_main {
  margin: 0 auto;
  width: 86%;
  margin-top: 20px;
}
#content_aside {
  margin-right: 1%;
  border: 2px solid red;
  /* height: 100%;高度自适应 */
  height: 500px;
  width: 200px;
}
#content_main {
  border: 2px solid red;
  height: 100%;
}
#content_footer {
  padding: 10px;
  background: #2c2d2f;
  margin-top: 16px;
  text-align: center;
  color: #fff;
}
</style>




