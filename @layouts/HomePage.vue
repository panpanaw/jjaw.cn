<script setup lang="ts">
import Header from "../@assets/vue/Header.vue";
import HomePageMain from "../@assets/vue/HomePageMain.vue";
import Stars from "../@assets/vue/Stars.vue";

</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'fixed'"></Header>
    <HomePageMain></HomePageMain>
    <Stars title="精选文章"></Stars>
</template>