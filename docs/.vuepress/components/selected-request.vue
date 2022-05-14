<template>
  <div>
    <div class="selected-request">
      <div class="selected-request__input">
        <label for="ipt">搜索内容</label>
        <input
          name="ipt"
          type="text"
          v-model="value"
          @input="onInput"
          @compositionstart="onCompositionStart"
          @compositionend="onCompositionEnd"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selected-request",
  data() {
    return {
      value: "",
      flag: false,
    };
  },

  methods: {
    onInput(e) {
      if (this.flag) {
        return;
      }
      this.$message.info(`触发了请求`);
    },
    onCompositionStart(e) {
      this.flag = true;
      this.$message.info(`输入中...`);
    },
    onCompositionEnd(e) {
      this.flag = false;
      this.$message.info(`输入结束`);
    },
  },
};
</script>

<style></style>
