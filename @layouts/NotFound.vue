<script setup lang="ts">
import Header from '../@assets/vue/Header.vue';
import Footer from "../@assets/vue/Footer.vue";
import { useStars } from '../@assets/composables/Blog';
import BlogList from "../@assets/vue/BlogList.vue";
const stars = useStars();
</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'sticky'"></Header>
    <div class="t404">
        404 页面不存在
    </div>
    <h4 class="title">推荐文章</h4>
    <BlogList :list="stars"></BlogList>
    <Footer></Footer>
</template>
<style scoped>
.t404 {
    font-size: 1.5rem;
    text-align: center;
    padding: 10rem 0rem;
    border-bottom: 0.1rem solid var(--border-color);
}

.title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bolder;
    margin-top: 3rem;
}</style>