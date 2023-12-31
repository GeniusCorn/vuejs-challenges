<script setup lang="ts">
const msg = ref('Hello World')
</script>

<template>
  <!-- The output of the page is expected to be Hello World -->
  <div>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<style scoped>

</style>
