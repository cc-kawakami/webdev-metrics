<script setup>
import Modal from './Modal.vue'

defineProps({
  metrics: Object,
  type: String
})
</script>

<template>
  <div
    class="block flex-auto text-center p-5 rounded-md border-black m-1 border-2 cursor-pointer"
    :class="{
       'bg-yellow-300': type === 'group',
       'hover:bg-violet-500': type === 'group',
       'hover:text-white': type === 'group',
       'bg-yellow-100': type === 'detail',
       'hover:bg-violet-100': type === 'detail'
      }"
    @click="isOpen = true"
  >{{ metrics.name }}</div>
  <modal
    v-if="isOpen"
    :metrics="metrics"
    @close="isOpen = false"
  ></modal>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      isOpen: false
    }
  },
})
</script>
