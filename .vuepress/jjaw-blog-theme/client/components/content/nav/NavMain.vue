<!-- 导航栏 -->
<script setup lang="ts">
import AdsList from './AdsList.vue';
import NavList from './NavList.vue';


</script>
<template>
    <div class="nav">
        <AdsList class="nax-box-agen" />
        <NavList class="nav-box" />
    </div>
</template>
<style scoped>
.nax-box-agen {
    margin-bottom: 1rem;
}
.nav {
    height: 100%;
}
</style>