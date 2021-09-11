<template>
  <div class="layoutDefault">
      <!-- <Loading /> -->
      <nav v-if="$device.isMobile" class="layoutDefault_navMobile">
          <ul>
              <li class="active">
                  <NuxtLink to="/">
                    <svg width="28" height="28" viewBox="0 0 29 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2941 24V15.5294H16.9412V24H24V12.7059H28.2353L14.1176 0L0 12.7059H4.23529V24H11.2941Z" fill="white"/>
                    </svg>
                    <span>Home</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink to="/categories">
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5.4H2.5V5.9H3V5.4ZM5.4 5.4L5.85176 5.18573L5.71624 4.9H5.4V5.4ZM9.72 14.508L10.1579 14.7493L10.2815 14.5251L10.1718 14.2937L9.72 14.508ZM8.1 17.448L8.53417 17.6961L8.53792 17.6893L8.1 17.448ZM24.6 21V21.5H25.1V21H24.6ZM24.6 18.6H25.1V18.1H24.6V18.6ZM10.404 18.3L9.91893 18.1787L9.904 18.2384V18.3H10.404ZM10.44 18.156L10.0023 17.9143L9.97075 17.9714L9.95493 18.0347L10.44 18.156ZM11.52 16.2V15.7H11.2249L11.0823 15.9583L11.52 16.2ZM22.56 14.964L22.1222 14.7225L22.1216 14.7236L22.56 14.964ZM26.856 7.176L27.2938 7.41751L27.2958 7.41379L26.856 7.176ZM25.8 5.4L25.8012 4.9H25.8V5.4ZM8.052 5.4L7.59949 5.61268L7.73453 5.9H8.052V5.4ZM6.924 3L7.37651 2.78732L7.24147 2.5H6.924V3ZM10.2 21.7C8.60061 21.7 7.31201 23.0071 7.31201 24.6H8.31201C8.31201 23.5529 9.15941 22.7 10.2 22.7V21.7ZM7.31201 24.6C7.31201 26.1929 8.60061 27.5 10.2 27.5V26.5C9.15941 26.5 8.31201 25.6471 8.31201 24.6H7.31201ZM10.2 27.5C11.7962 27.5 13.1 26.1961 13.1 24.6H12.1C12.1 25.6439 11.2439 26.5 10.2 26.5V27.5ZM13.1 24.6C13.1 23.0039 11.7962 21.7 10.2 21.7V22.7C11.2439 22.7 12.1 23.5561 12.1 24.6H13.1ZM2.5 3V5.4H3.5V3H2.5ZM3 5.9H5.4V4.9H3V5.9ZM4.94824 5.61427L9.26824 14.7223L10.1718 14.2937L5.85176 5.18573L4.94824 5.61427ZM9.28208 14.2667L7.66208 17.2067L8.53792 17.6893L10.1579 14.7493L9.28208 14.2667ZM7.66588 17.1999C7.43007 17.6126 7.3 18.0943 7.3 18.6H8.3C8.3 18.2657 8.38593 17.9554 8.53412 17.6961L7.66588 17.1999ZM7.3 18.6C7.3 20.1961 8.60386 21.5 10.2 21.5V20.5C9.15614 20.5 8.3 19.6439 8.3 18.6H7.3ZM10.2 21.5H24.6V20.5H10.2V21.5ZM25.1 21V18.6H24.1V21H25.1ZM24.6 18.1H10.704V19.1H24.6V18.1ZM10.704 18.1C10.8121 18.1 10.904 18.1919 10.904 18.3H9.904C9.904 18.7441 10.2599 19.1 10.704 19.1V18.1ZM10.8891 18.4213L10.9251 18.2773L9.95493 18.0347L9.91893 18.1787L10.8891 18.4213ZM10.8777 18.3977L11.9577 16.4417L11.0823 15.9583L10.0023 17.9143L10.8777 18.3977ZM11.52 16.7H20.46V15.7H11.52V16.7ZM20.46 16.7C21.5457 16.7 22.5041 16.1058 22.9984 15.2044L22.1216 14.7236C21.7999 15.3102 21.1744 15.7 20.46 15.7V16.7ZM22.9978 15.2055L27.2938 7.4175L26.4182 6.9345L22.1222 14.7225L22.9978 15.2055ZM27.2958 7.41379C27.5809 6.88649 27.5679 6.24816 27.2615 5.73293L26.402 6.244C26.5285 6.4568 26.5339 6.72043 26.4162 6.93821L27.2958 7.41379ZM27.2615 5.73293C26.9552 5.2177 26.4006 4.90138 25.8012 4.9L25.7988 5.9C26.0464 5.90057 26.2755 6.03121 26.402 6.244L27.2615 5.73293ZM25.8 4.9H8.052V5.9H25.8V4.9ZM8.50451 5.18732L7.37651 2.78732L6.47149 3.21268L7.59949 5.61268L8.50451 5.18732ZM6.924 2.5H3V3.5H6.924V2.5ZM22.2 21.7C20.6006 21.7 19.312 23.0071 19.312 24.6H20.312C20.312 23.5529 21.1594 22.7 22.2 22.7V21.7ZM19.312 24.6C19.312 26.1929 20.6006 27.5 22.2 27.5V26.5C21.1594 26.5 20.312 25.6471 20.312 24.6H19.312ZM22.2 27.5C23.7962 27.5 25.1 26.1961 25.1 24.6H24.1C24.1 25.6439 23.2439 26.5 22.2 26.5V27.5ZM25.1 24.6C25.1 23.0039 23.7962 21.7 22.2 21.7V22.7C23.2439 22.7 24.1 23.5561 24.1 24.6H25.1Z" fill="white"/>
                    </svg>

                    <span>Shop</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink to="/cart">
                    <svg width="28" height="28" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4558 20.5187L23.4583 20.542L23.4629 20.565C23.4867 20.6823 23.5 20.796 23.5 20.9091C23.5 21.8094 22.8081 22.5 22 22.5H12H2C1.19186 22.5 0.5 21.8094 0.5 20.9091C0.5 20.796 0.513314 20.6823 0.537055 20.565L0.541717 20.542L0.544199 20.5187L2.4972 2.14375L2.5 2.11741V2.09091C2.5 1.19065 3.19186 0.5 4 0.5H12H20C20.8081 0.5 21.5 1.19065 21.5 2.09091V2.11741L21.5028 2.14375L23.4558 20.5187ZM17.5 6.27273V5.44368C18.1009 5.08516 18.5 4.41815 18.5 3.65909C18.5 2.53849 17.6249 1.59091 16.5 1.59091C15.3751 1.59091 14.5 2.53849 14.5 3.65909V6.27273C14.5 7.74695 13.3571 8.90909 12 8.90909C10.6429 8.90909 9.5 7.74695 9.5 6.27273V3.65909C9.5 2.53849 8.62486 1.59091 7.5 1.59091C6.37514 1.59091 5.5 2.53849 5.5 3.65909C5.5 4.41815 5.89908 5.08516 6.5 5.44368V6.27273C6.5 9.41001 8.94614 12 12 12C15.0539 12 17.5 9.41001 17.5 6.27273Z" stroke="#ABB4BD"/>
                    </svg>
                    <span>Bag</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink to="/favorites">
                    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.079 27L13.1826 25.2736C6.44687 19.1657 2 15.1373 2 10.1935C2 6.16512 5.16512 3 9.19346 3C11.4692 3 13.6534 4.0594 15.079 5.73351C16.5046 4.0594 18.6888 3 20.9646 3C24.9929 3 28.158 6.16512 28.158 10.1935C28.158 15.1373 23.7112 19.1657 16.9755 25.2866L15.079 27Z" stroke="#ABB4BD"/>
                    </svg>
                    <span>Favorites</span>
                  </NuxtLink>
              </li>
              <li>
                  <NuxtLink to="/profile">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1408 27L15.1408 26.5H15.1408L15.1408 27ZM5 21.5577L4.50006 21.5502L4.49772 21.705L4.58334 21.8341L5 21.5577ZM25.2817 21.5577L25.6984 21.8341L25.784 21.705L25.7816 21.5502L25.2817 21.5577ZM15.1408 3.5C17.6703 3.5 19.7113 5.54093 19.7113 8.07042H20.7113C20.7113 4.98865 18.2226 2.5 15.1408 2.5V3.5ZM19.7113 8.07042C19.7113 10.5999 17.6703 12.6408 15.1408 12.6408V13.6408C18.2226 13.6408 20.7113 11.1522 20.7113 8.07042H19.7113ZM15.1408 12.6408C12.6113 12.6408 10.5704 10.5999 10.5704 8.07042H9.57041C9.57041 11.1522 12.0591 13.6408 15.1408 13.6408V12.6408ZM10.5704 8.07042C10.5704 5.54093 12.6113 3.5 15.1408 3.5V2.5C12.0591 2.5 9.57041 4.98865 9.57041 8.07042H10.5704ZM15.1408 26.5C11.2297 26.5 7.57865 24.5406 5.41666 21.2813L4.58334 21.8341C6.9306 25.3727 10.8945 27.5 15.1408 27.5L15.1408 26.5ZM5.49994 21.5653C5.50991 20.904 5.84489 20.2784 6.47245 19.6902C7.10211 19.1002 7.99222 18.5826 9.01476 18.1549C11.0619 17.2987 13.519 16.8521 15.1408 16.8521V15.8521C13.3824 15.8521 10.7945 16.3266 8.6289 17.2324C7.5451 17.6857 6.53697 18.2593 5.78865 18.9606C5.0382 19.6638 4.51544 20.5297 4.50006 21.5502L5.49994 21.5653ZM15.1408 16.8521C16.7541 16.8521 19.2113 17.2986 21.2608 18.155C22.2845 18.5827 23.1762 19.1004 23.8072 19.6906C24.4362 20.2789 24.7718 20.9045 24.7817 21.5653L25.7816 21.5502C25.7662 20.5293 25.242 19.6633 24.4903 18.9603C23.7407 18.2591 22.731 17.6855 21.6463 17.2323C19.4789 16.3267 16.891 15.8521 15.1408 15.8521V16.8521ZM24.865 21.2813C22.703 24.5406 19.052 26.5 15.1408 26.5L15.1408 27.5C19.3872 27.5 23.3511 25.3727 25.6984 21.8341L24.865 21.2813Z" fill="#ABB4BD"/>
                  </svg>
                  <span>Profile</span>
                  </NuxtLink>
              </li>
          </ul>
          <div class="divider"></div>
      </nav>
      <nav v-else class="layoutDefault_navDesktop">
          <div class="menu">
              <img width="30px" :src="require('@/assets/icons/menu.svg')" alt="menu icon">
          </div>
          <div class="logo">
              <h1>Tomayko</h1>
          </div>
          <div class="account">
                <img width="30px" :src="require('@/assets/icons/user.svg')" alt="menu icon">
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
    width: 100vw;
}
::selection{
    background-color: $primary;
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

a.nuxt-link-active {
  font-weight: bold;
  color: white;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: $primary;
  svg, svg path{
    fill: $primary!important;
    stroke: $primary!important;
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
                transition: 0.4s;
                font-size: 0.8em;
                a{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    svg path{
                        fill: none;
                        stroke: white;
                    }
                    
                }

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
        width: 97vw;
        z-index: 55;
        margin: 0;
        color: $primary;


    }
}
</style>
