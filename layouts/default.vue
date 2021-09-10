<template>
  <div class="layoutDefault">
      <!-- <Loading /> -->
      <nav v-if="$device.isMobile" class="layoutDefault_navMobile">
          <ul>
              <li class="active">
                  <img :src="require('@/assets/icons/home.svg')" alt="icon nav mobile">
                  <span><NuxtLink to="/">Home</NuxtLink></span>
              </li>
              <li>
                  <img :src="require('@/assets/icons/shop.svg')" alt="icon nav mobile">
                  <span><NuxtLink to="/categories">Shop</NuxtLink></span>
              </li>
              <li>
                  <img :src="require('@/assets/icons/bag.svg')" alt="icon nav mobile">
                  <span>Bag</span>
              </li>
              <li>
                  <img :src="require('@/assets/icons/heart.svg')" alt="icon nav mobile">
                  <span>Favorites</span>
              </li>
              <li>
                  <img :src="require('@/assets/icons/user.svg')" alt="icon nav mobile">
                  <span>Profile</span>
              </li>
          </ul>
          <div class="divider"></div>
      </nav>
      <nav v-else class="layoutDefault_navDesktop">
          <div class="menu">
              ok
          </div>
          <div class="logo">
              <h1>Tomayko</h1>
          </div>
          <div class="account">
              oui
          </div>
      </nav>
      <Nuxt  />
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

* { margin: 0; padding: 0;}
html{
    overflow-x: hidden;
    background-color: $black;
}

.home-enter-active { 
  transition: .5s; 
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}
.home-leave-active{
  transition: .5s; 
  animation-duration: 0.4s;
  animation-fill-mode: both;
  animation-name: fadeInLeftLeave;
}
.home-enter, .home-leave-active { opacity: 0; }

@keyframes fadeInLeft {
   0% {
      opacity: 0;
      transform: translateX(-20px);
   }
   100% {
      opacity: 1;
      transform: translateX(0);
   }
}   
@keyframes fadeInLeftLeave {
   0% {
      opacity: 1;
      transform: translateX(0);
   }
   100% {
      opacity: 0;
      transform: translateX(-20px);
   }
}   

.layoutDefault{
    font-family: 'Lato', sans-serif;
    color: white;
    @include tablet-portrait-up {    
        padding-top: 70px;
    };
    @include phone {    
        padding-bottom: 70px;
    };
    &_navMobile{
        display: flex;
        width: 95.5%;
        background-color: $black;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 55;
        padding: 8px;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        margin: auto;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px -2px 21px 3px rgba(0,0,0,0.6);

        ul{
            display: flex;
            justify-content: space-around;
            width: 100%;
            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: white;
                transition: 0.4s;
                font-size: 0.8em;

                img{
                    width: 30px;
                    height: 30px;
                }
            }
            li.active, li:hover{
                color: $primary;
                fill: $primary;
                svg, img{
                    fill: $primary;
                    color: $primary;
                }
            }
        }
        .divider{
            width: 50%;
            height: 5px;
            background-color: white;
            margin: 8px;
            border-radius: 5px;
        }
    }

    &_navDesktop{
        background-color: $black;
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        padding: 16px;
        position: fixed;
        top: 0;
        width: 99%;
        z-index: 55;
    }
}
</style>
