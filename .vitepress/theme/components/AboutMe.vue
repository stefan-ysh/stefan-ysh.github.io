<template>
  <div style="padding-top: 10px">
    非科班出身现役互联网从业人员，从事过的工作有流水线工人、力工、服务员、售后......
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from "vitepress";
import { computed } from "vue";
import { useYearSort } from "../functions";

const { theme } = useData();
const data = computed(() => useYearSort(theme.value.posts));
</script>

<style scoped>
.year {
  padding: 16px 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: var(--date-font-family);
}
</style>
