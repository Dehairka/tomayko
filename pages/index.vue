<template>
  <div class="homePage">
    <div class="homePage_herobanner">
      <img :src="require('@/assets/img/herobanner.png')" alt="herobanner image">
      <div class="content">
        <h1>New</h1>
        <h1>collection !</h1>
        <input class="btn" type="button" value="Discover">
      </div>
    </div>
    <div class="homePage_sale">
      <div class="top">
        <div class="left">
          <h2>Sale</h2>
          <span>You've never seen it before!</span>
        </div>
          <div class="right">
            <NuxtLink to="/">View all</NuxtLink>
          </div>
      </div>
      <div class="bottom">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(product, index) in 3" :key="index" >
          <div class="product">
            <div class="product_picture">
              <img :src="require('@/assets/img/products/001.png')" alt="image product">
              <div class="bubble">
                <span>-20%</span>
              </div>
              <div class="favorite">
                <img :src="require('@/assets/icons/heart.svg')" alt="heart icon">
              </div>
            </div>
            <div class="product_info">
              <span>Dorothy Perkins</span>
              <h3>Evening Dress</h3>
              <div class="price">
                <span><strike>15€</strike></span>
                <span class="price">12€</span>
              </div>
            </div>
          </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
     <div class="homePage_sale">
      <div class="top">
        <div class="left">
          <h2>New</h2>
          <span>You've never seen it before!</span>
        </div>
          <div class="right">
            <NuxtLink to="/">View all</NuxtLink>
          </div>
      </div>
      <div class="bottom">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(product, index) in 3" :key="index" >
          <div class="product">
            <div class="product_picture">
              <img :src="require('@/assets/img/products/001.png')" alt="image product">
              <div class="bubble">
                <span>-20%</span>
              </div>
              <div class="favorite">
                <img :src="require('@/assets/icons/heart.svg')" alt="heart icon">
              </div>
            </div>
            <div class="product_info">
              <span>Dorothy Perkins</span>
              <h3>Evening Dress</h3>
              <div class="price">
                <span><strike>15€</strike></span>
                <span class="price">12€</span>
              </div>
            </div>
          </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'home',
  data() {
      return {
        swiperOptions: {
          slidesPerView: 2.2,
          spaceBetween: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    }
}
</script>

<style lang="scss" scoped>

.homePage{
  &_herobanner{
    position: relative;
    width: 100vw;
    height: 70vh;

    img{
      width: 100vw;
      height: 70vh;
      object-fit: cover;
    }
    .content{
      position: absolute;
      bottom: 0;
      padding: 16px;
      color: white;
      font-size: 1.6em;
      font-weight: 600;
    }
  }
  &_sale{
    padding: 16px;
    background-color: $black;
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        color: rgba(255,255,255,0.5)
      }
    }
    .bottom{
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-top: 16px;
      .product{
        width: 40%;
        @include tablet-portrait-up {    
            width: 20%;
        }
        &_picture{
          position: relative;
          width: 40vw;
          img{
            border-radius: 16px;
            width: 100%;
            max-height: 50vh;
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
    }
  }
}
</style>
