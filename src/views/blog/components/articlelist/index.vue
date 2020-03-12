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
                    <el-card class="box-card" v-for="data in list" :key="data.id">
                        <h2><el-link :underline="false">{{data.article_title}}</el-link></h2>
                        <div  class="text item">
                            <!-- 列表内容  + o  -->
                            {{data.article_content.substr(0,50)}}
                        </div>
                        <div class="post-meta">
                            <i class="el-icon-time">{{data.create_date}}</i>
                            <i class="el-icon-burger">{{ data['sort.sort_name'] }}</i>
                        </div>
                        
                    </el-card>
                </div>              
            </el-col>            
        </el-row>
    </div>
</template>

<script>
import { ArticleList, ArticleByTitle } from "@/api/article";
export default {
    data() {
        return {
            sourceLong:`**易用** 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！**灵活**`,
            page: {
                    pageCurrent: 1,
                    pageSize: 10,
                    pageTotal: 0,
                    title:''
            },
            list:[]
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
            this.getArticleList();
    },
    watch: {

    },
    methods: {
        getArticleList() {
            ArticleList(this.page)
                .then(res => {
                if (res.status == 0){
                    this.list=res.data.rows
                }
                // 返回数据
                else
                    this.$notify({
                    title: "错误",
                    message: `获取不到数据请联系管理员`
                    });
                })
                .catch(err => {
                // 异常情况
                });
            }
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

.article-list {
    transition: opacity .3s;

    margin-bottom: 2.5em;
    font: 16px/1.5 'Microsoft Yahei','PingFang SC','Hiragino Sans GB',sans-serif;
    h2{
        font-weight: 400;
        margin: 0;
        padding: 0;
        margin-bottom: 1em;
        border-bottom: 1px solid #ddd;
        a{
            color: #222;
            font-size: .82em; 
            line-height: 2em;
            -webkit-transition: all .25s;
            transition: all .25s;
            :hover{
                color: #222;
                padding-left: .1em;
            }
            :visited{
                 color: #222;

            }
        }
        
    }
    .text{
        margin-bottom: 1em;
        line-height: 1.8em;
    } 
    .post-meta{
        i{
            margin-right: .8em;
            line-height: 20px;
        }
        .el-icon-time:before {
            display: inline-block;
            margin-right: .4em;
            color: #555;
            font-size: inherit;

        }
        .el-icon-burger:before{
            display: inline-block;
            margin-right: .4em;
            color: #555;
            font-size: inherit;
        }
        
    }
}
.el-card {
    background-color: unset;
    // border:unset;
}
.el-card.is-always-shadow{
    box-shadow:unset;
}
</style>
