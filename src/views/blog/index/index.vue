<template>
  <div id="blog">
    <navMemu />
    
    <div class="main">

    </div>

  </div>
</template>

<script>
import navMemu from "../components/navmenu";
import userInfo from "../components/userinfo";
export default {
   name: 'index',
components: {
    navMemu
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