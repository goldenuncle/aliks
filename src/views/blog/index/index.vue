<template>
  <div class="blog">
    <navMemu />
    <div class="main">
      <articleList />
    </div>
    <mainFooter />
    <el-backtop target=".blog">
       <d2-icon name="arrow-up"  class="backtop"/>
    </el-backtop>
  </div>
</template>

<script>
//import '@/assets/js/canvas_ribbon.js'
import navMemu from "../components/navmenu";
import userInfo from "../components/userinfo";
import articleList from "../components/articlelist";
import mainFooter from "../components/footer";
export default {
  name: 'index',
  components: {
    navMemu,
    articleList,
    mainFooter
  },
  data () {
    return {
      filename: __filename
    }
  }
}
//userInfo
</script>

<style lang="scss" scoped>
.blog{
  overflow-x: hidden;
  height: 100vh;
}
.main {
  padding: 3.5em 0;
  min-height: 1600px;;
  padding-top:20px;
  position: relative;
  background-color: rgb(247, 247, 247);
}
.backtop{
  line-height:35px;
  color: #000;
  text-align:center;
}
.bg-purple {
    background: #d3dce6;
  }
</style>