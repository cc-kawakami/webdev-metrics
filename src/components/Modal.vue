<script setup>
defineProps({
  metrics: Object
})
</script>

<template>
<div
  class="absolute h-full p-52 w-full top-0 left-0 bg-opacity-50 bg-black">
  <div class="relative h-full w-full bg-white border-2 border-black z-50 p-10 rounded-md">
    <h2 class="font-bold text-2xl mb-5">{{ metrics.name }}</h2>

    <p class="mb-5">{{ metrics.description }}</p>

    <a 
      v-if="metrics.link"
      :href="metrics.link.url"
      class="text-blue-600"
    >
      {{metrics.link.title}}
    </a>

    <div
      class="absolute bottom-10 right-10 cursor-pointer"
      @click="$emit('close')"
    >Close</div>
  </div>
</div>
</template>
