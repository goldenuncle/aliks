<template>
  <el-table :data="articleTableData" v-loading="loading" size="mini" style="width: 100%;">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="文章标题">
            <span>{{ props.row.zblog_title }}</span>
          </el-form-item>
          <el-form-item label="点赞数">
            <span>{{ props.row.zblog_like_count }}</span>
          </el-form-item>
          <el-form-item label="浏览量">
            <span>{{ props.row.zblog_views }}</span>
          </el-form-item>
          <el-form-item label="文章分类">
            <span>{{ props.row.zblog_type }}</span>
          </el-form-item>
          <el-form-item label="文章描述">
            <span>{{ props.row.zblog_brief }}</span>
          </el-form-item>
          <el-form-item label="创建时间">
            <span>{{ props.row.zcreate_date }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="文章 ID" prop="zid"></el-table-column>
    <el-table-column label="文章标题" prop="zblog_title"></el-table-column>
    <el-table-column label="文章描述" prop="zblog_brief"></el-table-column>
  </el-table>
</template>

<script>
import { ArticleList } from "@/api/article";
export default {
  components: {},
  props: {
    tableData: {
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data() {
    return {
      articleTableData: []
    };
  },
  methods: {
    getArticleList() {
      ArticleList({})
        .then(res => {
          // 返回数据
          this.articleTableData = res.data;
        })
        .catch(err => {
          // 异常情况
        });
    }
  },
  mounted() {
    this.getArticleList();
  }
};
</script>
