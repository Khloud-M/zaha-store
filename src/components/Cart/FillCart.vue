<template>
  <div>fill</div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters["Categery/cart"];
    },
  },
};
</script>

<style>
</style>