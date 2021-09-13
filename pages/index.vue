<template>
  <div class="homePage">
    <div class="homePage_herobanner">
      <img :src="require('@/assets/img/herobanner.png')" alt="herobanner image">
      <div class="content">
        <h1>New</h1>
        <h1>collection !</h1>
        <input class="btn" type="button" value="Discover" @click="changePage('/categories')">
      </div>
    </div>
    <div class="homePage_sale">
      <div class="top">
        <div class="left">
          <h2>Sweats</h2>
          <span>You've never seen it before!</span>
        </div>
          <div class="right">
            <NuxtLink to="/shop">View all</NuxtLink>
          </div>
      </div>
      <div class="bottom">
        <swiper ref="mySwiper" :options="$device.isMobile ? swiperOptions : swiperOptionsDesktop">
          <swiper-slide v-for="(product, index) in saleHome[0].products.slice(0,4)" :key="index" >
            <Product :display-horizontal="false" :data="product" />
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
            <NuxtLink to="/categories">View all</NuxtLink>
          </div>
      </div>
      <div class="bottom">
        <swiper ref="mySwiper" :options="$device.isMobile ? swiperOptions : swiperOptionsDesktop">
          <swiper-slide v-for="(product, index) in newHome" :key="index" >
            <Product :display-horizontal="false" :data="product" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    async asyncData({ $strapi, store, error }) {
    try {
      // const response = await $strapi.$products.find('category.name='+category)
      const response = await $strapi.$categories.find('name=Sweats')
      store.commit('setSaleHome', response)
      const newHome = await $strapi.$products.find()
      store.commit('setNewHome', newHome.slice(0,4))
    } catch (e) {
      error(e)
    }
  },
  // transition: 'home',
  data() {
      return {
        swiperOptions: {
          slidesPerView: 2.2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          // Some Swiper option/callback...
        },
        swiperOptionsDesktop: {
          slidesPerView: 3.2,
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
      },
      ...mapState(['saleHome', 'newHome'])
    },
    methods:{
      changePage(url) {
        this.$router.push({ path: url })
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
      @include tablet-portrait-up {  
        object-position: 0 20%;
      }
    }
    .content{
      position: absolute;
      bottom: 0;
      padding: 16px;
      color: white;
      font-size: 1.6em;
      font-weight: 600;
      @include tablet-portrait-up {  
        left: 19%;
        bottom: 20%;
      }
    }
  }
  &_sale{
    padding: 16px;
    background-color: $black;
    @include tablet-portrait-up {  
        width: 60%;  
        margin: auto;
      }
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
        width: 80%;
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
    }
  }
}
</style>
