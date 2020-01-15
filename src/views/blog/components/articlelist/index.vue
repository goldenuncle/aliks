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
                <div class="grid-content bg-purple"></div>
            </el-col>
            
        </el-row>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

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
    components: {

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
