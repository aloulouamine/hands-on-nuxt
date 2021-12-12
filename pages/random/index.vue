<template>
  <div class="text-center text-green-600 text-3xl">
    My random number {{ value }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['random'],
  computed: {
    value() {
      return this.$store.state.random.value
    },
  },
})
</script>
