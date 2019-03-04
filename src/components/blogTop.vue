<template>
  <div class="blog_top">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Html</el-menu-item>
      <el-submenu index="2">
        <template slot="title">CSS</template>
        <el-menu-item index="2-1">选择器</el-menu-item>
        <el-menu-item index="2-2">伪类</el-menu-item>
        <el-menu-item index="2-3">定位</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">Display</template>
          <el-menu-item index="2-4-1">flex布局</el-menu-item>
          <el-menu-item index="2-4-2">Grid布局</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">边框样式</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "blogTop",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu-demo {
    padding-left: 7%;
    padding-right: 7%;
}
.blog_top{
  width: 100%;
  position: fixed;
}
</style>
