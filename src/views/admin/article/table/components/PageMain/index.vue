<template>
  <el-table :data="tableData" v-loading="loading" size="mini" style="width: 100%;">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="文章标题">
            <span>{{ props.row.article_title }}</span>
          </el-form-item>
          <el-form-item label="点赞数">
            <span>{{ props.row.article_like_count }}</span>
          </el-form-item>
          <el-form-item label="浏览量">
            <span>{{ props.row.article_views }}</span>
          </el-form-item>
          <el-form-item label="文章分类">
            <span>{{ props.row.article_views  }}</span>
          </el-form-item>
          <el-form-item label="文章描述">
            <span>{{ props.row.article_views  }}</span>
          </el-form-item>
          <el-form-item label="创建时间">
            <span>{{ props.row.create_date }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="发表人" prop="NickName"></el-table-column>
    <el-table-column label="文章标题" prop="article_title"></el-table-column>
    <el-table-column label="文章描述" prop="article_views"></el-table-column>
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
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
