<script setup lang="ts">
import Header from "../@assets/vue/Header.vue";
import Article from "../@assets/vue/Article.vue";
import Chapters from "../@assets/vue/Chapters.vue";
import ArticleIntro from "../@assets/vue/ArticleIntro.vue";
import Writers from "../@assets/vue/Writers.vue";



</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'sticky'"></Header>
    <Writers></Writers>
    <Chapters></Chapters>
    <ArticleIntro></ArticleIntro>
    <Article></Article>
</template>