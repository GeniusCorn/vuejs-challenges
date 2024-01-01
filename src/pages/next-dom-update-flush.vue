<script setup>
const count = ref(0)

async function increment() {
  count.value++

  await nextTick()

  // eslint-disable-next-line no-console
  console.log(+document.getElementById('counter').textContent === 1)
}
</script>

<template>
  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>
