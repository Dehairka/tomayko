<template>
  <div class="favoritesPage">
    <div v-if="favorites.length > 0" class="favoritesPage_content">
      <Product v-for="(product, index) in favorites" :key="index" :data="product" :display-horizontal="true"/>
    </div>
    <div v-else class="favoritesPage_Error">
      <p>No products in favorites.</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    transition: 'favorites',
    computed: {
        ...mapState(['favorites'])
    },
    methods:{
      changePage(url, category) {
        this.$store.commit('setCategoryActuel', category)
        this.$router.push({ path: url })
      }
    },
}
</script>

<style lang="scss" scoped>
.favoritesPage{
  width: 95vw;

  &_content{
    padding: 16px;
  }
  &_Error{
    text-align: center;
    padding: 16px;
  }
}
</style>
