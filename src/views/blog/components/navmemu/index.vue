<template>
<div class="header">
    <div calss="container">
        <el-image class="logoimg"
      style="width: 146px; height: 38px"
      :src="/.s"
      :fit="fit"></el-image>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
            </el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>

</div>

</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        logoUrl:'@/public/image/blog.img/logo.png'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
.header{
    .container{
        margin:0 auto; width:400px; height:100px; border:1px solid #F00
    }
}
</style>