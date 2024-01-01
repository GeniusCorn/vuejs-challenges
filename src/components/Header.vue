<script setup lang="ts">

</script>

<template>
  <div flex flex-row items-center justify-between p-2>
    <div
      cursor-pointer text-2xl font-mono transition ease-in-out hover:text-emerald
      @click="$router.push('/')"
    >
      Vue.js Challenges
    </div>

    <div>
      <a href="https://github.com/GeniusCorn/vuejs-challenges" target="_blank">
        <div i-tabler-brand-github text-2xl icon-btn />
      </a>
    </div>
  </div>

  <ol>
    <li @click="$router.push('/hello-world')">
      Hello World
    </li>
    <li @click="$router.push('/next-dom-update-flush')">
      Next dom update flush
    </li>
  </ol>
</template>

<style scoped>
li {
  @apply underline cursor-pointer hover:text-emerald transition ease-in-out
}
</style>
