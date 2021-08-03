<template>
  <div id="explanations" ref="explanations">
    <div v-if="explanations.explain_init_stat_limits" v-html="explanations.explain_init_stat_limits">
    </div>
    <div v-if="explanations.explain_sub_init_cards" v-html="explanations.explain_sub_init_cards">
    </div>
    <div v-if="explanations.explain_material_init" v-html="explanations.explain_material_init">
    </div>
  </div>
</template>

<script>
export default {
  name: "ExplanationSheet",
  props: {'explanations' : Object}
}
</script>

<style scoped>

</style>
