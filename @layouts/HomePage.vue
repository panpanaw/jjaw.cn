<script setup lang="ts">
import { useStars } from "../@assets/composables/Blog";
import Header from "../@assets/vue/Header.vue";
import HomePageMain from "../@assets/vue/HomePageMain.vue";
import BlogList from "../@assets/vue/BlogList.vue";

const stars = useStars();

</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'fixed'"></Header>
    <HomePageMain></HomePageMain>
    <h4 class="title">推荐文章</h4>
    <BlogList :list="stars"></BlogList>
</template>

<style scoped>
.title{
    text-align: center;
    font-size: 1.8rem;
    font-weight: bolder;
    margin-top: 3rem;
}
</style>