<template>
  <span slot="reference">
    <d2-icon
      v-if="disabled"
      name="hourglass-start"
      style="font-size: 14px; line-height: 32px; color: #909399;"
    />
    <span @click="handleClick">
      <slot v-if="!disabled && currentValue==1" name="active" />
      <slot v-if="!disabled && currentValue!=1" name="inactive" />
    </span>
  </span>
</template>

<script>
import { UpdateIsTop } from "@/api/article";
export default {
  props: {
    value: {
      default: 0
    },
    id: {
      default: 0
    }
  },
  data() {
    return {
      currentValue: 0,
      disabled: false
    };
  },
  watch: {
    value: {
      handler(val) {
        this.currentValue = val;
      },
      immediate: true
    }
  },
  methods: {
    handleClick() {
      // 这里先赋值是为了和 TypeControl 使用一样的 handleChange
      if (this.currentValue == 1) this.currentValue = 0;
      else this.currentValue = 1;

      this.handleChange(this.currentValue);
    },
    handleChange(val) {
      const data = {
        id: this.id,
        istop: this.currentValue
      };

      this.disabled = true;
      // this.$message({
      //   message: "正在发送请求",
      //   type: "info"
      // });
      UpdateIsTop(data).then(result => {
        this.disabled = false;
        if (result.status == 0) {
          this.$message({
            message: "设置成功",
            type: "success"
          });
          this.currentValue = val;
        } else if (result.status == 2) {
          this.$message({
            message: "置顶文章只能有一个!",
            type: "error"
          });
          this.currentValue = this.value;
        } else {
          this.$message({
            message: "设置失败！",
            type: "error"
          });
          //this.currentValue = this.value;
        }
        this.$emit("change", val);
      });
    }
  }
};
</script>
