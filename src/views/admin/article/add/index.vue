<template>
  <d2-container>
    <d2-mde
      v-model="text"
      class="mde"/>
    <el-button type="primary" plain @click="save">发表</el-button>
    <!-- <el-card shadow="never" class="d2-card">
      <pre></pre>
    </el-card> -->
  </d2-container>
</template>

<script>

export default {
  name: 'admin-article-add',
  data () {
    return {
      text:null
    }
  },
  methods:{
      save(){
          let text=this.data.text;
          console.log(text)
      }
  }
}
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>