<template lang="html">
  <div :class="displayHorizontal ? 'product--horizontal' : 'product'" >
							<div :class="displayHorizontal ? 'product_picture--horizontal' : 'product_picture'">
									<img v-if="data.img" :class="displayHorizontal ? 'productPicture--horizontal' : 'productPicture'" :src="'http://esteve.xyz:1337' + data.img[0].url" alt="image product" @click="changePage('/shop/'+data.product)">
									<div v-if="data.promo" :class="displayHorizontal ? 'bubble--horizontal' : 'bubble'" @click="changePage('/shop/'+data.product)">
											<span >{{ (data.price - data.promo) / data.promo * 100 }}%</span>
									</div>
									<div :class="{ 'favorite': !displayHorizontal, 'favorite--horizontal': displayHorizontal, 'favorited': data.favorited}" @click="addFavorite(data)">
											<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M15.079 27L13.1826 25.2736C6.44687 19.1657 2 15.1373 2 10.1935C2 6.16512 5.16512 3 9.19346 3C11.4692 3 13.6534 4.0594 15.079 5.73351C16.5046 4.0594 18.6888 3 20.9646 3C24.9929 3 28.158 6.16512 28.158 10.1935C28.158 15.1373 23.7112 19.1657 16.9755 25.2866L15.079 27Z" stroke="#ABB4BD"/>
											</svg>
									</div>
							</div>
							<div :class="displayHorizontal ? 'product_info--horizontal' : 'product_info'" @click="changePage('/shop/'+data.product)">
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
import { mapActions } from 'vuex'

  export default {
    name: 'Product',
    props: {
      data: {
        type: Object,
        default: null
      },
      displayHorizontal: Boolean
    },
    methods: {
        changePage(url) {
            this.$router.push({ path: url })
        },
        addFavorite(product) {
          this.addItemToFavorites(product);
        },
        ...mapActions(['addItemToFavorites']),
    }
  }
</script>

<style lang="scss" scoped>
.favorited{
  svg, svg path{
    color: $primary;
    fill: $primary;
    border: none;
    stroke: none;
  }
}
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
        margin-top: 32px;
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