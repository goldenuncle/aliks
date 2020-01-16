<template>
    <div>
        <el-row >
            <el-col :xs="{span:24, offset: 0}" :sm="{span:20, offset: 2}" :md="{span:20, offset: 2}" :lg="{span: 17, offset: 3}" :xl="{span: 12, offset: 6}">
                <div class="title">
                    <h1>PanHai's blog</h1>
                    <span>Did you get what you wanted ?</span>
                </div>

            </el-col>
            <el-col :xs="{span:24, offset: 0}" :sm="{span:20, offset: 2}" :md="{span:20, offset: 2}" :lg="{span: 17, offset: 3}" :xl="{span: 12, offset: 6}">
                <div class="article-list">
                    
                </div>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>
export default {

      
    data() {
        return {
            sourceLong:`**易用** 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！**灵活**`,

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
.title{
    text-align: center;
    h1{
        color: #6e8aad;
            font-weight: 400;
    }
    span{
        display: block;
        margin-bottom: 1em; 
        font-weight: 100;
        font-family: Raleway;
    }
}
.el-col {
  border-radius: 4px;
  padding-bottom: 1.25em;
}
.article-list {
    transition: opacity .3s;
  background: #99a9bf;
}
  
</style>
