<template>
  <div id="app" class="flex flex-col min-h-screen sm:h-screen">
    <header class="py-4 bg-gray-700 dark:bg-night-700 text-white text-center">
      Legend Of Mana Forge Simulator
    </header>
    <main class="flex flex-1 overflow-y-auto p-5">
      <ManaForge/>
    </main>
    <footer class="py-4 bg-gray-700 dark:bg-night-700 text-center text-white">
      v1.0.0 - Epithumia with thanks to biqutS and Myst Erik Ery for the original code and sim, MarcusMajarra for tests and corrections, Sevon for translations.
    </footer>
  </div>
</template>

<script>
import ManaForge from './components/ManaForge.vue'

export default {
  name: 'App',
  components: {
    ManaForge
  }
}
</script>

<!--suppress CssUnusedSymbol -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.manaforgeBase {
  @apply bg-white dark:bg-night-900
}
/*
.itemButton {
  @apply h-6 px-2 m-0.5 text-xs text-gray-500 transition-colors duration-150 bg-gray-100 rounded-lg
  @apply focus:shadow-outline hover:bg-gray-700 hover:text-gray-100
}
*/
/* Debug : show the div boxes
div {
  border: 1px solid #42b983;
}
*/
</style>
