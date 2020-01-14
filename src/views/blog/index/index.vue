<template>
  <div id="blog"> 
      <navMemu/>
      <el-row :gutter="10">
        
        <el-col :offset="3" :xs="8" :sm="9" :md="10" :lg=11 :xl="12"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="1" :sm="2" :md="4" :lg="6" :xl="8"><div class="grid-content bg-purple"></div></el-col>

      </el-row>
      <router-view/>
  </div>
</template>

<script>
import navMemu from '../components/navmemu'
export default {
components: {
    navMemu,
  },
}
</script>

<style  lang="scss" scoped>
.el-row{
  margin: 0!important;
  padding: 0!important;
}
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>