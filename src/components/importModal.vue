<template>
  <modal name="recipe-input" transition="pop-out" :width="modalWidth" :focus-trap="true" :height="400" classes="rounded-lg dark:bg-night-900">
    <div class="h-full dark:bg-night-900 flex flex-col items-center rounded-lg">
      <div class="flex w-5/6 items-center mb-0">
        <label for="recipeText" class="dark:text-night-100 mt-4">Paste below :</label>
      </div>
      <div class="flex flex-grow w-5/6 items-center mt-0">
        <textarea id="recipeText" class="flex flex-grow h-5/6 rounded-lg" v-model="inputRecipe"></textarea>
      </div>
      <button class="itemButton" id="submit-btn" v-on:click="$emit('submit-recipe', inputRecipe)">Submit</button>
    </div>
  </modal>
</template>
<script>
const MODAL_WIDTH = 656

export default {
  name: 'importModal',
  props: {
    recipe: String
  },
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      inputRecipe: this.recipe
    }
  },
  created() {
    this.modalWidth =
        window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH
  },
  methods: {
    submit() {
      console.log('submit')
    }
  }
}
</script>
<style lang="scss" scoped>

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}

.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .itemButton {
    @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150;
    @apply bg-gray-100 rounded-lg hover:bg-gray-700 hover:text-gray-100 focus:ring;
    @apply dark:bg-night-500 dark:text-night-100 dark:hover:bg-night-700 dark:focus:ring-night-300
  }
}
/*
.itemButton {
  @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150 bg-gray-100 rounded-lg
  @apply focus:shadow-outline hover:bg-gray-700 hover:text-gray-100
}
 */
</style>
