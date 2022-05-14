<template>
  <div>
    <div class="input-request">
      <div class="input-request__input">
        <label for="ipt">搜索内容</label>
        <input
          name="ipt"
          type="text"
          v-model="value"
          @input="onInput"
          @keyup.enter="onEnter"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "input-request",
  data() {
    return {
      value: "",
    };
  },

  methods: {
    onInput(e) {
      this.$message.info(`触发了请求`);
    },
    onEnter(e) {
      this.$message.info(`触发了请求`);
    },
  },
};
</script>

<style></style>
