<script setup>
import Group from './components/Group.vue'

defineProps({
  title: String,
  metrics: Array,
  langs: Array
})
</script>

<template>
  <div class="p-10">
    <h1 class="text-center font-bold text-2xl mb-10">{{ title }}</h1>

    <group
      v-for="g in metrics"
      :key="g"
      :lang="lang"
      :group="g"
    ></group>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      lang: "en"
    }
  }
})
</script>
