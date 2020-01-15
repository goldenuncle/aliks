<template>
  <div id="blog">
    <navMemu />
    
    <div class="main">
      <articleList />
    </div>

  </div>
</template>

<script>
import navMemu from "../components/navmenu";
import userInfo from "../components/userinfo";
import articleList from "../components/articlelist";
export default {
   name: 'index',
components: {
    navMemu,
    articleList
  }
}
//userInfo
</script>

<style lang="scss">
.main {
  padding-top:20px;
  position: relative;
  background-color: rgb(247, 247, 247);
}
.bg-purple {
    background: #d3dce6;
  }
</style>