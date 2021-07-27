<template>
  <button class="itemButton" v-on:click="$emit('add-item', item.value)">
    {{get_text(item)}}
  </button>
</template>

<script>
export default {
  name: "ItemButton",
  props: {
    item: Object,
    classic: Boolean,
    color: String,
    icon: String
  },
  methods: {
    get_text(o) {
      if (this.classic && 'psxtext' in o) {
        return o.psxtext
      }
      return o.text
    }
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .itemButton {
    @apply h-6 px-0 m-0.5 text-xs text-gray-500 transition-colors duration-150;
    @apply bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-gray-100 focus:ring;
    @apply dark:bg-night-500 dark:text-night-100 dark:hover:bg-night-700 dark:focus:ring-night-300;
    @apply text-xxs md:text-sm xl:text-xxs 2xl:text-xs
  }
}
/*
.itemButton {
  @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150 bg-gray-100 rounded-lg
  @apply focus:shadow-outline hover:bg-gray-700 hover:text-gray-100
}
 */
</style>
