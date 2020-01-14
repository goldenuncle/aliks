<template>
  <div class="header">
    <div class="logo">
      <el-image
      style="width: 146px; height: 42px"
      :src="url"
      fit="fit"></el-image>
    </div>
    <div class="memu">
       <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#FF69B4">
        <el-menu-item index="1" route="/">首页</el-menu-item>
        <el-menu-item index="2" route="/article">文章</el-menu-item>
        <el-menu-item index="3" route="/about">关于我
        </el-menu-item>
      </el-menu>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      url: "https://goldenuncle.cn/image/logo.png"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  lang="scss" scoped>
.header {
  margin:0 auto;
  display: flex;
  justify-content:space-around;
  align-items:  center ;
  .logo{
    width: 146px;
    text-align: center;
    margin: 0;
    font-weight: 400
  }
  .memu{

  }
}
</style>