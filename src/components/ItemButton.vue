<template>
  <button class="itemButton" v-on:click="$emit('add-item', item.value)">
    {{item.text}}
  </button>
</template>

<script>
export default {
  name: "ItemButton",
  props: {
    item: Object
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .itemButton {
    @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150 bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-gray-100 focus:ring
  }
}
/*
.itemButton {
  @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150 bg-gray-100 rounded-lg
  @apply focus:shadow-outline hover:bg-gray-700 hover:text-gray-100
}
 */
</style>
