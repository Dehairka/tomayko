<template>
  <div class="categoriesPage">
    <div class="categoriesPage_herobanner pointer" @click="changePage('/shop', 'New Collection')">
      <div class="shadow"></div>
      <img :src="require('@/assets/img/shop/001.png')" alt="category image">
      <h1>New Collection</h1>
    </div>
    <div class="categoriesPage_categories pointer">
      <div class="left">
        <div class="left_top" @click="changePage('/shop', 'New Collection')">
          <h1>Summer <br>sale</h1>
        </div>
        <div class="left_bottom" @click="changePage('/shop', 'TShirts')">
          <img :src="require('@/assets/img/shop/002.png')" alt="category image">
          <h1>TShirts</h1>
        </div>
      </div>
      <div class="right" @click="changePage('/shop', 'Sweats')">
        <img :src="require('@/assets/img/shop/003.png')" alt="category image">
        <h1>Sweats</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    transition: 'home',
    methods:{
      changePage(url, category) {
        this.$store.commit('setCategoryActuel', category)
        this.$router.push({ path: url })
      }
    },
}
</script>

<style lang="scss" scoped>
.categoriesPage{
    background-color: $black;
    width: 100%;
    @include tablet-portrait-up {  
        width: 60%;
        margin: auto;
      }

    &_herobanner{
      position: relative;
      .shadow{
        width: 100%;
        position: absolute;
        top: 0;
        height: 100%;
        box-shadow: inset 0px -50px 37px -9px rgba(0,0,0,0.8);
        
      }
      img{
        height: 40vh;
        width: 100%;
        object-fit: cover;
        object-position: 0 0;
        @include tablet-portrait-up {  
          object-fit: cover;
          object-position: 0 0;
          width: 100%;
          height: 60vh;
        }
      }
      h1{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 16px;
      }
    }

    &_categories{
      display: flex;
      width: 100%;
      .left{
        width: 50%;
        &_top{
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          h1{
            margin: 16px;
            color: $primary;
          }
        }
        &_bottom{
          position: relative;
          h1{
            position: absolute;
            bottom: 0;
            margin: 16px;
          }
          img{
            object-fit: cover;
            width: 100%;
          }
        }
      }
      .right{
        position: relative;
        width: 50%;
        img{
          object-fit: cover;
          width: 100%;
        }
        h1{
          position: absolute;
          top: 0;
          left: 0;
          margin: 16px;
        }
      }
    }
}
</style>
