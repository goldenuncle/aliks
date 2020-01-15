<template>
  <div class="header">
    <el-row>
      <el-col :xs="{span: 3, offset: 0}" :sm="0" :md="0" :lg="0" :xl="0">
        <el-button icon="el-icon-s-unfold" @click="memushow=!memushow"></el-button>
        
      </el-col>
      <el-col
        :xs="{span: 6, offset: 15}"
        :sm=" {span: 4, offset: 4}"
        :md="4"
        :lg="3"
        :xl=" {span: 2, offset: 3}"
      >
        <el-image style="width:100%; height: 100%" :src="url" fit="fit"></el-image>
      </el-col>
      <el-col
        :xs="0"
        :sm="{span: 8, offset: 6}"
        :md="{span: 9, offset: 7}"
        :lg="{span: 9, offset: 7}"
        :xl="{span: 11, offset: 8}"
      >
        <el-menu
          router
          :default-active="activeIndex"
          active-text-color="#FF69B4"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          width="60px"
        >
          <el-menu-item index="1" route="/">首页</el-menu-item>
          <el-menu-item index="2" route="/article">文章</el-menu-item>
          <el-menu-item index="3" route="/about">关于我</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div style="margin-top: 0px; ">
          <el-collapse-transition>
            <div v-if="memushow" class="memushow">
              <el-menu
                router
                :default-active="activeIndex"
                background-color="#fff"
                text-color="#555"
                class="el-menu-demo"
                mode="vertical"
                @select="handleSelect"
                active-text-color="hotpink"
              >
                <el-menu-item index="1" route="/">首页</el-menu-item>
                <el-menu-item index="2" route="/article">分类</el-menu-item>
                <el-menu-item index="3" route="/about">留言</el-menu-item>
                <el-menu-item index="3" route="/about">
                  <el-button
                    type="text"
                    @click="memushow = !memushow"
                    style="color: #555;bottom:0px; "
                  >收起</el-button>
                </el-menu-item>
              </el-menu>
            </div>
          </el-collapse-transition>
        </div>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      activeIndex: "1",
      url: "https://goldenuncle.cn/image/blogimg/logo.png",
      memushow: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
    }
  }
};
</script>

<style  lang="scss" scoped>
.memushow {
  background-color: #ffffff;
  z-index:999;
  position: fixed;
  cursor: pointer;
  width: 100%;
 border-bottom: solid 1px #ccc;
}
.header {
  position: relative;
  background: #ffffff;
  border-bottom: solid 1px #ccc;
}
</style>