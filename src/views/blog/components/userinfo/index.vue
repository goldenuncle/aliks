<template>
  <el-row>
    <el-col :xs="0" :sm="{span: 5, offset: 16}"  :md="{span: 5, offset: 16}" :lg="{span: 3, offset: 16}" :xl="{span: 3, offset: 16}">
      <el-card :body-style="{ padding: '0px'}" class="card">
        <div class="img-avatar">
          <el-avatar shape="circle" :size="100" :fit="fit" :src="url"></el-avatar>
        </div>
        
       
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
          
    </el-col>  
  </el-row>



</template>

<script>
export default {
   name: 'user-info',
data() {
    return {
      currentDate: new Date(),
      url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  }
}
</script>

<style>
.card{
  text-align:center;
}
.img-avatar{

}
</style>