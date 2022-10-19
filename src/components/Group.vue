<script setup>
import Metrics from './Metrics.vue'

defineProps({
  group: Object
})
</script>

<template>
  <metrics
    :metrics="group.category"
    type="group"
  ></metrics>
  <div class="flex">
    <metrics
      v-for="m in group.metrics"
      :key="m"
      :metrics="m"
      type="detail"
    ></metrics>
  </div>
</template>
