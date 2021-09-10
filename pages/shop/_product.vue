<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.price.formatted_with_symbol }}</p>
  </div>
</template>

<script>

export default {
  async asyncData({ params, $commerce }) {
    const product = await $commerce.products.retrieve(params.product)

    return {
      product,
    };
  },
};
</script>

<style lang="scss" scoped>
.productPage{
    
}
</style>
