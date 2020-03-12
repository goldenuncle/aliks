<template>

     <el-row class="footer">   
     <el-col :xs="{span:24, offset: 0}" :sm="{span:20, offset: 2}" :md="{span:20, offset: 2}" :lg="{span: 17, offset: 3}" :xl="{span: 12, offset: 6}">
      
        <span> © 2017 <a href="#">PanHai's blog . </a>All Rights Reserved . <a href="http://www.beian.miit.gov.cn/"  target="_blank">豫ICP备19018434号- 1 </a></span> 

    </el-col>
  </el-row>

  
</template>

<script>
export default {
  data() {
    return {

    }
}
}
</script>

<style scoped lang="scss">
.footer{
    background-color: rgb(247, 247, 247);
    border-top: 1px solid #eee;
    text-align: center;
    a{
        color: #222;
        font-size: .955em;
    }
    span{
        font-size: .875em;
        padding: 1em 0;
        display: block;

        font-weight: 100;
        font-family: Raleway;
    }
}
</style>