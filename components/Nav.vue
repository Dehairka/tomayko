<template>
 <nav class="Nav">
      <img :src="require('@/assets/icons/left.svg')" alt="left chevron" class="chevron pointer" @click="changePage()">
      <h2>{{ title }}</h2>
      <img :src="require('@/assets/icons/search.svg')" alt="search icon">
</nav>
</template>

<script>
export default {
    name: "Notification",
    props: {
        title: {
            type: String,
            default: ""
        },
    },
    methods: {
        changePage() {
            this.$router.go(-1);
        },
    }
};
</script>

<style lang="scss" scoped>
.Nav{
    display: flex;
    justify-content: space-between;
    padding: 16px;
    text-align: left;
  }
</style>