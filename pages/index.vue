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
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.homePage{
  &_herobanner{
    background-color: grey;
    position: relative;

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
}
</style>
