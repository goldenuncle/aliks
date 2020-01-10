<template>
  <d2-container>
    <demo-page-header slot="header" @submit="handleSubmit" />
    <demo-page-main :table-data="table" :loading="loading" />
    <demo-page-footer
      slot="footer"
      :current="page.pageCurrent"
      :size="page.pageSize"
      :total="page.pageTotal"
      @change="handlePaginationChange"
    />
  </d2-container>
</template>

<script>
import { ArticleList, ArticleByTitle } from "@/api/article";
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: "admin-article",
  components: {
    DemoPageHeader: () => import("./components/PageHeader"),
    DemoPageMain: () => import("./components/PageMain"),
    DemoPageFooter: () => import("./components/PageFooter")
  },
  data() {
    return {
      table: [],
      loading: false,
      page: {
        pageCurrent: 1,
        pageSize: 10,
        pageTotal: 0,
        title:''
      }
    };
  },
  methods: {
    handlePaginationChange(val) {
      this.page.pageCurrent= val.current
      this.page.pageSize= val.size
      this.page.pageTotal= val.total
      this.getArticleList();
    },
    handleSubmit(form) {
      this.page = {
        pageCurrent: 1,
        pageSize: 10,
        pageTotal: 0,
        title:form.title
      };
      this.loading = true;
      this.getArticleList();

    },
    getArticleList() {
      ArticleList(this.page)
        .then(res => {
          if (res.status == 0){
              this.loading = false;
              this.table = res.data.rows
              this.page.pageTotal = res.data.count
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
  mounted() {
    this.getArticleList();
  }
};
</script>
