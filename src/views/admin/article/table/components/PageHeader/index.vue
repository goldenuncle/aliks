<template>
  <el-form
    :inline="true"
    :model="form"
    
    ref="form"
    size="mini"
    style="margin-bottom: -18px;"
  >
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title" placeholder="在此输入" style="width: 100px;" />
    </el-form-item>
    <!-- 
    <el-form-item label="卡密" prop="key">
      <el-input
        v-model="form.key"
        placeholder="卡密"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item label="备注" prop="note">
      <el-input
        v-model="form.note"
        placeholder="备注"
        style="width: 120px;"/>
    </el-form-item>-->

    <el-form-item>
      <el-button type="primary" @click="handleFormSubmit">
        <d2-icon name="search" />查询
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button @click="toaddarticle">
        <d2-icon name="edit" />添加
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入查询内容", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    handleFormSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit("submit", this.form);
        } else {
          this.$notify.error({
            title: "错误",
            message: "表单校验失败"
          });
          return false;
        }
      });
    },
    toaddarticle() {
      this.$router.replace(this.$route.query.redirect || "/admin/article/add");
      // this.$store.dispatch("d2admin/page/add", {
      //   tag: {
      //     name: "admin-article-add",
      //     path: "admin/article/add",
      //     meta: {}
      //   },
      //   params: {},
      //   query: {}
      // });
    }
  }
};
</script>
