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
            <span>{{ props.row['sort.sort_name'] }}</span>
          </el-form-item>
          <!-- <el-form-item label="文章描述">
            <span>{{ props.row['sort.sort_name']  }}</span>
          </el-form-item> -->
          <el-form-item label="创建时间">
            <span>{{ props.row.create_date }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="置顶" width="50" align="center">
        <template slot-scope="scope">
          <boolean-control-mini
            :value="scope.row.istop"
            :id="scope.row.id"
           >
            <d2-icon
              name="check-circle"
              style="font-size: 20px; line-height: 32px; color: #67C23A;"
              slot="active"/>
            <d2-icon
              name="times-circle"
              style="font-size: 20px; line-height: 32px; color: #F56C6C;"
              slot="inactive"/>
          </boolean-control-mini>
        </template>
      </el-table-column>
    <el-table-column label="发表人" prop="user.NickName">
      <template slot-scope="scope">
       <span>{{ scope.row['user.NickName'] }}</span>
     </template></el-table-column>
    <el-table-column label="文章标题" prop="article_title"></el-table-column>
    <el-table-column label="文章描述" prop="article_views"></el-table-column>
  </el-table>
</template>

<script>
import { ArticleList } from "@/api/article";
import BooleanControlMini from '../BooleanControlMini'
export default {
  components: {
    BooleanControlMini
  },
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
      currentTableData: [],
      articleTableData: []
    };
  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods:{
    handleSwitchChange (val, index) {
      const oldValue = this.currentTableData[index]
      this.$set(this.currentTableData, index, {
        ...oldValue,
        type: val
      })
      // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
    },
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
