<template lang="html">
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({

    }),
    computed: {
        ...mapState(['loading'])
    },
    methods: {
      start() {
        this.$store.commit('setLoading')
      },
      finish() {
        this.$store.commit('setLoading')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .loading-page {
    position: fixed;
    z-index: 55;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: $black, $alpha: 0.8);
    text-align: center;
    padding-top: 300px;
    font-size: 30px;
    font-family: sans-serif;
  }

  .loading {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid rgba($color: $primary, $alpha: 0.7);
    border-radius: 50%;
    border-top-color: $primary;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>