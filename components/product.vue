<template lang="html">
  <div :class="displayHorizontal ? 'product--horizontal' : 'product'" @click="changePage('/shop/'+product.id)">
            <div :class="displayHorizontal ? 'product_picture--horizontal' : 'product_picture'">
              <img :class="displayHorizontal ? 'productPicture--horizontal' : 'productPicture'" :src="'http://esteve.xyz:1337'+data.img[0].url" alt="image product">
              <div :class="displayHorizontal ? 'bubble--horizontal' : 'bubble'">
                <span>-20%</span>
              </div>
              <div :class="displayHorizontal ? 'favorite--horizontal' : 'favorite'">
                <img width="25" :src="require('@/assets/icons/heart.svg')" alt="heart icon">
              </div>
            </div>
            <div :class="displayHorizontal ? 'product_info--horizontal' : 'product_info'">
              <span>{{ data.description }}</span>
              <h3>{{ data.name }}</h3>
              <div class="price">
                <span v-if="data.promo"><strike>{{data.promo}}€</strike></span>
                <span class="price">{{ data.price }}€</span>
              </div>
            </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: 'Product',
    props: ['data', 'displayHorizontal'],
    data: () => ({

    }),
    mounted(){
        console.log(this.data.img)
    },
    methods: {
        changePage(url) {
            this.$router.push({ path: url })
        }
    }
  }
</script>

<style lang="scss" scoped>
  .product{
        width: 40%;
        margin: 8px;
        @include tablet-portrait-up {  
          width: 20%;
        }
        &_picture{
          position: relative;
          
          .productPicture{
            border-radius: 16px;
            width: 100%;
            background-color: white;
            max-height: 50vh;
            min-height: 170px;
                @include tablet-portrait-up {  
                  max-height: inherit;
                  
                }
          }          
          .bubble{
            position: absolute;
            top: 0;
            left: 0;
            margin: 4px;
            background-color: $primary;
            padding: 8px;
            border-radius: 16px;
          }
          .favorite{
            position: absolute;
            bottom: -20px;
            right: 0;
            background-color: $black;
            padding: 8px;
            border-radius: 100%;
            width: 30px;
            box-shadow: 0px  0px 8px rgba(0,0,0,0.5);
          }
        }
        &_info{
          padding-top: 24px;
          span{
            color: rgba(255,255,255,0.5);
          }
          .price{
            color: $primary;
            font-weight: 600;
          }
        }
      }
      .product--horizontal{
        width: 100%;
        background-color: $dark;
        position: relative;
        display: flex;
        margin: 16px;
        border-radius: 8px;

        .product_picture--horizontal{
          
          
          .productPicture--horizontal{
            border-radius: 0px;
            width: 150px;
            height: 150px;
            object-fit: cover;
            object-position: 0 0;;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;

          }          
          .bubble--horizontal{
            position: absolute;
            top: 0;
            left: 0;  
            background-color: $primary;
            padding: 8px;
            border-top-left-radius: 8px;
          }
          .favorite--horizontal{
            position: absolute;
            bottom: -15px;
            right: 0;
            background-color: $dark;
            padding: 5px;
            border-radius: 100%;
            width: 30px;
            box-shadow: 0px  0px 8px rgba(0,0,0,0.5);
            text-align: center;

          }
        }
        .product_info--horizontal{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 16px;


        }
      }
</style>