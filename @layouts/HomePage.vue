<script setup lang="ts">
import Header from "../@assets/vue/Header.vue";
import HomePageMain from "../@assets/vue/HomePageMain.vue";

</script>
<template>
    <Header :is-auto-hide="true" :is-top-ppacity="true" :position="'fixed'"></Header>
    <HomePageMain></HomePageMain>
</template>