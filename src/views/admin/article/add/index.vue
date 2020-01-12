<template>
  <d2-container>
    <!-- <el-input v-model="article_title" placeholder="在这里输入文章标题" class="input-demo-400 d2-mr-10"></el-input> -->
    <d2-mde v-model="article_content" class="mde" />
    <el-button type="primary" plain @click="publish">发表</el-button>
    <!-- <el-card shadow="never" class="d2-card">
      <pre></pre>
    </el-card>-->
    <el-dialog title="填写信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="文章标题" :label-width="formLabelWidth" prop="article_title">
          <el-input v-model="form.article_title"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" :label-width="formLabelWidth" prop="article_classify">
          <!-- <el-select v-model="form.article_classify">
            <el-option
              v-for="item in article_classify"
              :key="item.ID"
              :label="item.label_name"
              :value="item.ID"
            ></el-option>
          </el-select>-->
          <tree-select
            :data="data"
            :defaultProps="defaultProps"
            :nodeKey="nodeKey"
            :checkedKeys="defaultCheckedKeys"
            @popoverHide="popoverHide"
          ></tree-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </d2-container>
</template>

<script>
import { ArticleAdd, GetClassify } from "@/api/article";
import { construct, destruct } from "@aximario/json-tree";
import { mapState } from "vuex";
export default {
  name: "admin-article-add",
  components: {
    TreeSelect: () => import("./components/tree")
  },
  data() {
    return {
      dialogFormVisible: false,
      article_content: null,
      form: {
        article_title: "",
        article_classify: ""
      },
      formLabelWidth: "120px",
      article_classify: [],
      rules: {
        article_title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 3, max: 21, message: "长度在 3 到 21 个字符", trigger: "blur" }
        ],
        article_classify: [
          { required: true, message: "请选择文章分类", trigger: "change" }
        ]
      },

      data: [],//SelectTree数据
      defaultProps: {
        children: "children",
        label: "label"
      },
      nodeKey: "id",
      defaultCheckedKeys: []
    };
  },
  methods: {
    publish() {
      let content = this.article_content;
      if (content != "" && content != null) {
        this.dialogFormVisible = true;
      } else {
        this.$message.error("请填写内容！");
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(this.info)
        if (valid) {
          let data = {
            user_id: this.info.id,
            article_title: this.form.article_title,
            article_content: this.article_content,
            article_sort_id:this.form.article_classify,
            create_date: new Date()
          };
          ArticleAdd(data)
            .then(res => {
              // 返回数据
              if (res.status == 0) {
                this.dialogFormVisible = false;
                this.$message.success("发表成功啦！");
              }
            })
            .catch(err => {
              // 异常情况
              this.$message.error("发表失败,请联系管理员！");
            });
        } else {
          this.$message.error("添加失败，请联系管理员！");
          return false;
        }
      });
    },
    initChecked() {
      this.defaultCheckedKeys = [1006, 1007];
    },
    popoverHide(checkedIds, checkedData) {
      this.form.article_classify = checkedIds;
    }
  },
  computed: {
     ...mapState("d2admin/user", ["info"])
  },
  mounted() {
    GetClassify()
      .then(res => {
        if (res.status == 0) {
          this.data=construct(res.data, {
            id: "id",
            pid: "pid",
            children: "children"
          })
        } else {
          this.defaultCheckedKeys = [1001];
          this.$message.error("获取文章分类列表失败,请联系管理员！");
        }
        //this.article_classify = res.data;
      })
      .catch(err => {
        this.defaultCheckedKeys = [1001];
        this.$message.error("获取文章分类列表失败,请联系管理员！");
      });
  }
};
</script>

<style lang="scss" scoped>
.mde {
  margin-bottom: -16px;
}
</style>