<template>
  <div class="shopPage">
    
  </div>
</template>

<script>
export default {
    transition: 'home',
    beforeMount() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  }
}
</script>

<style lang="scss" scoped>
.shopPage{
    
}
</style>
