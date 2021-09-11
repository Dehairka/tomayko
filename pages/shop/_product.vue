<template>
  <div class="productPage">
    <nav class="productPage_nav">
      <img :src="require('@/assets/icons/left.svg')" alt="left chevron" class="chevron" @click="changePage()">
      <h2>{{ product[0].name }}</h2>
      <img :src="require('@/assets/icons/search.svg')" alt="search icon">
    </nav>
    <div class="productPage_herobanner">
      <img :src="'http://esteve.xyz:1337'+product[0].img[0].url" alt="">
    </div>
    <div class="productPage_selects">
      Size, Color, favorite
    </div>
    <div class="productPage_info">
      <div class="left">
        <h2>{{ product[0].name }}</h2>
        <span>{{ product[0].description }}</span>
      </div>
      <div class="right">
        <span>{{ product[0].price }}€</span>
      </div>
      <div class="bottom">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis placeat temporibus. Quasi sit doloremque culpa vitae error debitis, incidunt, perferendis porro quod, neque placeat soluta vel deserunt esse aliquam!</p>
      </div>
    </div>
    <input class="btn addToCart" type="button" value="Add to cart" @click="addItemToCart(product)">
    <div class="divider"></div>
  </div>
</template>

<script>

export default {
  async asyncData({ params, $strapi }) {
    const product = await $strapi.$products.find([['product', params.product]])
    
    return {
      product,
    };
  },
  methods: {
      changePage() {
          this.$router.go(-1);
      },
      addItemToCart(product){
        const newProduct = product[0]
        newProduct.quantity = 1;
        this.$store.dispatch('addItemToCart', newProduct)
      }
  }
};
</script>

<style lang="scss" scoped>
.productPage{
  width: 100%;
  padding-bottom: 32px;
  text-align: center;
  &_nav{
    display: flex;
    justify-content: space-between;
    padding: 16px;
    text-align: left;
  }
  &_herobanner{
    width: 100%;
    img{
      width: 100vw;
    }
  }
  &_info{
    padding: 16px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .left{
      padding-bottom: 16px;
    }
    .right{
      padding-bottom: 16px;
      font-weight: 600;
      font-size: 2em;
    }
    .bottom{
      width: 100%;
    }
  }
  .addToCart{
    width: 80%;
    margin: auto;
  }
    
}
</style>
